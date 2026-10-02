export default function Footer() {
  return (
    <footer className="mt-20 pb-12">
      <div className="text-center">
        <a href="/" className="inline-block">
          <img
            src="/assets/logo.png"
            alt="Denis Ezekiel"
            className="w-36 mx-auto mb-3 dark:hidden"
          />
          <img
            src="/assets/logo_dark.png"
            alt="Denis Ezekiel"
            className="w-36 mx-auto mb-3 hidden dark:block"
          />
        </a>

        <div className="w-max mx-auto mt-2">
          <a
            href="mailto:dm8143092@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-black dark:border-white bg-white dark:bg-darkTheme shadow-neo-sm dark:shadow-neo-white-sm font-Outfit font-semibold text-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-black dark:text-white"
          >
            <img src="/assets/mail_icon.png" alt="" className="w-4 dark:hidden" />
            <img
              src="/assets/mail_icon_dark.png"
              alt=""
              className="w-4 hidden dark:block"
            />
            dm8143092@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t-2 border-black dark:border-white/40 mx-4 sm:mx-8 lg:mx-[10%] mt-12 pt-6">
        <p className="font-Outfit font-medium text-sm text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} Denis Ezekiel. All rights reserved.
        </p>

        <ul className="flex items-center gap-3 justify-center mt-5 sm:mt-0">
          {/* GitHub */}
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Mephie256"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border-2 border-black dark:border-white bg-white dark:bg-darkTheme shadow-neo-sm dark:shadow-neo-white-sm flex items-center justify-center hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-black dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </li>

          {/* Facebook */}
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/denisezel17"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border-2 border-black dark:border-white bg-white dark:bg-darkTheme shadow-neo-sm dark:shadow-neo-white-sm flex items-center justify-center hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-[#1877F2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-1.11 9-5.53 9-10.95z" />
              </svg>
            </a>
          </li>

          {/* Instagram */}
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/dm8143092/"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border-2 border-black dark:border-white bg-white dark:bg-darkTheme shadow-neo-sm dark:shadow-neo-white-sm flex items-center justify-center hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-[#E4405F]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </li>

          {/* TikTok */}
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@incredboify"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full border-2 border-black dark:border-white bg-white dark:bg-darkTheme shadow-neo-sm dark:shadow-neo-white-sm flex items-center justify-center hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-black dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
