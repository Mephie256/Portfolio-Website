import localFont from "next/font/local";

const orivian = localFont({
  src: "../public/fonts/rocline/orivian/OrivianDemo-Regular.otf",
});

export default function Services() {
  const services = [
    {
      name: "Web development",
      icon: "/assets/web-icon.png",
      description: "Building scalable, high-performance web applications tailored to your business needs using modern technologies.",
      link: "/services",
    },
    {
      name: "Mobile app",
      icon: "/assets/mobile-icon.png",
      description: "Developing robust, cross-platform mobile applications that provide seamless user experiences on any device.",
      link: "/services",
    },
    {
      name: "UI/ UX design",
      icon: "/assets/ui-icon.png",
      description: "Crafting intuitive and visually stunning user interfaces with a strong focus on maximizing usability and engagement.",
      link: "/services",
    },
    {
      name: "Graphics design",
      icon: "/assets/graphics-icon.png",
      description: "Producing high-quality brand visuals, motion graphics, and creative assets that help your business leave a lasting impression.",
      link: "/services",
    },
  ];

  return (
    <section id="services" className="w-full px-4 sm:px-8 lg:px-[12%] py-16 scroll-mt-24">
      <div className="text-center mb-10">
        <h4 className="inline-block px-4 py-1 rounded-full border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm bg-white dark:bg-darkHover text-xs sm:text-sm font-Outfit font-bold uppercase tracking-wider mb-3">
          What I offer
        </h4>
        <h2 className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white ${orivian.className}`}>
          My services
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-4 font-Ovo text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I build high-performance software solutions, design impactful brand visuals, and create engaging video content that drives real business results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {services.map((service) => (
          <div
            key={service.name}
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
            <a
              href={service.link}
              className="flex items-center gap-2 text-sm font-Outfit font-bold text-black dark:text-white py-3 mt-3 -mb-3 group-hover:translate-x-1.5 transition-transform"
            >
              Read more
              <img src="/assets/right-arrow.png" alt="" className="w-4 dark:invert" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
