// src/page/Homepage/Features.jsx
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Smart ingredient scanner",
      tag: "Vision AI",
      icon: "📸",
      bullets: [
        "Detect 30+ ingredients from a single photo",
        "Handles real‑world, messy fridge photos",
        "Auto‑builds ingredient list with quantities",
        "Works with any camera or image upload",
      ],
    },
    {
      title: "Diet & allergy aware",
      tag: "Personalization",
      icon: "🧬",
      bullets: [
        "Store vegan, keto, halal & custom diets",
        "Block recipes containing your allergens",
        "Suggest smart ingredient swaps",
        "Keep preferences synced across devices",
      ],
    },
    {
      title: "Guided cook mode",
      tag: "Cookflow",
      icon: "🎧",
      bullets: [
        "Step‑by‑step, voice‑friendly instructions",
        "Hands‑free flow while you cook",
        "Auto‑adjusts steps for servings",
        "Keeps all active timers in one place",
      ],
    },
    {
      title: "Instant macros & planning",
      tag: "Nutrition engine",
      icon: "📊",
      bullets: [
        "Full calories & macros per plate",
        "Clear protein / carb / fat breakdown",
        "Plan your week by nutrition goals",
        "Export a ready‑to‑shop grocery list",
      ],
    },
  ];

  return (
    <section
      id="features"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="mb-8 text-center">
        <p className="text-xs md:text-4xl font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Features
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          More than a recipe app. It&apos;s a kitchen operating system.
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm light:text-slate-300">
          SmartChef AI connects what you have, what you like and what your body
          needs — into one simple, visual workflow.
        </p>
      </div>

      {/* Animated feature cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ feature }) => {
  return (
    <div className="relative mx-auto flex w-full max-w-[320px] flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-500/25 bg-slate-900/80 py-8 px-6 shadow-xl shadow-black/60 transition-all duration-300 group">
      {/* Title */}
      <div className="z-10 text-center uppercase leading-none">
        <p
          className="-mb-2 text-lg font-bold tracking-wider text-gray-400/60"
          style={{
            WebkitTextStroke: "1px rgba(148,163,184,0.6)",
            WebkitTextFillColor: "transparent",
          }}
        >
          {feature.tag}
        </p>
        <p className="z-30 text-xl font-bold tracking-wider text-[#D8F3DC]">
          {feature.title}
        </p>
      </div>

      {/* Icon + tooltip panel */}
      <div className="relative z-20 mt-2 flex w-[190px] flex-col items-center">
        {/* কেন্দ্রের গোল অংশ */}
        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-[#1B4332] via-slate-950 to-[#FF7043] p-1 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
            <span className="text-4xl">{feature.icon}</span>
          </div>
        </div>

        {/* Tooltip panel – কার্ডের ভেতরে, নিচে স্লাইড + fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-10 opacity-0 transition-all duration-400 group-hover:translate-y-20 group-hover:opacity-100">
          <div className="rounded-2xl bg-white/95 p-3 text-left shadow-lg shadow-slate-900/80">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1B4332]">
              Details
            </p>
            <ul className="flex flex-col items-start gap-1.5">
              {feature.bullets.map((item, idx) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold text-slate-800 opacity-0 transition-all duration-400 group-hover:opacity-100"
                  style={{ transitionDelay: `${(idx + 1) * 120}ms` }}
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg
    strokeLinejoin="round"
    strokeLinecap="round"
    strokeWidth={3}
    className="h-3 w-3 stroke-[#1B4332]"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default Features;