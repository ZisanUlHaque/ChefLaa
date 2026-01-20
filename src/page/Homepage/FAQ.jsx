// src/page/Homepage/FAQ.jsx
import React from "react";

const FAQ = () => {
  const faqs = [
    {
      q: "Do I need a special camera to use SmartChef AI?",
      a: "No. Any smartphone or laptop camera works. You can also upload images from your gallery.",
    },
    {
      q: "How accurate is the ingredient detection?",
      a: "In most real‑world tests we correctly identify 30+ ingredients from a single mixed photo. You can always edit the list before generating recipes.",
    },
    {
      q: "Can I use this with my diet or allergies?",
      a: "Yes. Set your dietary preferences and allergy list in settings, and all suggested recipes and grocery lists will respect those rules.",
    },
    {
      q: "What happens to my photos?",
      a: "Your photos are used only to generate results and are not sold or shared. You can enable auto‑deletion after each scan from your privacy settings.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
          FAQ
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Answers to common questions.
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((item, idx) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-emerald-500/20 bg-slate-900/70 p-4 shadow-md shadow-black/50"
            open={idx === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium text-slate-50">
              <span>{item.q}</span>
              <span className="text-lg leading-none text-emerald-300 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-2 text-sm text-slate-300">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;