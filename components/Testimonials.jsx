import React from 'react';
import localFont from "next/font/local";

const orivian = localFont({
    src: "../public/fonts/rocline/orivian/OrivianDemo-Regular.otf",
});

const Testimonials = () => {
    const testimonials = [
        { text: "Denis is an exceptional full-stack developer. His ability to build seamless, high-performance web applications is truly unmatched.", name: "Sarah Jenkins", role: "Product Manager", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" },
        { text: "Working with Denis was an absolute pleasure. He translated our complex design requirements into a beautiful, functional reality effortlessly.", name: "Michael Torres", role: "Creative Director", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" },
        { text: "Denis brings a rare combination of technical expertise and a keen eye for design. He delivered our project perfectly and ahead of schedule.", name: "Emily Chen", role: "Startup Founder", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60" },
        { text: "I've collaborated with many developers, but Denis stands out for his clean code, sharp problem-solving skills, and great communication.", name: "David Lawson", role: "Lead Engineer", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60" },
        { text: "If you need someone who can handle both stunning front-end aesthetics and robust back-end systems, Denis is the one to hire.", name: "Jessica Wong", role: "UX Designer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop" },
        { text: "Denis single-handedly transformed our application's performance and user experience. He's a highly reliable and talented professional.", name: "Alex Mercer", role: "CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60" }
    ];

    const rows = [
        { start: 0, end: 3, className: "animate-scroll" },
        { start: 3, end: 6, className: "animate-scroll-reverse" }
    ];

    // Creative mix of card shadows with heavy weight: Black, Our Green (#22c55e), Resume Lime (#bef264), Orange (#f97316), Yellow (#facc15)
    const cardShadows = [
        "shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] sm:shadow-[7px_7px_0px_#000] sm:dark:shadow-[7px_7px_0px_#fff] hover:shadow-[9px_9px_0px_#000] dark:hover:shadow-[9px_9px_0px_#fff]",
        "shadow-[6px_6px_0px_#22c55e] sm:shadow-[7px_7px_0px_#22c55e] hover:shadow-[9px_9px_0px_#22c55e]",
        "shadow-[6px_6px_0px_#bef264] sm:shadow-[7px_7px_0px_#bef264] hover:shadow-[9px_9px_0px_#bef264]",
        "shadow-[6px_6px_0px_#f97316] sm:shadow-[7px_7px_0px_#f97316] hover:shadow-[9px_9px_0px_#f97316]",
        "shadow-[6px_6px_0px_#facc15] sm:shadow-[7px_7px_0px_#facc15] hover:shadow-[9px_9px_0px_#facc15]",
        "shadow-[6px_6px_0px_#000] dark:shadow-[6px_6px_0px_#fff] sm:shadow-[7px_7px_0px_#000] sm:dark:shadow-[7px_7px_0px_#fff] hover:shadow-[9px_9px_0px_#000] dark:hover:shadow-[9px_9px_0px_#fff]",
    ];

    const renderCard = (testimonial, index) => {
        const shadow = cardShadows[index % cardShadows.length];
        return (
            <div
                key={index}
                className={`bg-white dark:bg-[#11001F] border-[2px] sm:border-[2.5px] border-black dark:border-white rounded-2xl p-5 sm:p-6 shrink-0 w-[290px] sm:w-[360px] ${shadow} hover:-translate-y-1.5 transition-all duration-200 m-2`}
            >
                <div className="flex mb-3 gap-1">
                    {Array(5).fill(0).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star" aria-hidden="true">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                    ))}
                </div>
                <p className="text-gray-800 dark:text-gray-200 text-sm mb-5 font-Outfit leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm" />
                    <div>
                        <p className="font-bold text-black dark:text-white text-sm font-Outfit">{testimonial.name}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs font-Outfit">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="testimonials" className="pt-28 pb-20 px-4 scroll-mt-36">
            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes scrollReverse {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-scroll { animation: scroll 40s linear infinite; }
                    .animate-scroll-reverse { animation: scrollReverse 40s linear infinite; }
                    .animate-scroll:hover, .animate-scroll-reverse:hover { animation-play-state: paused; }
                `}
            </style>
            <div className="max-w-6xl mx-auto">
                <div data-heading className="text-center mb-14">
                    <h4 className="inline-block px-4 py-1 rounded-full border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm bg-white dark:bg-darkHover text-xs sm:text-sm font-Outfit font-bold uppercase tracking-wider mb-3">
                        Testimonials
                    </h4>
                    <h2 className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white ${orivian.className}`}>
                        What people are saying
                    </h2>
                    <p className="text-center max-w-2xl mx-auto mt-4 font-Ovo text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Real feedback from founders, designers, and engineering leaders I have collaborated with to build impactful products.
                    </p>
                </div>

                <div className="space-y-8 overflow-hidden py-6">
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} data-card className="relative w-full overflow-hidden">
                            {/* Seamless fade masks so cards are never cropped at the edges */}
                            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white dark:from-[#11001F] to-transparent z-20 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white dark:from-[#11001F] to-transparent z-20 pointer-events-none"></div>

                            <div className={`flex gap-7 sm:gap-8 w-max py-4 sm:py-5 ${row.className}`}>
                                {[...testimonials.slice(row.start, row.end), ...testimonials.slice(row.start, row.end), ...testimonials.slice(row.start, row.end)].map((testimonial, index) =>
                                    renderCard(testimonial, index)
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
