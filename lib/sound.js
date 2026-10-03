// UI sound engine for the SND01 "sine" kit (https://snd.dev, free for commercial use).
// One audio sprite (hosted in /public/sounds/snd01) is decoded once with the Web Audio
// API and sliced into short one-shot sounds. Browsers only allow audio after a user
// gesture, so the context is created on the first pointer/key press; the file itself is
// prefetched while idle so it is ready by then.

// name -> [start, duration] in seconds inside the sprite (from SND01's spritemap)
const SPRITE = {
    button: [0, 0.1],
    caution: [2, 0.161],
    celebration: [4, 1],
    disabled: [6, 0.07],
    notification: [8, 0.3],
    select: [16, 0.1],
    swipe_01: [20, 0.15],
    swipe_02: [22, 0.15],
    swipe_03: [24, 0.15],
    swipe_04: [26, 0.15],
    swipe_05: [28, 0.15],
    tap_01: [30, 0.01],
    tap_02: [32, 0.01],
    tap_03: [34, 0.01],
    tap_04: [36, 0.01],
    tap_05: [38, 0.01],
    toggle_off: [40, 0.1],
    toggle_on: [42, 0.1],
    transition_down: [44, 0.1],
    transition_up: [46, 0.101],
    type_01: [48, 0.01],
    type_02: [50, 0.01],
    type_03: [52, 0.01],
    type_04: [54, 0.01],
    type_05: [56, 0.01],
};

// groups with several variants: a random one plays, never the same twice in a row
const VARIANTS = {
    tap: ["tap_01", "tap_02", "tap_03", "tap_04", "tap_05"],
    swipe: ["swipe_01", "swipe_02", "swipe_03", "swipe_04", "swipe_05"],
    type: ["type_01", "type_02", "type_03", "type_04", "type_05"],
};

const STORAGE_KEY = "sound";
const MASTER_VOLUME = 0.7;

let ctx = null;
let master = null;
let buffer = null;
let fileData = null; // prefetched, still-encoded sprite
let fileRequest = null;
let readyRequest = null;
let enabled = true;
let pending = null; // a sound requested while still loading
const lastPlayed = {};
const lastVariant = {};
const listeners = new Set();

if (typeof window !== "undefined") {
    try {
        enabled = localStorage.getItem(STORAGE_KEY) !== "off";
    } catch {}
}

const notify = () => listeners.forEach((fn) => fn(enabled));

export const isEnabled = () => enabled;

export function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

export function setEnabled(value) {
    enabled = !!value;
    try {
        localStorage.setItem(STORAGE_KEY, enabled ? "on" : "off");
    } catch {}
    notify();
}

// Download the sprite ahead of time (no audio context needed). Ogg is the smallest;
// Safari falls back to m4a.
export function prefetch() {
    if (typeof window === "undefined" || fileRequest) return fileRequest;
    const probe = document.createElement("audio");
    const ogg = probe.canPlayType('audio/ogg; codecs="vorbis"');
    const src = ogg ? "/sounds/snd01/audioSprite.ogg" : "/sounds/snd01/audioSprite.m4a";
    fileRequest = fetch(src)
        .then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error(r.status))))
        .then((data) => (fileData = data))
        .catch(() => (fileRequest = null));
    return fileRequest;
}

// Create + resume the audio context and decode the sprite. Must first be called from
// a user gesture (see SoundEffects).
export function ready() {
    if (typeof window === "undefined") return Promise.resolve(false);
    if (readyRequest) return readyRequest;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return Promise.resolve(false);

    ctx = new AudioCtx();
    master = ctx.createGain();
    master.gain.value = MASTER_VOLUME;
    master.connect(ctx.destination);

    readyRequest = Promise.all([ctx.resume().catch(() => {}), prefetch()])
        .then(() => {
            if (!fileData) return false;
            // decodeAudioData consumes its buffer, so hand it a copy
            return new Promise((resolve, reject) =>
                ctx.decodeAudioData(fileData.slice(0), resolve, reject)
            );
        })
        .then((decoded) => {
            if (!decoded) return false;
            buffer = decoded;
            // play the sound that triggered the load, if it was just now
            if (pending && performance.now() - pending.at < 600) play(pending.name, pending.options);
            pending = null;
            return true;
        })
        .catch(() => false);

    // stay quiet while the tab is in the background
    document.addEventListener("visibilitychange", () => {
        if (!ctx) return;
        if (document.hidden) ctx.suspend().catch(() => {});
        else ctx.resume().catch(() => {});
    });

    return readyRequest;
}

// play("tap"), play("button", { volume: 0.5 }). throttle = min ms between plays of a name.
export function play(name, options = {}) {
    if (!enabled || typeof window === "undefined") return;
    const { volume = 1, throttle = 40 } = options;

    const now = performance.now();
    if (lastPlayed[name] && now - lastPlayed[name] < throttle) return;

    if (!buffer || !ctx) {
        pending = { name, options, at: now };
        ready();
        return;
    }
    if (ctx.state === "suspended") ctx.resume().catch(() => {});

    let key = name;
    const group = VARIANTS[name];
    if (group) {
        const choices = group.filter((k) => k !== lastVariant[name]);
        key = choices[Math.floor(Math.random() * choices.length)];
        lastVariant[name] = key;
    }
    const slice = SPRITE[key];
    if (!slice) return;
    lastPlayed[name] = now;

    const [start, duration] = slice;
    const t = ctx.currentTime;
    const source = ctx.createBufferSource();
    const gain = ctx.createGain();
    source.buffer = buffer;
    gain.gain.setValueAtTime(volume, t);
    // tiny fade-out so longer sounds never end on a click
    if (duration > 0.06) {
        gain.gain.setValueAtTime(volume, t + duration - 0.03);
        gain.gain.linearRampToValueAtTime(0, t + duration);
    }
    source.connect(gain).connect(master);
    source.start(t, start, duration);
}
