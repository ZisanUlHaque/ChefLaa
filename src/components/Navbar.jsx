import React from "react";
import logo from "../assets/Logo.png";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-[60] flex justify-center px-4 pt-3">
      {/* Glass navbar card */}
      <div
        className="
          navbar w-full max-w-7xl
          rounded-2xl border border-white/15
          bg-white/10
          shadow-[0_18px_60px_rgba(15,23,42,0.75)]
          backdrop-blur-xl
          px-4
          text-slate-100
          dark:bg-slate-900/70 dark:text-slate-100
          transition-colors duration-300
          overflow-visible
        "
      >
        {/* LEFT: Mobile menu + brand */}
        <div className="navbar-start gap-2">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-slate-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="
                menu menu-sm dropdown-content
                mt-3 w-52 rounded-2xl border border-white/15
                bg-base-100/90 shadow-xl backdrop-blur-xl
                z-[80] p-2
              "
            >
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#how-it-works">How it works</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Brand */}
          <a
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <div className="flex h-10 items-center justify-center">
              <img
                src={logo}
                alt="ChefLaa logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm sm:text-base text-slate-100">
                ChefLaa
              </span>
              <span className="text-[11px] text-slate-200/80 sm:text-xs">
                AI-native kitchen copilot
              </span>
            </div>
          </a>
        </div>

        {/* CENTER: Desktop links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1 text-sm font-medium">
            <li>
              <a
                href="#features"
                className="text-slate-100/80 hover:text-white"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-slate-100/80 hover:text-white"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-slate-100/80 hover:text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-slate-100/80 hover:text-white"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT: theme toggle + auth + CTA */}
        <div className="navbar-end gap-2">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="btn btn-ghost btn-circle text-slate-100"
          >
            <SunIcon
              className={`h-5 w-5 transition-opacity ${
                theme === "light" ? "opacity-100" : "opacity-0"
              }`}
            />
            <MoonIcon
              className={`absolute h-5 w-5 transition-opacity ${
                theme === "dark" ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>

          <button className="btn btn-ghost btn-sm hidden md:inline-flex text-slate-100/85">
            Log in
          </button>

          <button className="btn btn-sm rounded-full border-none bg-[#FF7043] text-[#2D3436] hover:bg-[#ff865f] shadow-md shadow-[#FF7043]/60">
            Get early access
          </button>
        </div>
      </div>
    </header>
  );
};

const SunIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2.5M12 18.5V21M4.22 4.22L5.64 5.64M18.36 18.36l1.42 1.42M3 12h2.5M18.5 12H21M4.22 19.78L5.64 18.36M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12.79A8.5 8.5 0 0112.21 3 6.5 6.5 0 1019 15.79 8.46 8.46 0 0121 12.79z" />
  </svg>
);

export default Navbar;