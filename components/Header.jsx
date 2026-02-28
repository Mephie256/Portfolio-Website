import localFont from "next/font/local";

const orivian = localFont({
  src: "../public/fonts/rocline/orivian/OrivianDemo-Regular.otf",
});

export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img src="/assets/profile-img.png" alt="" className="rounded-full w-32" />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Denis Ezekiel
        <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
      </h3>
      <h1
        className={`text-3xl sm:text-6xl lg:text-[66px] ${orivian.className}`}
      >
        fullstack web developer based in Uganda.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a Fullstack developer from Kampala, UG with 4 years of experience
        in startup companies like IonHosting and Pneuma African Foundation
        (PAF).
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="https://wa.me/256763731276"
          target="_blank"
          className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me{" "}
          <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
        </a>

        <a
          href="/resume/Mein-Resume.pdf"
          download
          className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
        >
          my resume{" "}
          <img
            src="/assets/download-icon.png"
            alt=""
            className="w-4 dark:invert"
          />
        </a>
      </div>
    </div>
  );
}
