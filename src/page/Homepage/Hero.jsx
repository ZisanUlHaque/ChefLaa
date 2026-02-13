// src/page/Homepage/Hero.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const BG_IMAGES = [
  "https://i.ibb.co/MkYpFV0w/premium-photo-1661753714897-78668e8bd101.avif",
  "https://i.ibb.co/rKngytLz/sharon-pittaway-KUZnfk-2-DSQ-unsplash.jpg",
  "https://i.ibb.co/27t3Yd0Z/premium-photo-1666299819315-929b3fae4450.avif",
  "https://i.ibb.co/FqsSLsFH/premium-photo-1671377387797-8d3307a546a6.avif",
  "https://i.ibb.co/0pLP9wzv/jason-briscoe-n4ymhyy-FY7-A-unsplash.jpg",
  "https://i.ibb.co/35t0MVGY/mohanad-karawanchy-A8sp-G1-Yh2-Q4-unsplash.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Preload background images
  useEffect(() => {
    BG_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto background slider
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % BG_IMAGES.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const handleStartScan = () => {
    navigate("/scan");
  };

  return (
    <section className="relative overflow-x-hidden overflow-y-visible bg-[#1B4332] text-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 z-0">
        {BG_IMAGES.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ease-out will-change-opacity ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden="true"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/92 via-black/55 to-[#1B4332]/92 backdrop-blur-[2px]" />
      </div>

      {/* Brand glows */}
      <div className="pointer-events-none absolute -left-40 top-0 z-[4] h-72 w-72 rounded-full bg-[#FF7043]/28 mix-blend-screen blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-6rem] z-[4] h-80 w-80 rounded-full bg-[#D8F3DC]/22 mix-blend-screen blur-3xl" />

      {/* Hero content */}
      {/* উপরে Navbar নেই, এখন Navbar RootLayout এ থাকবে */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col-reverse items-center gap-10 px-4 pb-16 pt-6 sm:px-6 lg:flex-row lg:items-center lg:pb-24 lg:pt-10">
        {/* Left: text */}
        <div className="w-full space-y-7 lg:w-1/2">
          {/* Personalized greeting for logged in users */}
          {isAuthenticated ? (
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300 shadow-sm shadow-emerald-900/50 backdrop-blur">
              <img
                src={user?.avatar}
                alt=""
                className="h-6 w-6 rounded-full ring-2 ring-emerald-400/50"
              />
              <span>Welcome back, {user?.name?.split(" ")[0]}! 👋</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-sm shadow-black/70 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF7043] shadow-[0_0_12px_rgba(255,112,67,0.9)]" />
              <span>New • Turn fridge chaos into clarity</span>
            </div>
          )}

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-[4rem]">
            {isAuthenticated ? (
              <>
                Ready to cook{" "}
                <span className="bg-gradient-to-r from-[#FF7043] via-[#FFD1A3] to-[#D8F3DC] bg-clip-text text-transparent">
                  something amazing?
                </span>
              </>
            ) : (
              <>
                Turn fridge chaos{" "}
                <span className="bg-gradient-to-r from-[#FF7043] via-[#FFD1A3] to-[#D8F3DC] bg-clip-text text-transparent">
                  into chef‑level meals.
                </span>
              </>
            )}
          </h1>

          <p className="max-w-xl text-sm text-slate-100/90 sm:text-base">
            {isAuthenticated
              ? "Scan your fridge and let ChefLaa create personalized recipes based on what you have. Your cooking journey continues!"
              : "ChefLaa looks at a single photo of your fridge, detects every ingredient, and builds curated recipes, macro‑accurate nutrition, and a smart grocery plan—so you never have to guess what to cook again."
            }
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={handleStartScan}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7043] px-6 py-3 text-sm font-semibold text-[#2D3436] shadow-lg shadow-[#FF7043]/55 transition hover:-translate-y-0.5 hover:bg-[#ff865f] focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:ring-offset-2 focus:ring-offset-[#1B4332]"
            >
              <span className="text-lg">📷</span>
              {isAuthenticated ? "Scan Now" : "Start a free scan"}
            </button>

            {!isAuthenticated && (
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur transition hover:bg-white/20"
              >
                Create free account
              </Link>
            )}

            {isAuthenticated && (
              <Link
                to="/saved-recipes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg.white/10 px-6 py-3 text-sm font-medium text-slate-100 backdrop-blur transition hover:bg.white/20"
              >
                <span>💾</span>
                My Saved Recipes
              </Link>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-200/90 sm:text-xs">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D8F3DC]" />
              {isAuthenticated
                ? "All scans are saved to your account"
                : "No credit card or sign‑up required"}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7043]" />
              Under 10 seconds per scan
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Works with any camera or smartphone
            </span>
          </div>

          {/* User stats (only for logged in users) */}
          {isAuthenticated && (
            <div className="flex gap-4 pt-4">
              <div className="rounded-xl border border-white/15 bg-black/40 px-4 py-3 backdrop-blur">
                <p className="text-2xl font-bold text-emerald-400">12</p>
                <p className="text-xs text-slate-400">Recipes saved</p>
              </div>
              <div className="rounded-xl border border.white/15 bg.black/40 px-4 py-3 backdrop-blur">
                <p className="text-2xl font-bold text-[#FF7043]">8</p>
                <p className="text-xs text-slate-400">Total scans</p>
              </div>
              <div className="rounded-xl border border.white/15 bg.black/40 px-4 py-3 backdrop-blur">
                <p className="text-2xl font-bold text-sky-400">3.2k</p>
                <p className="text-xs text-slate-400">Calories tracked</p>
              </div>
            </div>
          )}
        </div>

        {/* Right: premium card */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end lg:pr-2">
          {/* glow */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center lg:justify-end">
            <div className="h-64 w-64 rounded-full bg-[#FF7043]/25 blur-3xl lg:mr-6" />
          </div>

          <div className="relative w.full max-w-sm lg:mr-4">
            <div className="rounded-[2rem] border border.white/12 bg.black/55 p-[1.5px] shadow-2xl shadow.black/70 backdrop-blur-xl">
              <div className="rounded-[1.8rem] border border.white/10 bg-gradient-to-b from.white/6 via-[#1B4332]/55 to-slate-950/95 p-4">
                {/* header */}
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-200/80">
                      Live fridge scan
                    </p>
                    <p className="text-sm font-semibold text-slate-50">
                      Ready in 00:08s
                    </p>
                  </div>
                  <span className="rounded-full border border-white/15 bg.black/45 px-3 py-1 text-[10px] font-medium text-slate-100">
                    AI mode
                  </span>
                </div>

                {/* image */}
                <div className="relative mb-4 overflow-hidden rounded-2xl border border.white/12">
                  <img
                    src={BG_IMAGES[1]}
                    alt="Fresh ingredients being scanned by ChefLaa"
                    className="h-40 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient.to-t from.black/75 via.black/20 to.transparent" />

                  {/* Scanning animation overlay */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute left-0 right-0 h-0.5 animate-scan bg-gradient.to-r from.transparent via-emerald-400 to.transparent" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items.center justify-between text-[11px] text-slate-100">
                    <div>
                      <p className="font-semibold">12 items detected</p>
                      <p className="text-slate-200/85">
                        Perfect for 2 high‑protein dinners
                      </p>
                    </div>
                    <span className="rounded-full bg[#FF7043] px-3 py-1 text-[10px] font-semibold text-slate-950 shadow-md shadow-black/50">
                      96% match
                    </span>
                  </div>
                </div>

                {/* stats */}
                <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-100">
                  <div className="rounded-xl border border.white/14 bg.black/45 p-3">
                    <p className="mb-1 text-[11px] text-slate-300">
                      Macros per serving
                    </p>
                    <p className="text-lg font-semibold text[#D8F3DC]">
                      440 kcal
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      32g protein • 48g carbs • 14g fats
                    </p>
                  </div>
                  <div className="rounded-xl border border.white/14 bg.black/45 p-3">
                    <p className="mb-1 text-[11px] text-slate-300">
                      Shopping impact
                    </p>
                    <p className="text-lg font-semibold text[#FF7043]">
                      −28%
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      Avg. food waste reduction for weekly users.
                    </p>
                  </div>
                </div>

                {/* Quick action button inside card */}
                <button
                  onClick={handleStartScan}
                  className="mt-4 w-full rounded-xl bg-gradient.to-r from-emerald-500 to-emerald-600 py-3 text-sm font-semibold text.white shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-500/50"
                >
                  Try it now →
                </button>
              </div>
            </div>

            {/* floating small card */}
            <div className="absolute -top-3 right-0 w-40 rounded-2xl border border.white/18 bg.black/80 p-3 text-[11px] text-slate-100 shadow-xl shadow-black/80 backdrop-blur sm:right-2 lg:-top-12">
              <p className="mb-1 text.[11px] text-slate-300">Smart vision</p>
              <p className="text-sm font-semibold">30+ ingredients</p>
              <p className="mt-1 text.[10px] text-slate-400">
                Recognized from a single mixed‑fridge photo.
              </p>
            </div>

            {/* Another floating card - bottom left */}
            <div className="absolute -bottom-6 -left-4 hidden w-36 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3 text.[11px] text-slate-100 shadow-xl backdrop-blur sm:block lg:-left-12">
              <div className="mb-1 flex items.center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-emerald-400">Live</span>
              </div>
              <p className="text-sm font-semibold">2.4k users</p>
              <p className="mt-1 text.[10px] text-slate-400">
                Cooking right now
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for scan animation */}
      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0;
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            top: 100%;
            opacity: 1;
          }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;