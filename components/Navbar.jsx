"use client";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-18rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(18rem)";
    }
  };
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    // -------- light mode and dark mode -----------
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
        <img src="/assets/header-bg-color.png" alt="" className="w-full" />
      </div>

      <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50">
        <nav
          className="w-full rounded-full border-2 border-black dark:border-white bg-white/95 dark:bg-darkTheme/95 backdrop-blur-md px-4 sm:px-7 py-2.5 sm:py-3 shadow-neo dark:shadow-neo-white flex items-center justify-between transition-all"
        >
          {/* Brand / Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Denis Ezekiel"
              className="w-24 sm:w-28 cursor-pointer dark:hidden"
            />
            <img
              src="/assets/logo_dark.png"
              alt="Denis Ezekiel"
              className="w-24 sm:w-28 cursor-pointer hidden dark:block"
            />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-Outfit font-semibold text-sm lg:text-base text-gray-800 dark:text-gray-200">
            <li>
              <a
                className="hover:text-green-600 dark:hover:text-green-400 hover:underline decoration-2 underline-offset-4 transition"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-green-600 dark:hover:text-green-400 hover:underline decoration-2 underline-offset-4 transition"
                href="/about"
              >
                About me
              </a>
            </li>
            <li>
              <a
                className="hover:text-green-600 dark:hover:text-green-400 hover:underline decoration-2 underline-offset-4 transition"
                href="/services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="hover:text-green-600 dark:hover:text-green-400 hover:underline decoration-2 underline-offset-4 transition"
                href="/work"
              >
                Projects
              </a>
            </li>
          </ul>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="w-9 h-9 rounded-full border-2 border-black dark:border-white flex items-center justify-center bg-white dark:bg-darkHover shadow-neo-sm dark:shadow-neo-white-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
            >
              <img
                src="/assets/moon_icon.png"
                alt=""
                className="w-4 dark:hidden"
              />
              <img
                src="/assets/sun_icon.png"
                alt=""
                className="w-4 hidden dark:block"
              />
            </button>

            {/* Brand Green Contact Pill Button */}
            <a
              href="https://wa.me/256763731276"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full border-2 border-black bg-green-500 hover:bg-green-400 text-black font-bold text-sm shadow-neo-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              Contact
            </a>

            {/* Mobile menu trigger */}
            <button
              className="md:hidden w-9 h-9 rounded-full border-2 border-black dark:border-white flex items-center justify-center bg-white dark:bg-darkHover shadow-neo-sm dark:shadow-neo-white-sm cursor-pointer"
              onClick={openMenu}
              aria-label="Open navigation menu"
            >
              <img
                src="/assets/menu-black.png"
                alt=""
                className="w-5 dark:hidden"
              />
              <img
                src="/assets/menu-white.png"
                alt=""
                className="w-5 hidden dark:block"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-6 py-20 px-8 fixed -right-72 top-0 bottom-0 w-72 z-50 h-screen bg-white dark:bg-darkTheme border-l-2 border-black dark:border-white shadow-[-6px_0px_0px_#000] dark:shadow-[-6px_0px_0px_#fff] transition duration-300 font-Outfit font-bold text-black dark:text-white"
      >
        <div
          className="absolute right-6 top-6 w-9 h-9 rounded-full border-2 border-black dark:border-white flex items-center justify-center bg-gray-100 dark:bg-darkHover shadow-neo-sm dark:shadow-neo-white-sm cursor-pointer"
          onClick={closeMenu}
        >
          <img
            src="/assets/close-black.png"
            alt="Close"
            className="w-4 dark:hidden"
          />
          <img
            src="/assets/close-white.png"
            alt="Close"
            className="w-4 hidden dark:block"
          />
        </div>

        <li>
          <a
            href="/"
            onClick={closeMenu}
            className="text-lg hover:text-green-500 transition"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            onClick={closeMenu}
            className="text-lg hover:text-green-500 transition"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="/services"
            onClick={closeMenu}
            className="text-lg hover:text-green-500 transition"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/work"
            onClick={closeMenu}
            className="text-lg hover:text-green-500 transition"
          >
            Projects
          </a>
        </li>
        <li className="pt-4">
          <a
            href="https://wa.me/256763731276"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-full border-2 border-black bg-green-500 hover:bg-green-400 text-black font-bold shadow-neo-sm"
          >
            Contact me
          </a>
        </li>
      </ul>
    </>
  );
}
