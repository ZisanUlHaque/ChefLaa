import React, { useRef, useState } from "react";

const IngredientsCompareSection = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50); // percentage
  const [dragging, setDragging] = useState(false);

  const clamp = (val) => Math.min(100, Math.max(0, val));

  const updatePositionFromClientX = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clamp(percent));
  };

  const handlePointerDown = (e) => {
    setDragging(true);
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const handleRangeChange = (e) => {
    setPosition(Number(e.target.value));
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* LEFT: text */}
        <div>
          <h2 className="mb-6 text-3xl font-extrabold leading-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
            Nothing But
            <br />
            The{" "}
            <span className="bg-gradient-to-r from-[#FF7043] to-[#FFD1A3] bg-clip-text text-transparent">
              Best Ingredients
            </span>
          </h2>

          <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            Great cooking starts with what&apos;s in front of you. SmartChef
            helps you turn fresh ingredients into plated meals – not random
            guesses.
          </p>

          <ul className="mb-8 space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF7043]" />
              <span>Slide to compare raw ingredients with finished dishes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
              <span>Perfect for fridge, shelf or cutting‑board shots.</span>
            </li>
          </ul>

          {/* optional range input for keyboard */}
          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span>Raw</span>
            <input
              type="range"
              min={0}
              max={100}
              value={position}
              onChange={handleRangeChange}
              className="h-1 w-40 cursor-pointer accent-[#FF7043]"
            />
            <span>Plated</span>
          </div>
        </div>

        {/* RIGHT: custom image compare */}
        <div
          ref={containerRef}
          className="
            relative h-[280px] w-full overflow-hidden rounded-2xl border
            border-slate-700/60 bg-slate-950/90 shadow-[0_24px_80px_rgba(0,0,0,0.7)]
            touch-none select-none
          "
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* Right image: plated / final */}
          <img
            src="https://i.ibb.co/35t0MVGY/mohanad-karawanchy-A8sp-G1-Yh2-Q4-unsplash.jpg"
            alt="Plated meal"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Left image: raw ingredients (overlay, clipped by width) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src="https://i.ibb.co/WvKmnHr3/pexels-cottonbro-6969266.jpg"
              alt="Raw ingredients"
              className="h-full w-full object-cover"
            />
          </div>

          {/* slider handle + vertical line */}
          <div
            className="absolute top-0 bottom-0 flex w-0 items-center justify-center"
            style={{ left: `${position}%` }}
          >
            {/* vertical line */}
            <div className="h-full w-[2px] bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.4)]" />
            {/* knob */}
            <div
              className="
                -ml-[20px] flex h-10 w-10 items-center justify-center rounded-full
                border-2 border-white bg-slate-900/90 text-white shadow-[0_3px_10px_rgba(0,0,0,0.6)]
              "
            >
              <div className="mr-1 h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-white" />
              <div className="ml-1 h-0 w-0 border-y-[6px] border-r-[8px] border-y-transparent border-r-white" />
            </div>
          </div>

          {/* labels */}
          <span className="absolute left-4 top-4 rounded bg-white/80 px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF7043]">
            Raw ingredients
          </span>
          <span className="absolute right-4 top-4 rounded bg-white/80 px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1B4332]">
            Plated outcome
          </span>
        </div>
      </div>
    </section>
  );
};

export default IngredientsCompareSection;