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

    const renderCard = (testimonial, index) => (
        <div key={index} className="bg-white dark:bg-darkHover border border-slate-200 dark:border-white/20 hover:border-slate-300 dark:hover:border-white/40 rounded-xl p-4 shrink-0 w-[350px] transition-colors">
            <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-[#FFD700]" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                ))}
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-6 font-Outfit">{testimonial.text}</p>
            <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                    <p className="font-medium text-neutral-800 dark:text-white text-sm font-Outfit">{testimonial.name}</p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm font-Outfit">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );

    return (
        <section id="testimonials" className="bg-[#FAFAFA] dark:bg-transparent py-16 px-4">
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
                <div className="text-center mb-16">
                    <h4 className="text-center mb-2 text-lg font-Ovo dark:text-white">Testimonials</h4>
                    <h2 className={`text-center text-5xl ${orivian.className} dark:text-white`}>
                        What people are saying
                    </h2>
                    <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-neutral-300">
                        Real feedback from founders, designers, and teams I have worked with to build amazing products.
                    </p>
                </div>

                <div className="space-y-6 overflow-hidden">
                    {rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="relative w-full">
                            <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#FAFAFA] dark:from-darkTheme to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#FAFAFA] dark:from-darkTheme to-transparent z-10 pointer-events-none"></div>

                            <div className={`flex gap-6 w-max ${row.className}`}>
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
