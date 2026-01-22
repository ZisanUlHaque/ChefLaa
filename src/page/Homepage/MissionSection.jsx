import React, { useEffect, useState } from "react";
import recipe from "../../assets/recipe.mp4";

/* ---------- Counter (0 → target) ---------- */
const Counter = ({ target, duration = 1600, formatter }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = progress * target;
      setValue(current);
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  const display = formatter
    ? formatter(value)
    : Math.round(value).toLocaleString();
  return <>{display}</>;
};

/* ---------- Main Section ---------- */

const MissionSection = () => {
  return (
    <section className="relative flex w-full flex-col overflow-hidden py-10 sm:py-14">
      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6">
        {/* Top: Mission copy + video */}
        <div className="grid flex-grow grid-cols-1 items-center gap-8 py-4 md:py-8 lg:grid-cols-2">
          {/* LEFT: text */}
          <div className="text-left">
            <h1 className="text-3xl font-extrabold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl md:text-5xl">
              Our Mission
              <br />
              Access to{" "}
              <span className="bg-gradient-to-r from-[#FF7043] to-[#FFD1A3] bg-clip-text text-transparent">
                Better Meals.
              </span>
            </h1>
            <p className="mt-4 max-w-lg text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              SmartChef uses AI to turn whatever is in your fridge into
              balanced, cookable meals. Less waste, more variety, and recipes
              that actually match your life and your goals.
            </p>
          </div>

          {/* RIGHT: video instead of picture */}
          <div className="relative flex w-full items-center justify-center py-4 md:py-0">
            <div className="h-48 w-72 transform-gpu rounded-3xl  sm:h-64 sm:w-80 md:h-90 md:w-[42rem]">
              <video
                className="h-full w-full rounded-2xl object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={recipe} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Bottom: stats cards with counting numbers */}
        <div className="w-full pb-4 md:pb-8">
          <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCard
              label="Smart fridge scans"
              formatter={(v) => `${Math.round(v)}k+`}
              target={10} // 10k+
              icon={
                <svg
                  viewBox="0 0 448 512"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M64 160l64 0 0-64-64 0 0 64zM0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80zM64 416l64 0 0-64-64 0 0 64zM0 336c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zM320 96l0 64 64 0 0-64-64 0zM304 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM288 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm96 32c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-32 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z"
                  />
                </svg>
              }
            />

            {/* 2. Unique ingredients seen */}
            <StatCard
              label="Unique ingredients seen"
              target={3000}
              formatter={(v) => `${Math.round(v).toLocaleString()}+`}
              icon={
                <svg
                  viewBox="0 0 512 512"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M357.57 223.94a79.48 79.48 0 0 0 56.58-23.44l77-76.95c6.09-6.09 6.65-16 .85-22.39a16 16 0 0 0-23.17-.56l-68.63 68.58a12.29 12.29 0 0 1-17.37 0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 440.27 56a16.71 16.71 0 0 0-11.81 4.9l-68.27 68.26a12.29 12.29 0 0 1-17.37 0c-4.78-4.78-4.53-12.86.25-17.64l68.33-68.31a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 400.26 16a16.73 16.73 0 0 0-11.81 4.9L311.5 97.85a79.49 79.49 0 0 0-23.44 56.59v8.23a16 16 0 0 1-4.69 11.33l-35.61 35.62a4 4 0 0 1-5.66 0L68.82 36.33a16 16 0 0 0-22.58-.06C31.09 51.28 23 72.47 23 97.54c-.1 41.4 21.66 89 56.79 124.08l85.45 85.45A64.79 64.79 0 0 0 211 326a64 64 0 0 0 16.21-2.08 16.24 16.24 0 0 1 4.07-.53 15.93 15.93 0 0 1 10.83 4.25l11.39 10.52a16.12 16.12 0 0 1 4.6 11.23v5.54a47.73 47.73 0 0 0 13.77 33.65l90.05 91.57.09.1a53.29 53.29 0 0 0 75.36-75.37L302.39 269.9a4 4 0 0 1 0-5.66L338 228.63a16 16 0 0 1 11.32-4.69z"
                  />
                </svg>
              }
            />

            {/* 3. Personalised recipes served */}
            <StatCard
              label="Personalised recipes served"
              target={600}
              formatter={(v) => `${Math.round(v).toLocaleString()}+`}
              icon={
                <svg
                  viewBox="0 0 512 512"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M108.69 320a23.87 23.87 0 0 1 17 7l15.51 15.51a4 4 0 0 0 5.66 0L162.34 327a23.87 23.87 0 0 1 17-7h196.58a8 8 0 0 0 8.08-7.92V312a40.07 40.07 0 0 0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0 0 16 312a8 8 0 0 0 8 8zm77.25 32a8 8 0 0 0-5.66 2.34l-22.14 22.15a20 20 0 0 1-28.28 0l-22.14-22.15a8 8 0 0 0-5.66-2.34h-69.4a15.93 15.93 0 0 0-15.76 13.17A65.22 65.22 0 0 0 16 376c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 26.13-.47 47.26-25.39 47.26-56a65.22 65.22 0 0 0-.9-10.83A15.93 15.93 0 0 0 367.34 352z"
                  />
                </svg>
              }
            />

            {/* 4. Food waste reduction */}
            <StatCard
              label="Avg. food‑waste reduction"
              target={28}
              formatter={(v) => `${Math.round(v)}%`}
              icon={
                <svg
                  viewBox="0 0 20 20"
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, target, formatter, icon }) => (
  <div className="flex w-full flex-col items-center justify-center gap-3 rounded-xl bg-white/90 p-3 text-center text-slate-900 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-900/90 dark:text-slate-100 sm:gap-4 sm:p-4">
    <div className="flex w-full flex-row items-center justify-center gap-3">
      <div className="flex-shrink-0 rounded-full bg-orange-100 p-2 text-orange-500 sm:p-3">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="text-xl font-extrabold text-slate-800 dark:text-slate-50 sm:text-2xl">
          <Counter target={target} formatter={formatter} />
        </h3>
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 sm:text-sm">
          {label}
        </span>
      </div>
    </div>
  </div>
);

export default MissionSection;