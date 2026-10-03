"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// Opening sequence for the home page: the navbar drops in and the headline
// rises line by line out of a mask, followed by the paragraph and buttons.
// The navbar drop-in is opt-in (home page only).
// The overlay only hides the hero for the split second it takes to get ready.
// Dispatches "intro:reveal" so the photo pop-ins (ImagePop) start as the text lands.
export default function IntroLoader({ navbar = false }) {
    const overlayRef = useRef(null);

    useEffect(() => {
        const overlay = overlayRef.current;
        const root = document.documentElement;
        let finished = false;
        let split;

        const keepTop = () => window.scrollTo(0, 0);
        const finish = () => {
            if (finished) return;
            finished = true;
            overlay.style.display = "none";
            root.style.overflow = "";
            window.removeEventListener("scroll", keepTop);
            window.dispatchEvent(new Event("intro:reveal"));
        };

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            finish();
            return;
        }

        // hold the page still while the intro plays
        root.style.overflow = "hidden";
        window.scrollTo(0, 0);
        window.addEventListener("scroll", keepTop);

        const failsafe = setTimeout(finish, 6000);

        const ctx = gsap.context(() => {
            // the navbar only drops in on the home page (navbar prop); other pages keep it static
            const nav = navbar ? document.querySelector('[data-intro="nav"]') : null;
            const title = document.querySelector('[data-intro="title"]');
            const pre = gsap.utils.toArray('[data-intro="pre"]');
            const fades = gsap.utils.toArray('[data-intro="fade"]');

            // wait for the display font so the line split is accurate
            document.fonts.ready.then(() => {
                if (finished) return;
                if (title) {
                    split = SplitText.create(title, { type: "lines", mask: "lines" });
                    gsap.set(split.lines, { yPercent: 115 });
                }
                if (nav) gsap.set(nav, { opacity: 0, y: -60 });
                gsap.set(pre, { opacity: 0, y: 20 });
                gsap.set(fades, { opacity: 0, y: 28 });

                // everything is hidden now, so the overlay can go
                overlay.style.display = "none";

                const tl = gsap.timeline({
                    onComplete: () => {
                        clearTimeout(failsafe);
                        split?.revert();
                        finish();
                    },
                });
                if (nav) tl.to(nav, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", clearProps: "transform,opacity" }, 0);
                if (split) tl.to(split.lines, { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.12 }, 0.05);
                tl.to(pre, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", clearProps: "transform,opacity" }, 0.1);
                tl.to(fades, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12, clearProps: "transform,opacity" }, 0.55);
                // photos start popping as the text lands
                tl.add(() => window.dispatchEvent(new Event("intro:reveal")), 0.9);
            });
        });

        return () => {
            clearTimeout(failsafe);
            ctx.revert();
            split?.revert();
            window.removeEventListener("scroll", keepTop);
            root.style.overflow = "";
        };
    }, []);

    return (
        <div
            id="intro-loader"
            ref={overlayRef}
            className="intro-loader fixed inset-0 z-[200] items-center justify-center bg-white dark:bg-darkTheme"
            aria-hidden="true"
        />
    );
}
