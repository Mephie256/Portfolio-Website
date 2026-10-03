'use client'
import React, { useEffect, useState } from 'react'
import localFont from "next/font/local";
import { play } from "@/lib/sound";

const orivian = localFont({
    src: "../public/fonts/rocline/orivian/OrivianDemo-Regular.otf",
});

export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]')?.value;
        if (!hCaptcha) {
            setResult("Please fill out captcha field");
            play("caution");
            return;
        }
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0fcdc8a0-5734-407a-9cf9-1aa5742c0d35");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            }).then((res) => res.json());

            if (res.success) {
                console.log("Success", res);
                setResult(res.message);
                event.target.reset();
                play("celebration");
            } else {
                console.log("Error", res);
                setResult(res.message);
                play("caution");
            }
        } catch (err) {
            setResult("Something went wrong. Please reach out via WhatsApp or email.");
            play("caution");
        }
    };

    // Load hCaptcha once. With client-side navigation this component remounts every time
    // you come back to the page, so reuse the loaded script and just render the new widget.
    function CaptchaLoader() {
        const el = document.querySelector('[data-captcha="true"]');
        if (!el) return;
        const sitekey = el.dataset.sitekey || "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
        el.dataset.sitekey = sitekey;

        if (window.hcaptcha) {
            if (!el.querySelector("iframe")) window.hcaptcha.render(el, { sitekey });
            return;
        }
        // script already added and still loading: it renders the widget when it arrives
        if (document.querySelector('script[src*="js.hcaptcha.com"]')) return;

        const script = document.createElement("script");
        script.async = true;
        script.defer = true;
        script.src = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
        document.body.appendChild(script);
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);

    return (
        <section id="contact" className="w-full px-4 sm:px-8 lg:px-[12%] py-20 scroll-mt-24">
            <div data-heading className="text-center mb-10">
                <h4 className="inline-block px-4 py-1 rounded-full border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm bg-white dark:bg-darkHover text-xs sm:text-sm font-Outfit font-bold uppercase tracking-wider mb-3">
                    Connect with me
                </h4>
                <h2 className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white ${orivian.className}`}>
                    Get in touch
                </h2>
                <p className="text-center max-w-2xl mx-auto mt-4 font-Ovo text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Have an idea, project, or want to collaborate? Send a message below or contact me directly via WhatsApp.
                </p>
            </div>

            <form onSubmit={onSubmit} data-card className="max-w-2xl mx-auto border-2 border-black dark:border-white rounded-3xl p-6 sm:p-10 bg-white dark:bg-darkTheme shadow-neo-lg dark:shadow-neo-white-lg">
                <input type="hidden" name="subject" value="Denis Ezekiel - New Portfolio Contact Message" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                        <label className="block text-xs font-Outfit font-bold uppercase tracking-wider mb-2 text-black dark:text-white">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 outline-none border-2 border-black dark:border-white rounded-xl bg-gray-50 dark:bg-darkHover/40 text-black dark:text-white font-Outfit placeholder-gray-400 focus:bg-white focus:shadow-neo-sm dark:focus:shadow-neo-white-sm transition-all"
                            required
                            name="name"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-Outfit font-bold uppercase tracking-wider mb-2 text-black dark:text-white">
                            Your Email
                        </label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 outline-none border-2 border-black dark:border-white rounded-xl bg-gray-50 dark:bg-darkHover/40 text-black dark:text-white font-Outfit placeholder-gray-400 focus:bg-white focus:shadow-neo-sm dark:focus:shadow-neo-white-sm transition-all"
                            required
                            name="email"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-xs font-Outfit font-bold uppercase tracking-wider mb-2 text-black dark:text-white">
                        Your Message
                    </label>
                    <textarea
                        rows="5"
                        placeholder="Tell me about your project or inquiry..."
                        className="w-full px-4 py-3 outline-none border-2 border-black dark:border-white rounded-xl bg-gray-50 dark:bg-darkHover/40 text-black dark:text-white font-Outfit placeholder-gray-400 focus:bg-white focus:shadow-neo-sm dark:focus:shadow-neo-white-sm transition-all"
                        required
                        name="message"
                    ></textarea>
                </div>

                <div className="h-captcha mb-6 max-w-full overflow-x-auto flex justify-center" data-captcha="true"></div>

                <button
                    type="submit"
                    data-snd="button"
                    className="py-3.5 px-10 w-full sm:w-max flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-full border-2 border-black dark:border-white font-Outfit font-bold text-base shadow-neo dark:shadow-neo-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm dark:hover:shadow-neo-white-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all mx-auto cursor-pointer"
                >
                    Send message
                    <img src="/assets/right-arrow-white.png" alt="" className="w-4 dark:invert" />
                </button>

                {result && (
                    <p className="mt-4 text-center font-Outfit font-semibold text-sm text-black dark:text-white">
                        {result}
                    </p>
                )}
            </form>
        </section>
    );
}