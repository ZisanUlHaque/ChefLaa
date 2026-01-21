// src/page/Homepage/FAQ.jsx
import React from "react";

const FAQ = () => {
  const faqs = [
    {
      q: "Do I need a special camera to use SmartChef AI?",
      a: "No. Any smartphone or laptop camera works. You can also upload images from your gallery.",
      tag: "Devices",
    },
    {
      q: "How accurate is the ingredient detection?",
      a: "In most real‑world tests we correctly identify 30+ ingredients from a single mixed photo. You can always edit the list before generating recipes.",
      tag: "Detection",
    },
    {
      q: "Can I use this with my diet or allergies?",
      a: "Yes. Set your dietary preferences and allergy list in settings, and all suggested recipes and grocery lists will respect those rules.",
      tag: "Diet & allergies",
    },
    {
      q: "What happens to my photos?",
      a: "Your photos are used only to generate results and are not sold or shared. You can enable auto‑deletion after each scan from your privacy settings.",
      tag: "Privacy",
    },
  ];

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.3fr] lg:items-start">
        {/* Left: summary + CTA */}
        <div className="space-y-5 rounded-3xl border border-emerald-500/25 bg-slate-950/80 p-6 shadow-xl shadow-black/70 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Questions while you cook?
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Answers, privacy and{" "}
            <span className="bg-gradient-to-r from-[#FF7043] via-[#FFD1A3] to-[#D8F3DC] bg-clip-text text-transparent">
              how SmartChef thinks.
            </span>
          </h2>

          <p className="text-sm text-slate-300">
            From camera support to diet preferences and privacy, here&apos;s
            what most people ask before they make SmartChef part of their
            kitchen routine.
          </p>

          <div className="grid gap-3 text-xs text-slate-200 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Avg. response time
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-50">
                &lt; 2 min
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                For most support chats and bug reports.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Built for real fridges
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-50">
                30+ items
              </p>
              <p className="mt-1 text-[11px] text-slate-400">
                Detected from a single mixed photo on average.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <p className="font-semibold text-slate-100">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <p>
              Drop us a message and we&apos;ll help you decide how to use
              SmartChef in your own workflow.
            </p>
          </div>

          <button className="mt-1 inline-flex items-center justify-center rounded-full bg-[#FF7043] px-5 py-2 text-xs font-semibold text-[#2D3436] shadow-md shadow-[#FF7043]/50 transition hover:-translate-y-0.5 hover:bg-[#ff865f]">
            Open support chat
          </button>
        </div>

        {/* Right: accordion */}
        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <details
              key={item.q}
              className="
    group relative overflow-hidden rounded-2xl border p-4
    bg-white/95 border-emerald-200 shadow-md shadow-slate-200/80
    dark:bg-slate-900/80 dark:border-emerald-500/25 dark:shadow-black/60
    transition-all duration-300 hover:border-emerald-400/80
  "
              open={idx === 0}
            >
              {/* glow background on open */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-open:opacity-100 bg-gradient-to-r from-emerald-500/10 via-transparent to-[#FF7043]/10" />

              <summary className="relative flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium light:text-slate-50">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] font-semibold text-emerald-200">
                    {idx + 1}
                  </span>
                  <span>{item.q}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-200 sm:inline-flex">
                    {item.tag}
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400/70 bg-slate-900/80 text-lg leading-none text-emerald-300 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>

              <div className="relative mt-2 space-y-2 text-sm light:text-slate-300">
                <p>{item.a}</p>

                {/* ছোট extra info / tip */}
                {idx === 0 && (
                  <p className="text-[11px] text-slate-400">
                    Tip: for best results, keep the door open for 2–3 seconds,
                    step back a little and capture the whole shelf.
                  </p>
                )}
                {idx === 3 && (
                  <p className="text-[11px] text-slate-400">
                    You can also run SmartChef in a &quot;no‑history&quot; mode
                    where nothing is stored after the session ends.
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
