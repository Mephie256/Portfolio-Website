"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Pops every [data-pop] element in (scale + fade with a little bounce) on page
// load/reload, and again as it scrolls into view. CSS hides them beforehand
// (see globals.css) so there is no flash of the un-animated image.
// On the home page it waits for the intro (IntroLoader) to reveal the hero text.
export default function ImagePop() {
    useEffect(() => {
        const items = gsap.utils.toArray("[data-pop]");
        const reveal = (el) => {
            el.style.transition = "";
            el.style.opacity = "1";
        };

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            items.forEach(reveal);
            return;
        }

        const start = () =>
            ScrollTrigger.batch(items, {
                start: "top 92%",
                once: true,
                onEnter: (batch) =>
                    gsap.fromTo(
                        batch,
                        { opacity: 0, scale: 0.6, y: 40 },
                        {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "back.out(1.7)",
                            stagger: 0.12,
                            // hand transforms back to the CSS (hover/rotate classes + transitions)
                            onStart: function () {
                                this.targets().forEach((el) => (el.style.transition = "none"));
                            },
                            onComplete: function () {
                                this.targets().forEach((el) => {
                                    gsap.set(el, { clearProps: "transform" });
                                    reveal(el);
                                });
                            },
                        }
                    ),
            });

        const ctx = gsap.context(() => {});
        const run = () => ctx.add(start);

        const intro = document.getElementById("intro-loader");
        const introPlaying = intro && getComputedStyle(intro).display !== "none";
        if (introPlaying) {
            window.addEventListener("intro:reveal", run, { once: true });
        } else {
            run();
        }

        // image heights settle after load, which moves the trigger points
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        // safety net: never leave an image hidden if something goes wrong
        const fallback = setTimeout(
            () =>
                items.forEach((el) => {
                    if (getComputedStyle(el).opacity === "0") reveal(el);
                }),
            9000
        );

        return () => {
            clearTimeout(fallback);
            window.removeEventListener("intro:reveal", run);
            window.removeEventListener("load", refresh);
            ctx.revert();
            items.forEach(reveal);
        };
    }, []);

    return null;
}
