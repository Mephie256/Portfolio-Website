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
      link: "#",
    },
    {
      name: "Mobile app",
      icon: "/assets/mobile-icon.png",
      description: "Developing robust, cross-platform mobile applications that provide seamless user experiences on any device.",
      link: "#",
    },
    {
      name: "UI/ UX design",
      icon: "/assets/ui-icon.png",
      description: "Crafting intuitive and visually stunning user interfaces with a strong focus on maximizing usability and engagement.",
      link: "#",
    },
    {
      name: "Graphics design",
      icon: "/assets/graphics-icon.png",
      description: "Producing high-quality brand visuals and creative assets that help your business leave a lasting digital impression.",
      link: "#",
    },
  ];
  return (
    <div id="services" className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
      <h2 className={`text-center text-3xl sm:text-4xl lg:text-5xl ${orivian.className}`}>
        My services
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I build high-performance software solutions, design impactful brand
        visuals, and create engaging video content that drives results. From
        code to creativity, I help businesses stand out with modern,
        professional digital solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="border border-gray-300 dark:border-white/30 rounded-lg px-6 sm:px-8 py-8 sm:py-10 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white flex flex-col justify-between"
          >
            <div>
              <img src={service.icon} alt="" className="w-10" />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {service.description}
              </p>
            </div>
            <a
              href={service.link}
              className="flex items-center gap-2 text-sm mt-5 font-semibold text-gray-800 dark:text-white"
            >
              Read more{" "}
              <img src="/assets/right-arrow.png" alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
