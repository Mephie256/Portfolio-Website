"use client";
import React from "react";
import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const orivian = localFont({
    src: "../../public/fonts/rocline/orivian/OrivianDemo-Regular.otf",
});

export default function AboutPage() {
    const tools = [
        { name: "vscode", icon: "/assets/vscode.png" },
        { name: "firebase", icon: "/assets/firebase.png" },
        { name: "mongodb", icon: "/assets/mongodb.png" },
        { name: "figma", icon: "/assets/figma.png" },
        { name: "git", icon: "/assets/git.png" },
    ];

    const data = [
        {
            name: "Languages",
            icon1: "/assets/code-icon.png",
            icon2: "/assets/code-icon-dark.png",
            description: "Flutter, PHP, JavaScript, React.js, Next.js",
        },
        {
            name: "Education",
            icon1: "/assets/edu-icon.png",
            icon2: "/assets/edu-icon-dark.png",
            description: "DSA in Computer Science",
        },
        {
            name: "Projects",
            icon1: "/assets/project-icon.png",
            icon2: "/assets/project-icon-dark.png",
            description: "Built more than 15+ complex apps",
        },
    ];

    const journey = [
        {
            year: "2026 - Present",
            title: "Video Editor at Era92 Creative",
            description: "Crafting compelling visual narratives and high-quality video content for a diverse range of brands. Specializing in dynamic editing, motion graphics, and delivering engaging digital media campaigns."
        },
        {
            year: "2021 - Present",
            title: "Fullstack Developer at IonHosting",
            description: "Leading the development of secure web solutions, automating core services, and collaborating on scalable cloud architectures."
        },
        {
            year: "2024 - 2025",
            title: "Software Developer at Pneuma African Foundation (PAF)",
            description: "Developed vital software infrastructure to support community initiatives. Built fast, intuitive interfaces to streamline internal processes."
        },
    ];

    return (
        <>
            <LenisScroll />
            <Navbar />

            <main className="pt-28 min-h-screen dark:bg-darkTheme dark:text-white pb-20">
                <div className="w-full px-4 sm:px-8 lg:px-[12%] py-10">
                    <div className="text-center mb-12">
                        <h4 className="inline-block px-4 py-1 rounded-full border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm bg-white dark:bg-darkHover text-xs sm:text-sm font-Outfit font-bold uppercase tracking-wider mb-3">
                            Get to know me deeply
                        </h4>
                        <h1 className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white ${orivian.className}`}>
                            About Me
                        </h1>
                    </div>

                    <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 my-10 lg:my-16">
                        {/* Photo with Neobrutalist Offset Card Backing in Green (exact match to user mockup) */}
                        <div className="max-w-max mx-auto relative lg:sticky lg:top-36 self-start pt-4 lg:pt-8 px-4 sm:px-0">
                            <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 sm:translate-x-4 sm:translate-y-4 bg-[#22c55e] rounded-3xl border-[2.5px] border-black dark:border-white"></div>
                            <img
                                src="/assets/user-image.png"
                                alt="Denis Ezekiel"
                                className="relative z-10 w-64 sm:w-80 rounded-3xl border-[2.5px] border-black dark:border-white max-w-full bg-white dark:bg-darkTheme object-cover"
                            />

                            {/* Circular Badge: FRONT-END WEB DEVELOPER with 😎 (as shown in second image) */}
                            <div className="z-20 bg-white dark:bg-darkTheme border-[2.5px] border-black dark:border-white shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff] w-28 sm:w-36 aspect-square absolute -right-3 sm:-right-5 -bottom-3 sm:-bottom-5 rounded-full flex items-center justify-center p-1">
                                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin_slow">
                                    <path id="aboutPageCirclePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                                    <text className="text-[8.5px] uppercase font-Outfit font-bold tracking-[1.8px] fill-black dark:fill-white">
                                        <textPath href="#aboutPageCirclePath" startOffset="50%" textAnchor="middle">
                                            FRONT-END WEB DEVELOPER •
                                        </textPath>
                                    </text>
                                </svg>
                                <span className="text-2xl sm:text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                                    😎
                                </span>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="mb-14">
                                <h2 className="text-2xl font-Outfit font-bold mb-4 text-black dark:text-white">
                                    My Story
                                </h2>
                                <p className="mb-5 max-w-2xl font-Ovo text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    I am an experienced Fullstack Developer, Video Editor, and Graphics Designer, driven by a deep passion for building impactful digital experiences. Based in Kampala, UG, I have spent years transforming abstract ideas into functional, beautiful realities.
                                </p>
                                <p className="mb-5 max-w-2xl font-Ovo text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                    Being self-taught has instilled in me a relentless drive for problem-solving. This dedication has given me the privilege of collaborating with prestigious organizations to create software that truly matters. I thrive on overcoming complex engineering challenges, writing clean code, and designing intuitive interfaces that users love.
                                </p>
                            </div>

                            <h2 className="text-2xl font-Outfit font-bold mb-6 text-black dark:text-white">
                                Professional Expertise
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mb-16">
                                {data.map((item) => (
                                    <li
                                        key={item.name}
                                        className="border-2 border-black dark:border-white rounded-2xl p-5 bg-white dark:bg-darkTheme shadow-neo dark:shadow-neo-white cursor-pointer hover:-translate-y-1.5 hover:shadow-neo-lg dark:hover:shadow-neo-white-lg transition-all duration-200"
                                    >
                                        <img src={item.icon1} alt="" className="w-7 mt-1 dark:hidden" />
                                        <img
                                            src={item.icon2}
                                            alt=""
                                            className="w-7 mt-1 hidden dark:block"
                                        />
                                        <h3 className="my-3 font-Outfit font-bold text-gray-900 dark:text-white text-base">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-700 text-sm dark:text-gray-300 font-Outfit">
                                            {item.description}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <h2 className="text-2xl font-Outfit font-bold mb-8 text-black dark:text-white">
                                My Journey
                            </h2>
                            <div className="flex flex-col gap-6 mb-16 max-w-2xl border-l-2 border-green-500 dark:border-green-400 pl-6 ml-3">
                                {journey.map((exp, idx) => (
                                    <div key={idx} className="relative">
                                        <span className="w-3.5 h-3.5 bg-green-500 border-2 border-black dark:border-white rounded-full absolute -left-[31px] top-1.5"></span>
                                        <div>
                                            <span className="text-xs font-Outfit font-bold text-green-900 dark:text-green-300 mb-2 inline-block px-3 py-1 bg-green-100 dark:bg-green-950/50 border-2 border-black dark:border-white rounded-full shadow-neo-sm dark:shadow-neo-white-sm">
                                                {exp.year}
                                            </span>
                                            <h3 className="font-Outfit font-bold text-xl text-black dark:text-white my-2">
                                                {exp.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-Outfit font-bold mb-6 text-black dark:text-white">
                                Tech Stack & Tools
                            </h2>
                            <ul className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
                                {tools.map((tool) => (
                                    <li
                                        key={tool.name}
                                        className="flex flex-col items-center gap-2 group cursor-pointer"
                                    >
                                        <div className="flex items-center justify-center w-14 sm:w-16 aspect-square border-2 border-black dark:border-white bg-white dark:bg-darkHover rounded-2xl shadow-neo-sm dark:shadow-neo-white-sm group-hover:-translate-y-1.5 group-hover:shadow-neo dark:group-hover:shadow-neo-white transition-all duration-200">
                                            <img src={tool.icon} alt={tool.name} className="w-7 sm:w-8" />
                                        </div>
                                        <span className="text-xs font-Outfit font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                                            {tool.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-10 border-t-2 border-black dark:border-white/40">
                                <h2 className="text-2xl font-Outfit font-bold mb-4 text-black dark:text-white">
                                    What&apos;s Next?
                                </h2>
                                <p className="max-w-2xl font-Ovo text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                                    I am constantly exploring new technologies and pushing boundaries in web experiences and scalable architectures. I am always open to discussing new opportunities and bringing exciting visions to life. Let&apos;s build something remarkable together.
                                </p>
                                <a
                                    href="/resume/Mein-Resume.pdf"
                                    download
                                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white rounded-full font-Outfit font-bold text-base shadow-neo dark:shadow-neo-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm dark:hover:shadow-neo-white-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
                                >
                                    Download Full Resume
                                    <img src="/assets/download-icon.png" alt="" className="w-4 invert dark:invert-0" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
