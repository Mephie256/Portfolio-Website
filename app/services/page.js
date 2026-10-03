"use client";
import React from "react";
import LenisScroll from "@/components/LenisScroll";
import IntroLoader from "@/components/IntroLoader";
import PageAnimations from "@/components/PageAnimations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const orivian = localFont({
    src: "../../public/fonts/rocline/orivian/OrivianDemo-Regular.otf",
});

export default function ServicesPage() {
    const services = [
        {
            name: "Web development",
            icon: "/assets/web-icon.png",
            description: "Building scalable, high-performance web applications tailored to your business needs using modern technologies.",
            link: "#detailed-web-dev",
        },
        {
            name: "Mobile app",
            icon: "/assets/mobile-icon.png",
            description: "Developing robust, cross-platform mobile applications that provide seamless user experiences on any device.",
            link: "#detailed-mobile-app",
        },
        {
            name: "UI/ UX design",
            icon: "/assets/ui-icon.png",
            description: "Crafting intuitive and visually stunning user interfaces with a strong focus on maximizing usability and engagement.",
            link: "#detailed-ui-ux",
        },
        {
            name: "Graphics & Video",
            icon: "/assets/graphics-icon.png",
            description: "Producing high-quality brand visuals, motion graphics, and creative assets that help your business leave a lasting digital impression.",
            link: "#detailed-graphics",
        },
    ];

    const process = [
        {
            title: "1. Discovery",
            desc: "Understanding your vision, defining project constraints, and outlining a strategic roadmap."
        },
        {
            title: "2. Design",
            desc: "Creating wireframes, high-fidelity UI designs, and interactive prototypes tailored to your brand."
        },
        {
            title: "3. Development",
            desc: "Writing clean, scalable code and producing high-quality creative assets with rigorous testing."
        },
        {
            title: "4. Deployment",
            desc: "Launching your product smoothly and providing ongoing maintenance to ensure stability."
        }
    ];

    const detailedServices = [
        {
            id: "detailed-web-dev",
            title: "Fullstack Web Development",
            description: "From lightweight landing pages to complex corporate dashboards, I architect dynamic web applications that perform under heavy traffic. I focus on optimizing the frontend for blazing-fast load times and structuring the backend to ensure secure, rapid data delivery.",
            features: ["Custom Web Applications", "Next.js & React Ecosystem", "API Development & Integration", "Performance Optimization", "Scalable Database Architecture"]
        },
        {
            id: "detailed-mobile-app",
            title: "Cross-Platform Mobile Apps",
            description: "I build responsive native-like mobile applications for both iOS and Android using modern frameworks. My ultimate goal is to deliver a smooth and engaging mobile experience that perfectly complements your web presence.",
            features: ["iOS & Android Development", "Mobile UX/UI Implementation", "Robust State Management", "Push Notification Logic", "App Store Deployment"]
        },
        {
            id: "detailed-ui-ux",
            title: "UI/UX & Interactive Design",
            description: "Design is more than just aesthetics; it's about solving problems and guiding users effortlessly. Using Figma and modern wireframing tools, I craft visual experiences that align tightly with your brand identity and optimize for conversions.",
            features: ["Wireframing & Prototyping", "User Experience Research", "Design Systems Creation", "Interactive Animations", "Responsive Scaling across Devices"]
        },
        {
            id: "detailed-graphics",
            title: "Video Editing & Graphic Design",
            description: "As an experienced Video Editor at Era92 Creative, I know how to captivate audiences. Whether it is promotional videos, documentary-style editing, or modern graphic design, I leverage professional software to tell your story completely.",
            features: ["Advanced Motion Graphics", "Video Production & Editing", "Brand Identity & Logos", "Social Media Content Creation", "Color Grading & Correction"]
        }
    ];

    return (
        <>
            <LenisScroll />
            <IntroLoader />
            <PageAnimations />
            <Navbar />

            <main className="pt-28 pb-24 min-h-screen dark:bg-darkTheme dark:text-white">
                <div className="w-full px-4 sm:px-8 lg:px-[12%]">
                    {/* Header Section */}
                    <div className="text-center mb-16 mt-8">
                        <h4 data-intro="pre" className="inline-block px-4 py-1 rounded-full border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm bg-white dark:bg-darkHover text-xs sm:text-sm font-Outfit font-bold uppercase tracking-wider mb-3">
                            Tailored digital solutions
                        </h4>
                        <h1 data-intro="title" className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-4 ${orivian.className}`}>
                            My Services
                        </h1>
                        <p data-intro="fade" className="max-w-3xl mx-auto font-Ovo text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            I build high-performance software solutions, design impactful brand visuals, and create engaging video content that drives results. From raw code logic to boundless creativity, I help businesses stand out with professional execution.
                        </p>
                    </div>

                    {/* Quick Overview Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                        {services.map((service) => (
                            <a
                                href={service.link}
                                key={service.name}
                                data-card
                                className="border-2 border-black dark:border-white rounded-2xl p-7 bg-white dark:bg-darkTheme shadow-neo dark:shadow-neo-white hover:-translate-y-2 hover:shadow-neo-lg dark:hover:shadow-neo-white-lg transition-all duration-200 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-14 h-14 rounded-xl border-2 border-black dark:border-white bg-green-100 dark:bg-green-950/40 flex items-center justify-center shadow-neo-sm dark:shadow-neo-white-sm mb-5 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                                        <img src={service.icon} alt="" className="w-7" />
                                    </div>
                                    <h3 className="text-xl font-Outfit font-bold text-black dark:text-white my-3">
                                        {service.name}
                                    </h3>
                                    <p className="text-sm font-Outfit text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <span className="flex items-center gap-2 text-sm font-Outfit font-bold text-black dark:text-white mt-6 group-hover:translate-x-1.5 transition-transform">
                                    Learn more
                                    <img src="/assets/right-arrow.png" alt="" className="w-4 dark:invert" />
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="w-full h-0.5 bg-black/10 dark:bg-white/10 my-20"></div>

                    {/* Detailed Services Breakdown */}
                    <div className="space-y-20">
                        <div data-heading className="text-center mb-12">
                            <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white mb-3 ${orivian.className}`}>
                                In-Depth Expertise
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 font-Ovo max-w-2xl mx-auto text-base sm:text-lg">
                                A closer look at how my technical skills and creative instincts bring immense value to your project.
                            </p>
                        </div>

                        {detailedServices.map((detail, index) => (
                            <div key={detail.id} id={detail.id} data-card className={`flex flex-col md:flex-row gap-10 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} scroll-mt-36`}>
                                <div className="w-full md:w-1/2 bg-white dark:bg-darkTheme rounded-3xl p-8 sm:p-12 border-2 border-black dark:border-white shadow-neo-lg dark:shadow-neo-white-lg relative overflow-hidden">
                                    <h3 className="text-2xl sm:text-3xl font-Outfit font-bold text-black dark:text-white mb-4">{detail.title}</h3>
                                    <p className="font-Ovo text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">{detail.description}</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h4 className="text-lg font-Outfit font-bold mb-4 flex items-center gap-2 text-black dark:text-white">
                                        <span className="w-3 h-3 rounded-full bg-green-500 border border-black inline-block"></span>
                                        Core Offerings
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                        {detail.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-center gap-2.5 font-Outfit text-sm sm:text-base text-gray-800 dark:text-gray-200 bg-white dark:bg-darkHover border-2 border-black dark:border-white rounded-xl p-3 shadow-neo-sm dark:shadow-neo-white-sm">
                                                <span className="w-2 h-2 rounded-full bg-green-500 inline-block shrink-0"></span>
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-0.5 bg-black/10 dark:bg-white/10 my-20"></div>

                    {/* Process */}
                    <div className="mb-10">
                        <div data-heading className="text-center mb-14">
                            <h4 className="inline-block px-4 py-1 rounded-full border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm bg-white dark:bg-darkHover text-xs sm:text-sm font-Outfit font-bold uppercase tracking-wider mb-3">
                                How I Work
                            </h4>
                            <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white ${orivian.className}`}>
                                My Proven Process
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {process.map((step, idx) => (
                                <div key={idx} data-card className="bg-white dark:bg-darkTheme border-2 border-black dark:border-white rounded-2xl p-7 shadow-neo dark:shadow-neo-white hover:-translate-y-2 hover:shadow-neo-lg dark:hover:shadow-neo-white-lg transition-all duration-200 relative">
                                    <div className="w-10 h-10 rounded-full border-2 border-black dark:border-white bg-green-500 text-black font-Outfit font-bold flex items-center justify-center shadow-neo-sm mb-4">
                                        0{idx + 1}
                                    </div>
                                    <h3 className="text-xl font-Outfit font-bold mb-3 text-black dark:text-white">{step.title}</h3>
                                    <p className="font-Ovo text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div data-card className="mt-24 text-center bg-white dark:bg-darkTheme rounded-3xl p-10 lg:p-14 border-2 border-black dark:border-white shadow-neo-lg dark:shadow-neo-white-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-bl-full border-b-2 border-l-2 border-black dark:border-white pointer-events-none opacity-30"></div>
                        <h2 className={`text-3xl sm:text-5xl font-bold text-black dark:text-white mb-5 ${orivian.className}`}>
                            Ready to start your next project?
                        </h2>
                        <p className="font-Ovo text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                            Let&apos;s collaborate to transform your ideas into a fully functional reality. Whether it&apos;s a dynamic web app, mobile application, or creative video edit, I am ready.
                        </p>
                        <a
                            href="https://wa.me/256763731276"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-9 py-3.5 bg-green-500 hover:bg-green-400 text-black rounded-full border-2 border-black font-Outfit font-bold text-base shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
                        >
                            Let&apos;s Talk on WhatsApp
                            <img src="/assets/right-arrow.png" alt="" className="w-4" />
                        </a>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}
