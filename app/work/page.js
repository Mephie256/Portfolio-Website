"use client";
import React, { useState } from "react";
import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const orivian = localFont({
    src: "../../public/fonts/rocline/orivian/OrivianDemo-Regular.otf",
});

export default function WorkPage() {
    const categories = ["All", "Web Apps", "Mobile", "Design & 3D"];
    const [activeCategory, setActiveCategory] = useState("All");

    const allWork = [
        {
            name: "CalMax AI App",
            icon: "/assets/calmax.png",
            description: "AI-powered calorie tracker",
            category: "Mobile",
            link: "https://drive.google.com/file/d/1W8MZJyVzFllQNt8OBA8hOQuDWrzroDtX/view?usp=sharing",
            featured: true
        },
        {
            name: "Unlonely Ai",
            icon: "/assets/work-1.png",
            description: "Your kind AI companion",
            category: "Web Apps",
            link: "https://unlonely.netlify.app/",
            featured: true
        },
        {
            name: "Imprintly",
            icon: "/assets/work-2.png",
            description: "Text-behind-subject effects",
            category: "Web Apps",
            link: "https://imprintly.netlify.app/",
            featured: true
        },
        {
            name: "Ion Radios App",
            icon: "/assets/work-3.png",
            description: "Mobile App for seamless audio",
            category: "Mobile",
            link: "",
            featured: true
        },
        {
            name: "3D Site",
            icon: "/assets/work-4.png",
            description: "Spylt Clone with 3D elements",
            category: "Design & 3D",
            link: "https://gsapproj.netlify.app/",
            featured: true
        },
        {
            name: "Era92 Creative Promo",
            icon: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
            description: "Brand promotional video editing",
            category: "Design & 3D",
            link: "",
            featured: false
        },
        {
            name: "E-Commerce Dashboard",
            icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            description: "Fullstack admin dashboard",
            category: "Web Apps",
            link: "",
            featured: false
        }
    ];

    const filteredWork = activeCategory === "All"
        ? allWork
        : allWork.filter(w => w.category === activeCategory);

    return (
        <>
            <LenisScroll />
            <Navbar />

            <main className="pt-28 pb-24 min-h-screen dark:bg-darkTheme dark:text-white">
                <div className="w-full px-4 sm:px-8 lg:px-[12%]">
                    {/* Header Section */}
                    <div className="text-center mb-16 mt-8">
                        <h4 className="inline-block px-4 py-1 rounded-full border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm bg-white dark:bg-darkHover text-xs sm:text-sm font-Outfit font-bold uppercase tracking-wider mb-3">
                            My portfolio
                        </h4>
                        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white mb-4 ${orivian.className}`}>
                            My Latest Work
                        </h1>
                        <p className="max-w-3xl mx-auto font-Ovo text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            A curated showcase of innovative software solutions, modern graphic designs, and high-quality video edits. Every project reflects deep technical expertise and professional creativity aimed at real impact.
                        </p>
                    </div>

                    {/* Neobrutalist Category Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full font-Outfit font-bold text-sm transition-all duration-150 border-2 border-black dark:border-white cursor-pointer ${
                                    activeCategory === cat
                                        ? "bg-green-500 text-black shadow-neo dark:shadow-neo-white"
                                        : "bg-white dark:bg-darkTheme text-black dark:text-white shadow-neo-sm dark:shadow-neo-white-sm hover:translate-x-[1px] hover:translate-y-[1px]"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Featured Work Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-7 transition-all duration-300 min-h-[50vh]">
                        {filteredWork.map((work) => (
                            <a
                                href={work.link || "#"}
                                target={work.link ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                key={work.name}
                                className="aspect-square bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group block mb-0 overflow-hidden border-2 border-black dark:border-white shadow-neo dark:shadow-neo-white hover:-translate-y-2 hover:shadow-neo-lg dark:hover:shadow-neo-white-lg transition-all duration-200"
                                style={{ backgroundImage: `url(${work.icon})` }}
                            >
                                <div className="bg-white dark:bg-[#11001F] w-[90%] rounded-xl absolute bottom-4 left-1/2 -translate-x-1/2 py-3.5 px-4 sm:px-5 flex items-center justify-between duration-300 group-hover:bottom-6 border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm">
                                    <div className="max-w-[70%]">
                                        <h3 className="font-Outfit font-bold text-base sm:text-lg text-black dark:text-white truncate">
                                            {work.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 truncate mt-0.5 font-Outfit">
                                            {work.description}
                                        </p>
                                    </div>
                                    <div className="shrink-0 border-2 border-black rounded-full w-9 sm:w-10 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-colors bg-white">
                                        <img src="/assets/send-icon.png" alt="" className="w-4 sm:w-5" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {filteredWork.length === 0 && (
                        <div className="text-center py-20 font-Outfit text-gray-500 dark:text-gray-400 text-lg">
                            No projects found in this category right now.
                        </div>
                    )}

                    {/* Contact CTA */}
                    <div className="mt-20 sm:mt-28 p-8 sm:p-12 lg:p-14 rounded-3xl bg-white dark:bg-darkTheme border-2 border-black dark:border-white shadow-neo-lg dark:shadow-neo-white-lg flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className={`text-2xl sm:text-4xl font-bold text-black dark:text-white mb-3 ${orivian.className}`}>
                                Have a project in mind?
                            </h3>
                            <p className="font-Ovo text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-lg leading-relaxed">
                                Whether you need a high-performance web application, a mobile app, or stunning visual assets, I&apos;m ready to collaborate!
                            </p>
                        </div>
                        <div className="shrink-0">
                            <a
                                href="https://wa.me/256763731276"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-green-500 hover:bg-green-400 text-black border-2 border-black rounded-full font-Outfit font-bold text-base shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
                            >
                                Let&apos;s Build Together
                                <img src="/assets/right-arrow.png" alt="" className="w-4" />
                            </a>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}
