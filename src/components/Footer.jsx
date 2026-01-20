// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-500/20 bg-gradient-to-t from-black via-[#031b14] to-transparent text-slate-50">
      {/* Decorative background images with motion */}
      <div
        className="pointer-events-none footer-float absolute -left-10 bottom-0 h-48 w-48 opacity-70 blur-[1px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "999px",
        }}
      />
      <div
        className="pointer-events-none footer-float-delayed absolute -right-6 -top-10 h-60 w-60 opacity-70 blur-[1px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "999px",
        }}
      />

      {/* Soft color glows */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FF7043]/30 via-transparent to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        {/* Top CTA row */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          {/* Left: CTA */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Stop wasting ingredients
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Turn every random fridge photo into{" "}
              <span className="bg-gradient-to-r from-[#FF7043] via-[#FFD1A3] to-[#D8F3DC] bg-clip-text text-transparent">
                a planned, balanced meal.
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300">
              SmartChef AI helps you cut food waste, save time and hit your
              nutrition goals without spreadsheets, tabs or guesswork. Just
              scan, select a recipe and start cooking.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-[#FF7043] px-5 py-2.5 text-sm font-semibold text-[#2D3436] shadow-md shadow-[#FF7043]/50 transition hover:-translate-y-0.5 hover:bg-[#ff865f]">
                Start scanning free
              </button>
              <button className="rounded-full border border-slate-500/50 px-4 py-2 text-sm font-medium text-slate-100/90 hover:border-slate-300/80 hover:text-white transition">
                View sample recipes
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-slate-300/90">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                No credit card required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF7043]" />
                Under 10 seconds per scan
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Built for busy founders, students & families
              </span>
            </div>
          </div>

          {/* Right: mini stat + preview card */}
          <div className="flex flex-col gap-4 lg:items-end">
            {/* Stat card */}
            <div className="w-full max-w-xs rounded-2xl border border-emerald-500/25 bg-slate-950/85 p-4 shadow-xl shadow-black/70 backdrop-blur">
              <p className="text-[11px] text-slate-300">
                Average weekly impact
              </p>
              <div className="mt-2 flex items-baseline justify-between">
                <div>
                  <p className="text-lg font-semibold text-[#D8F3DC]">
                    3.8 hours
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Planning & scrolling time saved.
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-[#FF7043]">
                    −26%
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Average food waste reduction.
                  </p>
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
                <div className="h-full w-[70%] bg-gradient-to-r from-emerald-400 via-sky-400 to-[#FF7043]" />
              </div>
            </div>

            {/* Tiny preview pill */}
            <div className="w-full max-w-xs rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3 text-[11px] text-slate-100 shadow-lg shadow-black/70 backdrop-blur">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-[11px] text-slate-300">
                    Up next from your fridge:
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    Creamy Garlic Veggie Pasta
                  </p>
                </div>
                <span className="rounded-full bg-[#FF7043]/90 px-2 py-0.5 text-[10px] font-semibold text-slate-900">
                  18 min • 440 kcal
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-slate-700/60 pt-6 text-xs text-slate-400 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ChefLaa · All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#features" className="hover:text-slate-200">
              Features
            </a>
            <a href="#pricing" className="hover:text-slate-200">
              Pricing
            </a>
            <a href="#faq" className="hover:text-slate-200">
              FAQ
            </a>
            <a href="#" className="hover:text-slate-200">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-200">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;