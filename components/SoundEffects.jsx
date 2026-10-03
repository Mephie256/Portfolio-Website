"use client";
import { useEffect } from "react";
import { play, prefetch, ready } from "@/lib/sound";

// Site-wide UI sounds (SND01 "sine" kit). Uses event delegation so every link and
// button gets a sound without touching each component:
//   - any link / button / summary click  -> "tap"   (random of 5 variants)
//   - [data-snd="button"]                 -> "button" (primary actions)
//   - [data-snd="none"]                   -> silent (element plays its own sound)
//   - typing in a field                   -> "type"  (random of 5 variants)
// Elements can also set data-snd to any other sound name (e.g. "select").
const CLICKABLE = '[data-snd], a[href], button, [role="button"], summary, label[for], input[type="submit"]';

export default function SoundEffects() {
    useEffect(() => {
        // fetch the sound file while the browser is idle so it is ready by the first gesture
        const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 800));
        idle(() => prefetch());

        // browsers only allow audio after a gesture: set the context up on the first one
        const unlock = () => {
            ready();
            ["pointerdown", "keydown", "touchstart"].forEach((e) => window.removeEventListener(e, unlock, true));
        };
        ["pointerdown", "keydown", "touchstart"].forEach((e) => window.addEventListener(e, unlock, { capture: true, passive: true }));

        const onClick = (e) => {
            const el = e.target.closest?.(CLICKABLE);
            if (!el) return;
            const name = el.dataset.snd;
            if (name === "none") return;
            if (el.disabled || el.getAttribute("aria-disabled") === "true") return play("disabled");
            play(name || "tap", { volume: name === "button" ? 0.9 : 0.8 });
        };

        const NON_TYPING = new Set(["Shift", "Control", "Alt", "Meta", "Tab", "Escape", "CapsLock", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]);
        const onKeyDown = (e) => {
            const t = e.target;
            if (!t || !(t.matches?.("textarea, input:not([type=checkbox]):not([type=radio]):not([type=submit]):not([type=button])"))) return;
            if (NON_TYPING.has(e.key) || e.repeat) return;
            play("type", { volume: 0.6, throttle: 45 });
        };

        document.addEventListener("click", onClick, true);
        document.addEventListener("keydown", onKeyDown, true);
        return () => {
            document.removeEventListener("click", onClick, true);
            document.removeEventListener("keydown", onKeyDown, true);
            ["pointerdown", "keydown", "touchstart"].forEach((e) => window.removeEventListener(e, unlock, true));
        };
    }, []);

    return null;
}
