// src/page/Homepage/Hero.jsx (path তোমার প্রজেক্ট অনুযায়ী ঠিক করবে)
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

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

  // Preload background images (fast swap)
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

  return (
<section className="relative overflow-x-hidden overflow-y-visible bg-[#1B4332] text-slate-50 dark:bg-slate-950">      {/* Background slider */}
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

      {/* Navbar on top */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col-reverse items-center gap-10 px-4 pb-16 pt-6 sm:px-6 lg:flex-row lg:items-center lg:pb-24 lg:pt-10">
        {/* Left: text */}
        <div className="w-full space-y-7 lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-sm shadow-black/70 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#FF7043] shadow-[0_0_12px_rgba(255,112,67,0.9)]" />
            <span>New • Turn fridge chaos into clarity</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-50 sm:text-4xl md:text-[4rem]">
            Turn fridge chaos{" "}
            <span className="bg-gradient-to-r from-[#FF7043] via-[#FFD1A3] to-[#D8F3DC] bg-clip-text text-transparent">
              into chef‑level meals.
            </span>
          </h1>

          <p className="max-w-xl text-sm text-slate-100/90 sm:text-base">
            ChefLaa looks at a single photo of your fridge, detects every
            ingredient, and builds curated recipes, macro‑accurate nutrition,
            and a smart grocery plan—so you never have to guess what to cook
            again.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="inline-flex items-center justify-center rounded-full bg-[#FF7043] px-3 py-3 text-sm font-semibold text-[#2D3436] shadow-lg shadow-[#FF7043]/55 transition hover:-translate-y-0.5 hover:bg-[#ff865f] focus:outline-none focus:ring-2 focus:ring-[#FF7043] focus:ring-offset-2 focus:ring-offset-[#1B4332]">
              Start a free scan
            </button>

            <p className="text-xs text-slate-200/85 sm:text-[13px]">
              📷 One photo. Recipes, calories, and a ready‑to‑shop list in under
              10 seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-200/90 sm:text-xs">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D8F3DC]" />
              No credit card or sign‑up required
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
        </div>

        {/* Right: premium card */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end lg:pr-2">
          {/* glow */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center lg:justify-end">
            <div className="h-64 w-64 rounded-full bg-[#FF7043]/25 blur-3xl lg:mr-6" />
          </div>

          <div className="relative w-full max-w-sm lg:mr-4">
            <div className="rounded-[2rem] border border-white/12 bg-black/55 p-[1.5px] shadow-2xl shadow-black/70 backdrop-blur-xl">
              <div className="rounded-[1.8rem] border border-white/10 bg-gradient-to-b from-white/6 via-[#1B4332]/55 to-slate-950/95 p-4">
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
                  <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-medium text-slate-100">
                    AI mode
                  </span>
                </div>

                {/* image */}
                <div className="relative mb-4 overflow-hidden rounded-2xl border border-white/12">
                  <img
                    src={BG_IMAGES[1]}
                    alt="Fresh ingredients being scanned by ChefLaa"
                    className="h-40 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-100">
                    <div>
                      <p className="font-semibold">12 items detected</p>
                      <p className="text-slate-200/85">
                        Perfect for 2 high‑protein dinners
                      </p>
                    </div>
                    <span className="rounded-full bg-[#FF7043] px-3 py-1 text-[10px] font-semibold text-slate-950 shadow-md shadow-black/50">
                      96% match
                    </span>
                  </div>
                </div>

                {/* stats */}
                <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-100">
                  <div className="rounded-xl border border-white/14 bg-black/45 p-3">
                    <p className="mb-1 text-[11px] text-slate-300">
                      Macros per serving
                    </p>
                    <p className="text-lg font-semibold text-[#D8F3DC]">
                      440 kcal
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      32g protein • 48g carbs • 14g fats
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/14 bg-black/45 p-3">
                    <p className="mb-1 text-[11px] text-slate-300">
                      Shopping impact
                    </p>
                    <p className="text-lg font-semibold text-[#FF7043]">
                      −28%
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      Avg. food waste reduction for weekly users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* floating small card */}
            <div className="absolute right-0 -top-3 lg:-top-12 w-40 rounded-2xl border border-white/18 bg-black/80 p-3 text-[11px] text-slate-100 shadow-xl shadow-black/80 backdrop-blur sm:right-2">
              <p className="mb-1 text-[11px] text-slate-300">Smart vision</p>
              <p className="text-sm font-semibold">30+ ingredients</p>
              <p className="mt-1 text-[10px] text-slate-400">
                Recognized from a single mixed‑fridge photo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;