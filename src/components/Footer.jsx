// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-emerald-500/20 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand & description */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7043] to-[#FFD1A3] text-sm font-bold text-slate-900 shadow-lg shadow-[#FF7043]/40">
                CL
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold">ChefLaa</span>
                <span className="text-[11px] text-slate-300">
                  AI-native kitchen copilot
                </span>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-400">
              SmartChef AI helps you turn whatever is already in your fridge
              into chef‑level meals, with macros and shopping lists handled for
              you.
            </p>
            <div className="mt-4 flex gap-3 text-[13px] text-slate-300">
              <a href="#features" className="hover:text-slate-100">
                Product
              </a>
              <a href="#pricing" className="hover:text-slate-100">
                Pricing
              </a>
              <a href="#faq" className="hover:text-slate-100">
                Support
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="text-sm text-slate-300">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Product
            </h4>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a href="#how-it-works" className="hover:text-slate-100">
                  How it works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-slate-100">
                  Features overview
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-100">
                  Plans & pricing
                </a>
              </li>
            </ul>

            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Company
            </h4>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a href="#" className="hover:text-slate-100">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-sm text-slate-300">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Stay in the loop
            </h4>
            <p className="mt-3 text-sm text-slate-400">
              Get early access invites, new feature drops and real‑world meal
              ideas straight to your inbox.
            </p>
            <form
              className="mt-4 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@example.com"
                className="h-9 flex-1 rounded-full border border-slate-700 bg-slate-900 px-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
              />
              <button className="h-9 rounded-full bg-[#FF7043] px-4 text-xs font-semibold text-[#2D3436] shadow-md shadow-[#FF7043]/60 hover:bg-[#ff865f]">
                Join waitlist
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} ChefLaa. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-200">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-200">
              Terms
            </a>
            <a href="#" className="hover:text-slate-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;