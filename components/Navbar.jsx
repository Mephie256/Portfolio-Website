"use client";
import { useEffect, useRef, useState } from "react";
import { play, isEnabled, setEnabled, subscribe } from "@/lib/sound";
import Link from "next/link";

export default function Navbar() {
  const sideMenuRef = useRef();
  const menuOpen = useRef(false);
  const [soundOn, setSoundOn] = useState(true);

  const openMenu = () => {
    menuOpen.current = true;
    play("transition_up");
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-18rem)";
    }
  };
  const closeMenu = () => {
    if (menuOpen.current) play("transition_down");
    menuOpen.current = false;
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(18rem)";
    }
  };
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    const dark = document.documentElement.classList.contains("dark");
    play(dark ? "toggle_on" : "toggle_off");
    try {
      localStorage.theme = dark ? "dark" : "light";
    } catch {}
  };

  const toggleSound = () => {
    const next = !isEnabled();
    setEnabled(next);
    // confirm "on" with a sound; "off" is silent by definition
    if (next) play("toggle_on");
  };

  useEffect(() => {
    // Light is the default; dark only applies if the visitor chose it with the toggle
    let saved = null;
    try {
      saved = localStorage.theme;
    } catch {}
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  // keep the sound switch in sync with the saved preference
  useEffect(() => {
    setSoundOn(isEnabled());
    return subscribe(setSoundOn);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
        <img src="/assets/header-bg-color.png" alt="" className="w-full" />
      </div>

      <header data-intro="nav" className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50">
        <nav
          className="w-full rounded-full border-2 border-black dark:border-white bg-white/95 dark:bg-darkTheme/95 backdrop-blur-md px-4 sm:px-7 py-1 sm:py-3 shadow-neo dark:shadow-neo-white flex items-center justify-between transition-all"
        >
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center py-1.5">
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
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-Outfit font-semibold text-sm lg:text-base text-gray-800 dark:text-gray-200">
            <li>
              <Link
                className="hover:text-green-600 dark:hover:text-green-400 hover:underline decoration-2 underline-offset-4 transition"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-600 dark:hover:text-green-400 hover:underline decoration-2 underline-offset-4 transition"
                href="/about"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-600 dark:hover:text-green-400 hover:underline decoration-2 underline-offset-4 transition"
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-600 dark:hover:text-green-400 hover:underline decoration-2 underline-offset-4 transition"
                href="/work"
              >
                Projects
              </Link>
            </li>
          </ul>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              data-snd="none"
              aria-label="Toggle dark/light mode"
              className="w-11 h-11 sm:w-9 sm:h-9 rounded-full border-2 border-black dark:border-white flex items-center justify-center bg-white dark:bg-darkHover shadow-neo-sm dark:shadow-neo-white-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
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

            {/* Sound on/off (UI sounds are on by default) */}
            <button
              onClick={toggleSound}
              data-snd="none"
              aria-label={soundOn ? "Turn sound off" : "Turn sound on"}
              aria-pressed={soundOn}
              title={soundOn ? "Sound on" : "Sound off"}
              className="w-11 h-11 sm:w-9 sm:h-9 rounded-full border-2 border-black dark:border-white flex items-center justify-center bg-white dark:bg-darkHover text-black dark:text-white shadow-neo-sm dark:shadow-neo-white-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" />
                {soundOn ? (
                  <>
                    <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                    <path d="M18.5 5.5a9 9 0 0 1 0 13" />
                  </>
                ) : (
                  <>
                    <path d="m16 9 5 6" />
                    <path d="m21 9-5 6" />
                  </>
                )}
              </svg>
            </button>

            {/* Brand Green Contact Pill Button */}
            <a
              href="https://wa.me/256763731276"
              target="_blank"
              rel="noopener noreferrer"
              data-snd="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full border-2 border-black bg-green-500 hover:bg-green-400 text-black font-bold text-sm shadow-neo-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              Contact
            </a>

            {/* Mobile menu trigger */}
            <button
              className="md:hidden w-11 h-11 sm:w-9 sm:h-9 rounded-full border-2 border-black dark:border-white flex items-center justify-center bg-white dark:bg-darkHover shadow-neo-sm dark:shadow-neo-white-sm cursor-pointer"
              onClick={openMenu}
              data-snd="none"
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
        className="flex md:hidden flex-col gap-6 py-20 px-8 fixed -right-72 translate-x-80 top-0 bottom-0 w-72 z-50 h-screen bg-white dark:bg-darkTheme border-l-2 border-black dark:border-white shadow-[-6px_0px_0px_#000] dark:shadow-[-6px_0px_0px_#fff] transition duration-300 font-Outfit font-bold text-black dark:text-white"
      >
        <div
          className="absolute right-6 top-6 w-9 h-9 rounded-full border-2 border-black dark:border-white flex items-center justify-center bg-gray-100 dark:bg-darkHover shadow-neo-sm dark:shadow-neo-white-sm cursor-pointer"
          onClick={closeMenu}
          data-snd="none"
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
          <Link
            href="/"
            onClick={closeMenu}
            data-snd="none"
            className="text-lg hover:text-green-500 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            onClick={closeMenu}
            data-snd="none"
            className="text-lg hover:text-green-500 transition"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            onClick={closeMenu}
            data-snd="none"
            className="text-lg hover:text-green-500 transition"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/work"
            onClick={closeMenu}
            data-snd="none"
            className="text-lg hover:text-green-500 transition"
          >
            Projects
          </Link>
        </li>
        <li className="pt-4">
          <a
            href="https://wa.me/256763731276"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            data-snd="none"
            className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-full border-2 border-black bg-green-500 hover:bg-green-400 text-black font-bold shadow-neo-sm"
          >
            Contact me
          </a>
        </li>
      </ul>
    </>
  );
}
