// src/page/Homepage/WhyChooseUs.jsx
import React from "react";

const reasons = [
  {
    id: "01",
    title: "No more guessing",
    img: "https://i.ibb.co/1fb7QG5v/4cafab2f024b8e1cf1f89a6b3abfaf4f.jpg",
    body: [
      "SmartChef looks at your fridge and suggests real recipes, not random ideas.",
      "One scan replaces endless scrolling for “What do I cook tonight?”.",
    ],
  },
  {
    id: "02",
    title: "Diet‑friendly by default",
    img: "https://i.ibb.co/gZ9Y5YHd/dd6dfd21886fcf1b858b83d08bcafe0a.jpg",
    body: [
      "Set your diet, macros and allergies once – every suggestion respects them.",
      "Vegan, keto or halal, SmartChef keeps your preferences baked in.",
    ],
  },
  {
    id: "03",
    title: "Time & money saver",
    img: "https://i.ibb.co/B24ytkwK/882d0c89391e016f1c74b399aebd20b0.jpg",
    body: [
      "Plans meals around what you already have, so you waste less food.",
      "Most users save 2+ hours of planning and cut food waste by ~28%.",
    ],
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="mb-3 flex items-center justify-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          Why choose SmartChef?
        </h2>
        <p className="mt-3 mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          From ingredient detection to diet‑aware recipes, SmartChef packs
          everything you need to cook better with what you already own.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((item) => (
          <article
            key={item.id}
            className="
              group flex h-full flex-col rounded-3xl bg-white text-slate-900
              shadow-[0_18px_50px_rgba(15,23,42,0.12)]
              px-6 py-6
              transition-transform duration-300 hover:-translate-y-1
              dark:bg-slate-900 dark:text-slate-50 dark:shadow-black/60
            "
          >
            {/* illustration */}
            <div className="mb-4 flex justify-center">
              <div
                className="
                  relative h-40 w-40 sm:h-36 sm:w-36
                  overflow-hidden rounded-2xl bg-slate-50 shadow-sm
                  dark:bg-slate-800
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* number + title */}
            <p className="text-sm font-semibold">
              <span className="mr-1 text-emerald-500">{item.id}</span>
              <span>{item.title}</span>
            </p>

            {/* body text */}
            <div className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {item.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;