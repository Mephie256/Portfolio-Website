"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scroll/load animations for the whole site, driven by data attributes:
//   [data-pop]      photos and image cards - scale up with a bounce
//   [data-card]     cards - slam up from below with a slight tilt, staggered
//   [data-heading]  section header block - pill pops, title wipes up, subtitle fades
// All of them play on the way down and animate back to hidden on the way up.
//   [data-reveal]   anything else - simple fade up
// CSS hides all of them beforehand (see globals.css) so nothing flashes.
// On pages with an intro (IntroLoader) everything waits for the hero text to land.
export default function PageAnimations() {
    useEffect(() => {
        const q = (sel) => gsap.utils.toArray(sel);
        const images = q("[data-pop]");
        const cards = q("[data-card]");
        const reveals = q("[data-reveal]");
        const headings = q("[data-heading]");
        const headingParts = headings.flatMap((h) => [...h.children]);

        const show = (el) => {
            el.style.transition = "";
            el.style.opacity = "1";
        };

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            [...images, ...cards, ...reveals, ...headingParts].forEach(show);
            return;
        }

        // Hover effects on these elements are CSS transforms + transitions, so GSAP
        // takes over while animating and hands the transform back when done.
        const hold = function () {
            this.targets().forEach((el) => (el.style.transition = "none"));
        };
        const release = function () {
            this.targets().forEach((el) => {
                gsap.set(el, { clearProps: "transform" });
                show(el);
            });
        };
        // Elements entering together are staggered; the total spread is capped so a
        // jump (e.g. a nav anchor) that triggers many at once never feels slow.
        const spread = (n, each, max) => Math.min(each * (n - 1), max);

        // Fully reversible: scrolling down past the trigger line plays the entrance,
        // scrolling back up past it animates the elements back to their hidden state.
        const enter = (items, from, to) =>
            ScrollTrigger.batch(items, {
                start: "top 90%",
                onEnter: (batch) =>
                    gsap.fromTo(batch, from, {
                        ...to,
                        stagger: { amount: spread(batch.length, 0.12, 0.5) },
                        overwrite: true,
                        onStart: hold,
                        onComplete: release,
                    }),
                onLeaveBack: (batch) =>
                    gsap.to(batch, {
                        ...from,
                        duration: 0.5,
                        ease: "power2.in",
                        stagger: { amount: spread(batch.length, 0.06, 0.3), from: "end" },
                        overwrite: true,
                        onStart: hold,
                    }),
            });

        const start = () => {
            // photos and image cards: bouncy scale-up
            enter(
                images,
                { opacity: 0, scale: 0.6, y: 40 },
                { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
            );

            // cards: slam up from below, alternating tilt
            enter(
                cards,
                { opacity: 0, y: 80, scale: 0.9, rotation: (i) => (i % 2 ? 2.5 : -2.5) },
                { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.35)" }
            );

            // loose blocks: fade up
            enter(
                reveals,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
            );

            // section headers: pill pops, title wipes up out of its box, subtitle fades.
            // One paused timeline per header: played on the way down, reversed on the way up.
            headings.forEach((h) => {
                const pill = h.querySelector(":scope > h4");
                const title = h.querySelector(":scope > h2");
                const sub = h.querySelector(":scope > p");
                const tl = gsap.timeline({
                    paused: true,
                    onComplete: () =>
                        [pill, title, sub].filter(Boolean).forEach((el) => {
                            gsap.set(el, { clearProps: "transform,clipPath" });
                            show(el);
                        }),
                });
                if (pill)
                    tl.fromTo(pill, { opacity: 0, scale: 0.6, y: 16 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(2)" }, 0);
                if (title)
                    tl.fromTo(
                        title,
                        { opacity: 0, y: 50, clipPath: "inset(100% -5% -20% -5%)" },
                        { opacity: 1, y: 0, clipPath: "inset(-20% -5% -20% -5%)", duration: 1, ease: "power4.out" },
                        0.1
                    );
                if (sub)
                    tl.fromTo(sub, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.35);

                ScrollTrigger.create({
                    trigger: h,
                    start: "top 88%",
                    onEnter: () => tl.timeScale(1).play(),
                    onLeaveBack: () => tl.timeScale(1.8).reverse(),
                });
            });
        };

        const ctx = gsap.context(() => {});
        let started = false;
        const run = () => {
            if (started) return;
            started = true;
            ctx.add(start);
        };

        const intro = document.getElementById("intro-loader");
        const introPlaying = intro && getComputedStyle(intro).display !== "none";
        if (introPlaying) {
            window.addEventListener("intro:reveal", run, { once: true });
        } else {
            run();
        }

        // layout settles after images load, which moves the trigger points
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        // safety net: if the intro never signals, start anyway so nothing stays hidden
        const fallback = setTimeout(run, 9000);

        return () => {
            clearTimeout(fallback);
            window.removeEventListener("intro:reveal", run);
            window.removeEventListener("load", refresh);
            ctx.revert();
            [...images, ...cards, ...reveals, ...headingParts].forEach(show);
        };
    }, []);

    return null;
}
