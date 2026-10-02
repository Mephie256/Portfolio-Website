import localFont from "next/font/local";

const ppHatton = localFont({
  src: [
    {
      path: "../public/fonts/pp_hatton/PPHatton-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/pp_hatton/PPHatton-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function Header() {
  return (
    <section className="w-full min-h-[100dvh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-8 lg:px-10 xl:px-16 overflow-hidden">
      <div className="w-full max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-6 xl:gap-10 items-center justify-items-center">
        
        {/* Left Column: Two Neobrutalist Photo Cards */}
        <div className="order-2 lg:order-1 lg:col-span-3 w-full flex flex-row lg:flex-col items-center justify-center lg:items-end gap-3.5 sm:gap-7 xl:gap-8 px-1 sm:px-0">
          
          {/* Top Photo: Sitting with laptop with Neobrutalism offset backing in Resume button lime (#bef264) */}
          <div className="relative hover:scale-105 transition-transform duration-300">
            {/* Neobrutalism offset backing in exact Resume button lime */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 bg-[#bef264] rounded-2xl sm:rounded-3xl border-[2px] sm:border-[2.5px] border-black dark:border-white"></div>
            
            {/* White card with solid black border */}
            <div className="relative z-10 w-[136px] min-[380px]:w-[152px] min-[440px]:w-44 sm:w-56 lg:w-64 xl:w-72 rounded-2xl sm:rounded-3xl overflow-hidden border-[2px] sm:border-[2.5px] border-black dark:border-white bg-white">
              <img
                src="/assets/sitting-with-laptop.png"
                alt="Denis Ezekiel working on laptop"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

          {/* Bottom Photo: Pointing on laptop with neobrutalist backing */}
          <div className="relative rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 bg-[#bef264] rounded-2xl sm:rounded-3xl border-[2px] sm:border-[2.5px] border-black dark:border-white"></div>
            <div className="relative z-10 w-[136px] min-[380px]:w-[152px] min-[440px]:w-44 sm:w-56 lg:w-64 xl:w-72 rounded-2xl sm:rounded-3xl overflow-hidden border-[2px] sm:border-[2.5px] border-black dark:border-white bg-white">
              <img
                src="/assets/pointing-on-laptop.png"
                alt="Denis Ezekiel coding on laptop"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Center Column: PP Hatton Headline & Centered Content */}
        <div className="order-1 lg:order-2 lg:col-span-6 w-full text-center flex flex-col items-center justify-center px-1 sm:px-4 xl:px-6">
          <h1
            className={`text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-[60px] xl:text-[72px] 2xl:text-[76px] leading-[1.1] sm:leading-[1.08] font-bold text-black dark:text-white tracking-tight max-w-2xl xl:max-w-3xl ${ppHatton.className}`}
          >
            Denis Ezekiel — fullstack web developer based in Uganda.
          </h1>

          <p className="mt-4 sm:mt-6 max-w-xl xl:max-w-2xl mx-auto font-Ovo text-sm sm:text-lg xl:text-xl text-gray-700 dark:text-gray-300 leading-relaxed px-2 sm:px-0">
            Crafting unforgettable digital experiences across web, mobile, and creative media. 4+ years of experience partnering with fast-growing startups and organizations.
          </p>

          {/* The 3 Prominent Neobrutalist Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-6 sm:mt-10">
            {/* Button 1: My Work (Vibrant Green #22c55e) */}
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-full border-[2px] sm:border-[2.5px] border-black bg-[#22c55e] hover:bg-[#16a34a] text-black font-Outfit font-bold text-sm sm:text-lg shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-150"
            >
              My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            {/* Button 2: About Me (White) */}
            <a
              href="#about"
              className="inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4 rounded-full border-[2px] sm:border-[2.5px] border-black dark:border-white bg-white dark:bg-darkHover hover:bg-gray-100 dark:hover:bg-darkHover/80 text-black dark:text-white font-Outfit font-bold text-sm sm:text-lg shadow-[3px_3px_0px_#000] dark:shadow-[3px_3px_0px_#fff] sm:shadow-[4px_4px_0px_#000] sm:dark:shadow-[4px_4px_0px_#fff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] dark:hover:shadow-[2px_2px_0px_#fff] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-150"
            >
              About Me
            </a>

            {/* Button 3: Resume (Vibrant Lime #bef264) */}
            <a
              href="/resume/Mein-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-full border-[2px] sm:border-[2.5px] border-black bg-[#bef264] hover:bg-[#a3e635] text-black font-Outfit font-bold text-sm sm:text-lg shadow-[3px_3px_0px_#000] sm:shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-150"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Large Portrait Headshot Card with Green Neobrutalist Offset Bottom Layer */}
        <div className="order-3 lg:col-span-3 w-full flex items-center justify-center lg:justify-start px-2 sm:px-0">
          <div className="relative hover:scale-[1.02] transition-transform duration-300">
            {/* Green offset block at the bottom-right */}
            <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5 bg-[#22c55e] rounded-[28px] sm:rounded-[34px] border-[2px] sm:border-[2.5px] border-black dark:border-white"></div>
            
            <div className="relative z-10 w-56 min-[380px]:w-64 sm:w-72 lg:w-80 xl:w-88 max-w-[85vw] rounded-[28px] sm:rounded-[34px] overflow-hidden border-[2px] sm:border-[2.5px] border-black dark:border-white bg-white dark:bg-darkTheme shadow-sm">
              <img
                src="/assets/headshot.png"
                alt="Denis Ezekiel"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
