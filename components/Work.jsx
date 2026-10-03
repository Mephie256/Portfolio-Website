import localFont from "next/font/local";
import Link from "next/link";

const orivian = localFont({
  src: "../public/fonts/rocline/orivian/OrivianDemo-Regular.otf",
});

export default function Work() {
  const work = [
    {
      name: "CalMax AI App",
      icon: "/assets/calmax.png",
      description: "AI-powered calorie tracker",
      link: "https://drive.google.com/file/d/1W8MZJyVzFllQNt8OBA8hOQuDWrzroDtX/view?usp=sharing",
    },
    {
      name: "Unlonely Ai",
      icon: "/assets/work-1.png",
      description: "Your kind AI companion",
      link: "https://unlonely.netlify.app/",
    },
    {
      name: "Ion Radios App",
      icon: "/assets/work-3.png",
      description: "Live Radio Streaming Mobile App",
      link: "",
    },
    {
      name: "3D Site",
      icon: "/assets/work-4.png",
      description: "Interactive GSAP 3D Experience",
      link: "https://gsapproj.netlify.app/",
    },
  ];

  return (
    <section id="work" className="w-full px-4 sm:px-8 lg:px-[12%] py-16 scroll-mt-24">
      <div data-heading className="text-center mb-10">
        <h4 className="inline-block px-4 py-1 rounded-full border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm bg-white dark:bg-darkHover text-xs sm:text-sm font-Outfit font-bold uppercase tracking-wider mb-3">
          My portfolio
        </h4>
        <h2 className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white ${orivian.className}`}>
          My latest work
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-4 font-Ovo text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          A curated selection of modern web apps, mobile solutions, and creative projects crafted with performance, clean aesthetics, and real user value.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {work.map((item) => (
          <a
            href={item.link || "#"}
            target={item.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            key={item.name}
            data-pop
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group block overflow-hidden border-2 border-black dark:border-white shadow-neo dark:shadow-neo-white hover:-translate-y-2 hover:shadow-neo-lg dark:hover:shadow-neo-white-lg transition-all duration-200"
            style={{ backgroundImage: `url(${item.icon})` }}
          >
            {/* Neobrutalist Floating Card Pill */}
            <div className="bg-white dark:bg-[#11001F] w-[90%] rounded-xl absolute bottom-4 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between duration-300 group-hover:bottom-6 border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm">
              <div className="max-w-[70%]">
                <h3 className="font-Outfit font-bold text-base sm:text-lg text-black dark:text-white truncate">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm font-Outfit text-gray-700 dark:text-gray-300 truncate">
                  {item.description}
                </p>
              </div>
              <div className="shrink-0 border-2 border-black rounded-full w-9 sm:w-10 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] bg-lime-300 group-hover:bg-lime-400 transition-colors">
                <img src="/assets/send-icon.png" alt="" className="w-4 sm:w-5" />
              </div>
            </div>
          </a>
        ))}
      </div>

      <div data-reveal className="text-center my-12">
        <Link
          href="/work"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black dark:border-white px-8 py-3 bg-white dark:bg-darkHover text-black dark:text-white font-Outfit font-bold text-base shadow-neo dark:shadow-neo-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm dark:hover:shadow-neo-white-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all duration-150"
        >
          Show more projects
          <img
            src="/assets/right-arrow-bold.png"
            alt=""
            className="w-4 dark:hidden"
          />
          <img
            src="/assets/right-arrow-bold-dark.png"
            alt=""
            className="w-4 hidden dark:block"
          />
        </Link>
      </div>
    </section>
  );
}
