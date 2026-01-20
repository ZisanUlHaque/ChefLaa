// src/page/Homepage/HowItWorks.jsx
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Scan your fridge",
      desc: "Snap or upload a photo of your fridge or countertop – even if it looks messy.",
      icon: "📸",
    },
    {
      title: "AI understands everything",
      desc: "SmartChef detects ingredients, groups them by type, and estimates portions in seconds.",
      icon: "🧠",
    },
    {
      title: "Cook & track",
      desc: "Choose a recipe, follow the guided steps, and see macros update as you cook.",
      icon: "🍽️",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24"
    >
      {/* subtle background blur image */}
      <div
        className="pointer-events-none absolute -right-10 top-10 hidden h-72 w-72 opacity-60 blur-[2px] sm:block"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "999px",
        }}
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left text */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            From “What do I cook?” to a plated meal — in under a minute.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-300">
            SmartChef AI turns whatever you have on hand into a concrete plan.
            Scan your fridge, review the ingredients, and start cooking with
            chef‑curated recipes and clear macros.
          </p>

          <div className="mt-6 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={step.title}
                className="group flex items-start gap-3 rounded-2xl border border-emerald-500/25 bg-slate-900/70 p-4 shadow-md shadow-black/50 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/60"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8F3DC]/10 text-lg">
                  {step.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200/90">
                    Step {idx + 1}
                  </p>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-slate-300">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual card */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#FF7043]/15 via-emerald-500/10 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-slate-950/80 p-4 shadow-2xl shadow-black/70 backdrop-blur-xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200">
              Live demo
            </p>
            <h3 className="mt-1 text-sm font-semibold">
              One photo → ingredients, recipe & macros.
            </h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1604908176997-1251884b08a7?auto=format&fit=crop&w=800&q=80"
                  alt="Fridge ingredients"
                  className="h-40 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-[11px] text-slate-100">
                  <p className="font-semibold">Your fridge scan</p>
                  <p className="text-slate-200/85">
                    12 ingredients detected · 2 recipes suggested
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-white/12 bg-slate-900/80 p-3 text-[12px] text-slate-100">
                <div>
                  <p className="text-[11px] text-slate-300">
                    Suggested recipe
                  </p>
                  <p className="text-sm font-semibold">
                    Roasted veggie power bowl
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    18 min · 440 kcal · high protein
                  </p>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-slate-300">
                  <div>
                    <p className="text-[10px] text-slate-400">Protein</p>
                    <p className="font-semibold text-emerald-300">32 g</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Carbs</p>
                    <p className="font-semibold text-sky-300">48 g</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Fats</p>
                    <p className="font-semibold text-[#FF7043]">14 g</p>
                  </div>
                </div>
                <button className="mt-3 w-full rounded-full bg-[#FF7043] px-3 py-1.5 text-[11px] font-semibold text-[#2D3436] shadow-md shadow-[#FF7043]/50 hover:bg-[#ff865f]">
                  See full cooking steps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;