import localFont from "next/font/local";

const orivian = localFont({
  src: "../public/fonts/rocline/orivian/OrivianDemo-Regular.otf",
});

export default function About() {
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
      description: "Built more than 15+ live products",
    },
  ];

  return (
    <section id="about" className="relative w-full px-4 sm:px-8 lg:px-[12%] py-16 scroll-mt-24 overflow-hidden">
      {/* Poly Line Graphic from Design */}
      <div className="absolute -right-20 sm:-right-28 md:-right-36 lg:-right-44 xl:-right-48 top-[76%] lg:top-[55%] -translate-y-1/2 pointer-events-none select-none z-0">
        <img
          src="/assets/poly-line.png"
          alt=""
          className="w-56 sm:w-72 md:w-96 lg:w-[440px] xl:w-[480px] h-auto object-contain animate-[spin_35s_linear_infinite]"
        />
      </div>

      <div className="relative z-10 text-center mb-10">
        <h4 className="inline-block px-4 py-1 rounded-full border-2 border-black dark:border-white shadow-neo-sm dark:shadow-neo-white-sm bg-white dark:bg-darkHover text-xs sm:text-sm font-Outfit font-bold uppercase tracking-wider mb-3">
          Introduction
        </h4>
        <h2 className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white ${orivian.className}`}>
          About me
        </h2>
      </div>

      <div className="relative z-10 flex w-full flex-col lg:flex-row items-center gap-14 lg:gap-20 my-8 lg:my-14">
        {/* Photo Container with Neobrutalist Offset Card Backing in Green (exact match to user mockup) */}
        <div data-pop className="relative max-w-max mx-auto px-4 sm:px-0 mb-6 lg:mb-0">
          <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 sm:translate-x-4 sm:translate-y-4 bg-[#22c55e] rounded-3xl border-[2.5px] border-black dark:border-white"></div>
          <img
            src="/assets/user-image.png"
            alt="Denis Ezekiel"
            className="relative z-10 w-64 sm:w-80 rounded-3xl border-[2.5px] border-black dark:border-white object-cover max-w-full bg-white dark:bg-darkTheme"
          />

          {/* Circular Badge: FRONT-END WEB DEVELOPER with 😎 (as shown in second image) */}
          <div className="z-20 bg-white dark:bg-darkTheme border-[2.5px] border-black dark:border-white shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff] w-28 sm:w-36 aspect-square absolute -right-3 sm:-right-5 -bottom-3 sm:-bottom-5 rounded-full flex items-center justify-center p-1">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin_slow">
              <path id="aboutCirclePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[8.5px] uppercase font-Outfit font-bold tracking-[1.8px] fill-black dark:fill-white">
                <textPath href="#aboutCirclePath" startOffset="50%" textAnchor="middle">
                  FRONT-END WEB DEVELOPER •
                </textPath>
              </text>
            </svg>
            <span className="text-2xl sm:text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
              😎
            </span>
          </div>
        </div>

        {/* Content & Info Cards */}
        <div className="flex-1 text-center sm:text-left">
          <p className="mb-8 max-w-2xl mx-auto sm:mx-0 font-Ovo text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am an experienced Fullstack Developer and Video Editor / Creative Designer with over 4+ years of professional expertise. Throughout my journey, I have had the privilege of collaborating with forward-thinking startups and teams, helping transform bold ideas into rock-solid, high-converting digital realities.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto sm:mx-0">
            {data.map((item) => (
              <li
                key={item.name}
                className="border-2 border-black dark:border-white rounded-2xl p-5 bg-white dark:bg-darkTheme shadow-neo dark:shadow-neo-white cursor-pointer hover:-translate-y-1.5 hover:shadow-neo-lg dark:hover:shadow-neo-white-lg transition-all duration-200"
              >
                <img src={item.icon1} alt="" className="w-7 mt-1 dark:hidden" />
                <img
                  src={item.icon2}
                  alt=""
                  className="w-7 mt-1 hidden dark:block"
                />
                <h3 className="my-3 font-Outfit font-bold text-gray-900 dark:text-white text-base">
                  {item.name}
                </h3>
                <p className="text-gray-700 text-sm dark:text-gray-300 font-Outfit">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-900 dark:text-white font-Outfit font-bold text-base flex items-center gap-2 justify-center sm:justify-start">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black inline-block"></span>
            Tools I use daily
          </h4>

          <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border-2 border-black dark:border-white rounded-xl bg-white dark:bg-darkHover shadow-neo-sm dark:shadow-neo-white-sm cursor-pointer hover:-translate-y-1 hover:shadow-neo dark:hover:shadow-neo-white transition-all duration-200"
                title={tool.name}
              >
                <img src={tool.icon} alt={tool.name} className="w-6 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
