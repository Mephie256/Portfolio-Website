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

            <main className="pt-24 min-h-screen dark:bg-darkTheme dark:text-white pb-20">
                <div className="w-full px-[12%] py-10">
                    <h4 className="text-center mb-2 text-lg font-Ovo mt-10">Get to know me deeply</h4>
                    <h2 className={`text-center text-5xl ${orivian.className}`}>About Me</h2>

                    <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-20 my-20">
                        <div className="max-w-max mx-auto relative lg:sticky lg:top-32 self-start pt-4 lg:pt-14">
                            <img
                                src="/assets/user-image.png"
                                alt="Denis Ezekiel"
                                className="w-64 sm:w-80 rounded-3xl max-w-none shadow-lg"
                            />

                            <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                                <img
                                    src="/assets/circular-text.png"
                                    alt=""
                                    className="w-full animate-spin_slow"
                                />
                                <img
                                    src="/assets/dev-icon.png"
                                    alt=""
                                    className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="mb-14">
                                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">My Story</h3>
                                <p className="mb-6 max-w-2xl font-Ovo text-lg leading-relaxed text-gray-700 dark:text-white/80">
                                    I am an experienced Fullstack Developer, Video Editor, and Graphics Designer, driven by a
                                    deep passion for building impactful digital experiences. Based in Kampala, UG, I have spent years transforming abstract ideas into functional, beautiful realities.
                                </p>
                                <p className="mb-6 max-w-2xl font-Ovo text-lg leading-relaxed text-gray-700 dark:text-white/80">
                                    Being self-taught has instilled in me a relentless drive for problem-solving. This dedication has given me the privilege of collaborating with prestigious organizations to create software that truly matters. I thrive on overcoming complex engineering challenges, writing clean code, and designing intuitive interfaces that users love.
                                </p>
                            </div>

                            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Professional Expertise</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-16">
                                {data.map((item) => (
                                    <li
                                        key={item.name}
                                        className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50"
                                    >
                                        <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                        <img
                                            src={item.icon2}
                                            alt=""
                                            className="w-7 mt-3 hidden dark:block"
                                        />
                                        <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                            {item.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm dark:text-white/80">
                                            {item.description}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-2xl font-semibold mb-10 text-gray-800 dark:text-white">My Journey</h3>
                            <div className="flex flex-col gap-8 mb-16 max-w-2xl border-l-2 border-green-500 dark:border-green-400 pl-6 ml-4">
                                {journey.map((exp, idx) => (
                                    <div key={idx} className="relative">
                                        <span className="w-4 h-4 bg-green-500 dark:bg-green-400 outline outline-4 outline-[#FAFAFA] dark:outline-[#11001F] rounded-full absolute -left-[33px] top-1"></span>
                                        <div>
                                            <span className="text-xs font-semibold text-green-600 dark:text-green-400 mb-2 inline-block px-3 py-1 bg-green-50 dark:bg-green-900/30 rounded-full">
                                                {exp.year}
                                            </span>
                                            <h5 className="font-semibold text-xl text-gray-800 dark:text-white mb-2">{exp.title}</h5>
                                            <p className="text-md text-gray-600 dark:text-white/70 font-Ovo leading-relaxed">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">Tech Stack & Tools</h3>
                            <ul className="flex flex-wrap items-center gap-6 sm:gap-8 mb-16">
                                {tools.map((tool) => (
                                    <li
                                        key={tool.name}
                                        className="flex flex-col items-center gap-3 group cursor-pointer"
                                    >
                                        <div className="flex items-center justify-center w-16 sm:w-16 aspect-square border border-gray-300 dark:border-white/30 bg-white dark:bg-transparent rounded-2xl group-hover:-translate-y-2 duration-500 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all">
                                            <img src={tool.icon} alt={tool.name} className="w-8 sm:w-8" />
                                        </div>
                                        <span className="text-sm text-gray-500 font-Ovo capitalize dark:text-white/60 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{tool.name}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-10 border-t border-gray-200 dark:border-white/20">
                                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">What's Next?</h3>
                                <p className="max-w-2xl font-Ovo text-lg leading-relaxed text-gray-700 dark:text-white/80 mb-8">
                                    I am constantly exploring new technologies and pushing boundaries in web experiences and scalable architectures. I am always open to discussing new opportunities and bringing exciting visions to life. Let's build something remarkable together.
                                </p>
                                <a href="/resume/Mein-Resume.pdf" download className="inline-flex items-center gap-3 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-Ovo transition-transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_4px_15px_rgba(255,255,255,0.2)]">
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
