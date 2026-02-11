import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate("/");
  };

  return (
    // ✅ সব পেজে sticky থাকবে
    <header className="sticky top-0 z-[60] flex justify-center px-4 pt-3">
      {/* Glass navbar card */}
      <div
        className="
          navbar w-full max-w-7xl
          rounded-2xl border
          bg-white/90 text-slate-900
          border-slate-200/80
          shadow-[0_18px_60px_rgba(15,23,42,0.6)]
          backdrop-blur-xl
          px-4
          dark:bg-slate-900/80 dark:text-slate-100
          dark:border-white/15
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
              className="btn btn-ghost btn-circle text-slate-700 dark:text-slate-100"
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
                mt-3 w-52 rounded-2xl border
                bg-white/95 text-slate-900
                border-slate-200 shadow-xl backdrop-blur-xl
                dark:bg-slate-900/95 dark:text-slate-100
                dark:border-white/15
                z-[80] p-2
              "
            >
              <li>
                <Link to="/#features">Features</Link>
              </li>
              <li>
                <Link to="/#how-it-works">How it works</Link>
              </li>
              <li>
                <Link to="/scan">Scan Food</Link>
              </li>
              <li>
                <Link to="/#pricing">Pricing</Link>
              </li>
              {!isAuthenticated && (
                <>
                  <li className="mt-2 border-t border-slate-200 pt-2 dark:border-white/10">
                    <Link to="/login">Log in</Link>
                  </li>
                  <li>
                    <Link to="/signup" className="text-emerald-500">
                      Sign up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <div className="flex h-10 items-center justify-center">
              <img
                src="https://img.icons8.com/?size=96&id=TPyMDKVYbCQo&format=png"
                alt="ChefLaa logo"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              {/* ✅ Cheflaa লেখা brand colour */}
              <h2 className="text-sm font-bold">
                <span className="text-[#1B4332] dark:text-[#D8F3DC]">
                  Chef
                </span>
                <span className="text-[#FF7043]">laa</span>
              </h2>
              <span className="text-[11px] text-slate-500 dark:text-slate-300 sm:text-xs">
                AI-native kitchen copilot
              </span>
            </div>
          </Link>
        </div>

        {/* CENTER: Desktop links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1 text-sm font-medium">
            <li>
              <Link
                to="/#features"
                className="text-slate-700 hover:text-[#1B4332] dark:text-slate-100/80 dark:hover:text-white"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/#how-it-works"
                className="text-slate-700 hover:text-[#1B4332] dark:text-slate-100/80 dark:hover:text-white"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="/scan"
                className="text-slate-700 hover:text-[#1B4332] dark:text-slate-100/80 dark:hover:text-white"
              >
                Scan
              </Link>
            </li>
            <li>
              <Link
                to="/#pricing"
                className="text-slate-700 hover:text-[#1B4332] dark:text-slate-100/80 dark:hover:text-white"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/#faq"
                className="text-slate-700 hover:text-[#1B4332] dark:text-slate-100/80 dark:hover:text-white"
              >
                FAQ
              </Link>
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
            className="btn btn-ghost btn-circle text-slate-700 dark:text-slate-100"
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

          {isAuthenticated ? (
            /* Logged in state */
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 py-1 pl-1 pr-3 text-slate-800 transition hover:bg-white dark:border-white/15 dark:bg-slate-800/90 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                <img
                  src={
                    user?.avatar ||
                    `https://ui-avatars.com/api/?name=${user?.name}&background=random`
                  }
                  alt={user?.name}
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-[#FF7043]/70"
                />
                <span className="hidden text-sm font-medium sm:block">
                  {user?.name?.split(" ")[0]}
                </span>
                <svg
                  className={`h-4 w-4 text-slate-500 transition-transform dark:text-slate-300 ${
                    showUserMenu ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* User dropdown menu */}
              {showUserMenu && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-[70]"
                    onClick={() => setShowUserMenu(false)}
                  />

                  {/* Menu */}
                  <div className="absolute right-0 top-full z-[80] mt-2 w-56 rounded-2xl border border-slate-200 bg-white/95 p-2 text-slate-900 shadow-xl backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/95 dark:text-slate-100">
                    {/* User info */}
                    <div className="mb-2 border-b border-slate-200 px-3 pb-3 pt-2 dark:border-white/10">
                      <p className="text-sm font-semibold">{user?.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {user?.email}
                      </p>
                    </div>

                    {/* Menu items */}
                    <ul className="space-y-1">
                      <li>
                        <Link
                          to="/profile"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition hover:bg-slate-100 dark:hover:bg-white/10"
                        >
                          <span className="text-lg">👤</span>
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/saved-recipes"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition hover:bg-slate-100 dark:hover:bg-white/10"
                        >
                          <span className="text-lg">💾</span>
                          Saved Recipes
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/scan-history"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition hover:bg-slate-100 dark:hover:bg-white/10"
                        >
                          <span className="text-lg">📷</span>
                          Scan History
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/settings"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition hover:bg-slate-100 dark:hover:bg-white/10"
                        >
                          <span className="text-lg">⚙️</span>
                          Settings
                        </Link>
                      </li>
                    </ul>

                    {/* Logout */}
                    <div className="mt-2 border-t border-slate-200 pt-2 dark:border-white/10">
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
                      >
                        <span className="text-lg">🚪</span>
                        Log out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* Logged out state */
            <>
              <Link
                to="/login"
                className="btn btn-ghost btn-sm hidden text-slate-700 hover:text-[#1B4332] dark:text-slate-100/85 md:inline-flex"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="btn btn-sm rounded-full border-none bg-[#FF7043] text-[#2D3436] shadow-md shadow-[#FF7043]/60 hover:bg-[#ff865f]"
              >
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

const SunIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2.5M12 18.5V21M4.22 4.22L5.64 5.64M18.36 18.36l1.42 1.42M3 12h2.5M18.5 12H21M4.22 19.78L5.64 18.36M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12.79A8.5 8.5 0 0112.21 3 6.5 6.5 0 1019 15.79 8.46 8.46 0 0021 12.79z" />
  </svg>
);

export default Navbar;