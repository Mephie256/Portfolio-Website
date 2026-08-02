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

            <main className="pt-24 pb-24 min-h-screen dark:bg-darkTheme dark:text-white">
                <div className="w-full px-4 sm:px-8 lg:px-[12%]">
                    {/* Header Section */}
                    <div className="text-center mb-16 mt-10">
                        <h4 className="mb-2 text-lg font-Ovo text-gray-600 dark:text-white/80">My portfolio</h4>
                        <h2 className={`text-3xl sm:text-5xl md:text-6xl ${orivian.className} mb-6`}>
                            My Latest Work
                        </h2>
                        <p className="max-w-3xl mx-auto font-Ovo text-lg leading-relaxed text-gray-700 dark:text-white/70">
                            A curated showcase of innovative software solutions, modern graphic designs, and high-quality video edits. Every project reflects deep technical expertise and professional creativity aimed at real impact.
                        </p>
                    </div>

                    {/* Filter Navigation */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-Ovo text-sm transition-all duration-300 border ${activeCategory === cat
                                        ? "bg-gray-900 border-gray-900 text-white dark:bg-white dark:border-white dark:text-gray-900 shadow-md"
                                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-transparent dark:border-white/20 dark:text-white/80 dark:hover:bg-white/5"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Featured Work Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-6 dark:text-black transition-all duration-500 min-h-[50vh]">
                        {filteredWork.map((work) => (
                            <a
                                href={work.link || "#"}
                                target={work.link ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                key={work.name}
                                className="aspect-square bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group block mb-0 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-500 hover:-translate-y-2"
                                style={{ backgroundImage: `url(${work.icon})` }}
                            >
                                {/* Overlay for better text readability */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

                                <div className="bg-white/95 backdrop-blur-sm w-11/12 md:w-10/12 rounded-xl border border-white/50 absolute bottom-5 left-1/2 -translate-x-1/2 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between duration-500 group-hover:bottom-7">
                                    <div className="max-w-[70%]">
                                        <h2 className="font-semibold text-base sm:text-lg text-gray-900 truncate">{work.name}</h2>
                                        <p className="text-xs sm:text-sm text-gray-600 truncate mt-1 font-Ovo">{work.description}</p>
                                    </div>
                                    <div className="shrink-0 border rounded-full border-black/80 w-8 sm:w-10 aspect-square flex items-center justify-center shadow-[2px_2px_0_rgba(0,0,0,0.8)] group-hover:bg-lime-300 transition-colors duration-300 bg-white">
                                        <img src="/assets/send-icon.png" alt="" className="w-3.5 sm:w-4 ml-0.5" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    {filteredWork.length === 0 && (
                        <div className="text-center py-20 font-Ovo text-gray-500 dark:text-white/60 text-lg">
                            No projects found in this category right now. Connect with me to build one!
                        </div>
                    )}

                    {/* Contact CTA */}
                    <div className="mt-20 sm:mt-28 p-8 sm:p-12 lg:p-16 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
                        <div>
                            <h3 className={`text-2xl sm:text-4xl ${orivian.className} mb-4 text-gray-900 dark:text-white`}>Have a project in mind?</h3>
                            <p className="font-Ovo text-gray-600 dark:text-white/70 max-w-lg text-lg">
                                Whether you need a high-performance web application, a mobile app, or stunning visual assets, I'm currently available for freelance work and new opportunities!
                            </p>
                        </div>
                        <div className="shrink-0">
                            <a
                                href="https://wa.me/256763731276"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-all shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.5)] hover:-translate-y-1"
                            >
                                Let's Build Together
                                <img src="/assets/right-arrow-white.png" alt="" className="w-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </>
    );
}
