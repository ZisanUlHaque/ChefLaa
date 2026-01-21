// src/page/Homepage/WhyChooseSection.jsx
import React, { useState } from "react";

const testimonials = [
  {
    name: "Nadia Rahman",
    role: "Product designer, busy mom",
    quote:
      "I used to stare at the fridge and order in. Now I snap one photo and have two solid dinner options with macros in under a minute.",
    highlight: "Saved ~2.5 hours/week on meal decisions.",
    ordered: "Goal: Less food waste, more real meals",
    rating: 5,
  },
  {
    name: "Arif Hossain",
    role: "Startup founder, fitness focused",
    quote:
      "SmartChef is the only thing that actually fits my macros to what’s already at home. No more random 4,000 kcal takeout nights.",
    highlight: "Hits protein targets 6 days/week.",
    ordered: "Goal: High‑protein, low‑effort cooking",
    rating: 4,
  },
  {
    name: "Sadia Karim",
    role: "Student living with roommates",
    quote:
      "We just dump a fridge photo in and SmartChef tells us what we can cook together. Super fun, and way cheaper than ordering food.",
    highlight: "Cut shared food spend by ~28%.",
    ordered: "Goal: Cook together without planning",
    rating: 5,
  },
];

const WhyChooseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const handlePrev = () =>
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="relative px-4 py-16 sm:px-6 lg:py-24">
      {/* light panel so it feels different from other dark sections */}
      <div className="mx-auto max-w-7xl rounded-[32px] bg-emerald-200 text-slate-900 shadow-[...] dark:bg-emerald-900 dark:text-slate-50 transition-colors duration-300">
        {" "}
        <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-14">
          {/* LEFT: heading + bullets + controls */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF7043]">
              Why people choose SmartChef
            </p>

            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-[2.3rem]">
              Hear how SmartChef turns{" "}
              <span className="text-[#FF7043]">“What do I cook?”</span> into
              “Dinner&apos;s sorted.”
            </h2>

            <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">
              For most users, the problem isn&apos;t recipes. It&apos;s time,
              decision fatigue and random ingredients. SmartChef fits around all
              three — that&apos;s why people actually stick with it.
            </p>

            <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF7043]" />
                <span>
                  <strong>From fridge chaos to clarity:</strong> one scan
                  transforms a messy shelf into 2–3 concrete meal options.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1B4332]" />
                <span>
                  <strong>Built for real diets:</strong> macros, allergies and
                  culture‑specific needs are first‑class, not an after‑thought.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                <span>
                  <strong>Waste less, spend smarter:</strong> recipes prioritise
                  what you already own before suggesting new items.
                </span>
              </li>
            </ul>

            {/* small stats row */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs">
              <div className="rounded-2xl border border-orange-300/70 bg-white/80 px-4 py-3 shadow-sm shadow-orange-200/70 dark:border-orange-500/60 dark:bg-slate-900/90 dark:text-slate-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF7043]">
                  Average rating
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-50">
                  4.9 / 5.0
                </p>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  From early access testers & weekly users.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-300/70 bg-white/80 px-4 py-3 shadow-sm shadow-emerald-200/70 dark:border-emerald-500/60 dark:bg-slate-900/90 dark:text-slate-100">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
                  Time saved
                </p>
                <p className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-50">
                  2.3 hrs/week
                </p>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  Less planning, less scrolling, more actual cooking.
                </p>
              </div>
            </div>

            {/* Slider controls */}
            <div className="mt-6 flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF7043] text-[#2D3436] shadow-lg shadow-[#FF7043]/40 transition hover:-translate-y-0.5 hover:bg-[#ff8a5a] focus:outline-none"
                aria-label="Previous testimonial"
              >
                <ArrowLeftIcon />
              </button>
              <button
                onClick={handleNext}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF7043] text-[#2D3436] shadow-lg shadow-[#FF7043]/40 transition hover:-translate-y-0.5 hover:bg-[#ff8a5a] focus:outline-none"
                aria-label="Next testimonial"
              >
                <ArrowRightIcon />
              </button>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                {activeIndex + 1} / {testimonials.length} stories
              </p>
            </div>
          </div>

          {/* RIGHT: framed testimonial card */}
          <div className="relative flex justify-center">
            {/* soft shadow behind frame */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-[#f97316]/30 blur-3xl" />
            </div>

            <div className="relative rounded-[32px] bg-[#d9a066] p-[10px] shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
              <div className="h-full w-full rounded-[24px] border-[6px] border-[#f7c598] bg-white px-8 py-8 text-slate-900 sm:px-10 sm:py-10">
                {/* avatar circle (initials) */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-slate-50">
                  <span className="text-xl font-semibold">
                    {current.name.split(" ")[0][0]}
                    {current.name.split(" ")[1][0]}
                  </span>
                </div>

                {/* stars */}
                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      filled={i < current.rating}
                      className="h-4 w-4"
                    />
                  ))}
                </div>

                {/* quote */}
                <p className="mt-4 text-sm italic text-slate-800">
                  “{current.quote}”
                </p>

                {/* highlight */}
                <p className="mt-3 text-[11px] font-semibold text-emerald-700">
                  {current.highlight}
                </p>

                {/* name / role */}
                <div className="mt-5 text-[13px]">
                  <p className="font-semibold text-slate-900">{current.name}</p>
                  <p className="text-slate-500">{current.role}</p>
                  <p className="mt-2 text-[11px] text-slate-400">
                    {current.ordered}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StarIcon = ({ filled, className }) => (
  <svg
    viewBox="0 0 20 20"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1.667l2.392 4.848 5.341.776-3.866 3.77.913 5.328L10 13.917l-4.78 2.472.913-5.328L2.267 7.29l5.341-.776L10 1.667z"
      fill={filled ? "#FACC15" : "none"}
      stroke="#FACC15"
      strokeWidth="1"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 6l-6 6 6 6"
      fill="none"
      stroke="#2D3436"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 6l6 6-6 6"
      fill="none"
      stroke="#2D3436"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default WhyChooseSection;
