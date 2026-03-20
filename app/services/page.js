"use client";
import React from "react";
import LenisScroll from "@/components/LenisScroll";
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
            <Navbar />

            <main className="pt-24 pb-24 min-h-screen dark:bg-darkTheme dark:text-white">
                <div className="w-full px-[12%]">
                    {/* Header Section */}
                    <div className="text-center mb-16 mt-10">
                        <h4 className="mb-2 text-lg font-Ovo text-gray-600 dark:text-white/80">Tailored digital solutions</h4>
                        <h2 className={`text-5xl md:text-6xl ${orivian.className} mb-6`}>
                            My Services
                        </h2>
                        <p className="max-w-3xl mx-auto font-Ovo text-lg leading-relaxed text-gray-700 dark:text-white/70">
                            I build high-performance software solutions, design impactful brand visuals, and create engaging video content that drives results.
                            From raw code logic to boundless creativity, I help businesses stand out with professional execution.
                        </p>
                    </div>

                    {/* Quick Overview Grid */}
                    <div className="grid grid-cols-auto gap-6 my-10">
                        {services.map((service) => (
                            <a
                                href={service.link}
                                key={service.name}
                                className="block border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
                            >
                                <img src={service.icon} alt="" className="w-10" />
                                <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                                    {service.name}
                                </h3>
                                <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                                    {service.description}
                                </p>
                                <span className="flex items-center gap-2 text-sm mt-5 text-gray-900 dark:text-white">
                                    Read more{" "}
                                    <img src="/assets/right-arrow.png" alt="" className="w-4" />
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="w-full h-px bg-gray-200 dark:bg-white/10 my-24"></div>

                    {/* Detailed Services Breakdown */}
                    <div className="space-y-24">
                        <div className="text-center mb-16">
                            <h2 className={`text-4xl ${orivian.className} mb-4`}>In-Depth Expertise</h2>
                            <p className="text-gray-600 dark:text-white/70 font-Ovo max-w-2xl mx-auto">
                                A closer look at how my technical skills and creative instincts bring immense value to your project.
                            </p>
                        </div>

                        {detailedServices.map((detail, index) => (
                            <div key={detail.id} id={detail.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} scroll-mt-32`}>
                                <div className="w-full md:w-1/2 bg-gray-50 dark:bg-white/5 rounded-3xl p-10 lg:p-14 border border-gray-200 dark:border-white/10 shadow-sm relative overflow-hidden group">
                                    <div className="absolute inset-0 opacity-10 dark:opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-transparent to-transparent group-hover:opacity-20 transition-opacity duration-700"></div>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">{detail.title}</h3>
                                    <p className="font-Ovo text-lg leading-relaxed text-gray-700 dark:text-white/80 relative z-10">{detail.description}</p>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h4 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800 dark:text-white">
                                        <span className="w-8 h-px bg-green-500"></span>
                                        Core Offerings
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {detail.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex gap-3 font-Ovo text-gray-700 dark:text-white/80">
                                                <div className="w-2 h-2 shrink-0 rounded-full bg-green-500 mt-2"></div>
                                                <span className="leading-snug">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-px bg-gray-200 dark:bg-white/10 my-24"></div>

                    {/* My Approach / Process */}
                    <div className="mb-10">
                        <div className="text-center mb-16">
                            <h4 className="mb-2 text-lg font-Ovo text-gray-600 dark:text-white/80">How I Work</h4>
                            <h2 className={`text-4xl ${orivian.className}`}>My Proven Process</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {process.map((step, idx) => (
                                <div key={idx} className="bg-white dark:bg-darkHover border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm relative overflow-hidden">
                                    <div className="text-6xl font-black text-gray-100 dark:text-white/5 absolute -top-2 right-2 pointer-events-none">
                                        {idx + 1}
                                    </div>
                                    <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white relative z-10">{step.title}</h4>
                                    <p className="font-Ovo text-sm text-gray-600 dark:text-white/70 relative z-10 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-28 text-center bg-gray-900 dark:bg-white/5 rounded-3xl p-12 lg:p-16 border dark:border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-50 mix-blend-overlay"></div>
                        <h2 className={`text-4xl md:text-5xl text-white dark:text-white mb-6 relative z-10 ${orivian.className}`}>Ready to start your next project?</h2>
                        <p className="font-Ovo text-lg text-gray-300 dark:text-white/80 max-w-2xl mx-auto mb-10 relative z-10">
                            Let's collaborate to transform your ideas into a fully functional reality. Whether it's a dynamic web app, a mobile application, or a complete brand rework, I am ready.
                        </p>
                        <a href="https://wa.me/256763731276" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-3 px-8 py-3 bg-white dark:bg-white text-gray-900 rounded-full font-semibold transition-transform hover:scale-105 hover:shadow-[0_4px_25px_rgba(255,255,255,0.3)]">
                            Let's Talk <img src="/assets/right-arrow.png" alt="" className="w-4" />
                        </a>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}
