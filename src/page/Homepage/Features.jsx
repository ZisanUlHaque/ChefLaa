// src/page/Homepage/Features.jsx
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Smart ingredient scanner",
      desc: "AI sees what’s in your fridge from a single image and auto‑builds an ingredient list with quantities.",
      tag: "Vision AI",
    },
    {
      title: "Personalized recipes",
      desc: "Tell us if you’re vegan, keto or have allergies; every suggested recipe respects your preferences.",
      tag: "Diet-aware",
    },
    {
      title: "Guided cook mode",
      desc: "Hands‑free, step‑by‑step instructions with optional voice read‑out while you cook.",
      tag: "Cookflow",
    },
    {
      title: "Instant nutrition & macros",
      desc: "Precise calories, macros and portions per serving, including swaps to hit your targets.",
      tag: "Nutrition engine",
    },
  ];

  return (
    <section
      id="features"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        {/* Left copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Features
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Everything you need to plan, cook and track in one place.
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl">
            SmartChef AI combines ingredient detection, recipe planning and
            nutrition analytics so you can move from “What can I cook?” to
            “What should I cook for my goals?” in seconds.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF7043]" />
              <span>
                Works from messy, real‑world fridge photos – not studio shots.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D8F3DC]" />
              <span>
                Under 10 seconds from upload to ready‑to‑use recipes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>
                Optimized for mobile so you can plan while standing at the
                fridge.
              </span>
            </li>
          </ul>
        </div>

        {/* Right feature cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-emerald-400/15 bg-slate-900/80 p-4 shadow-lg shadow-black/50 backdrop-blur"
            >
              <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-200">
                {f.tag}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-slate-50 group-hover:text-emerald-100">
                {f.title}
              </h3>
              <p className="mt-1.5 text-[13px] text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;