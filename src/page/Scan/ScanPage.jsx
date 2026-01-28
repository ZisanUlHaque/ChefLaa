// src/page/Scan/ScanPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const ScanPage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [scanned, setScanned] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // cleanup object URL
  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  const clamp = (val) => Math.min(100, Math.max(0, val));

  const handleFiles = (files) => {
    const file = files?.[0];
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setImageUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
      });
      setScanned(false);
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!dragActive) setDragActive(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleScan = () => {
    if (!imageUrl) return;
    setScanned(true);
  };

  const goToRecipe = () => {
    navigate("/recipe/creamy-garlic-veggie-pasta");
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
        {/* LEFT: copy */}
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Scan & Cook
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Snap your fridge,
            <br />
            <span className="bg-gradient-to-r from-[#FF7043] to-[#FFD1A3] bg-clip-text text-transparent">
              let SmartChef plan dinner.
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Upload a fridge, shelf or cutting‑board photo. SmartChef will detect
            what&apos;s inside and turn it into recipes, macros and a ready‑to‑shop
            list.
          </p>

          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF7043]" />
              <span>Works with messy, real‑world fridge photos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
              <span>
                Macros, calories and servings are auto‑calculated per recipe.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>AI respects your diet & allergy preferences.</span>
            </li>
          </ul>

          {!scanned && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Tip: stand back a little and capture the whole shelf for better
              detection.
            </p>
          )}
        </div>

        {/* RIGHT: upload + results */}
        <div className="space-y-4">
          {/* Upload card */}
          <div
            className={`
              relative flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed
              px-4 text-center transition
              ${
                dragActive
                  ? "border-emerald-400 bg-emerald-500/5"
                  : "border-slate-400/60 bg-slate-950/80"
              }
              shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-sm
            `}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onClick={handleBrowseClick}
          >
            {!imageUrl ? (
              <>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 text-slate-50">
                  📷
                </div>
                <p className="text-sm font-semibold text-slate-100">
                  Drop a photo here, or click to browse
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  JPEG, PNG – ideally showing your fridge or ingredients.
                </p>
              </>
            ) : (
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src={imageUrl}
                  alt="Selected"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-2 left-2 rounded-full bg-black/60 px-3 py-1 text-[11px] text-slate-100">
                  Preview – click “Scan with AI” to analyse
                </div>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={!imageUrl}
              onClick={handleScan}
              className={`
                inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold
                transition shadow-md
                ${
                  imageUrl
                    ? "bg-[#FF7043] text-slate-900 hover:bg-[#ff865f]"
                    : "cursor-not-allowed bg-slate-700 text-slate-400"
                }
              `}
            >
              Scan with AI
            </button>

            <button
              type="button"
              className="rounded-full border border-slate-500/60 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-100 shadow-sm hover:bg-slate-800"
            >
              Open camera (coming soon)
            </button>
          </div>

          {/* Results (dummy for now) */}
          {scanned && (
            <div className="mt-4 space-y-4 rounded-2xl border border-slate-700/70 bg-slate-950/90 p-4 text-xs text-slate-100">
              {/* Ingredients */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Detected ingredients
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[
                    "Tomato",
                    "Spinach",
                    "Chicken",
                    "Pasta",
                    "Garlic",
                    "Parmesan",
                  ].map((ing) => (
                    <span
                      key={ing}
                      className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suggested recipe */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Suggested recipe
                </p>
                <div className="mt-2 rounded-xl border border-slate-700 bg-slate-900/85 p-3 text-[11px]">
                  <p className="text-sm font-semibold text-slate-50">
                    Creamy Garlic Veggie Pasta
                  </p>
                  <p className="mt-1 text-slate-300">
                    18 min · 440 kcal · high‑protein balanced plate.
                  </p>
                  <ul className="mt-2 space-y-1 text-slate-400">
                    <li>• Step‑by‑step cook mode with timers.</li>
                    <li>
                      • Macros per serving: 32g protein / 48g carbs / 14g fats.
                    </li>
                    <li>• Auto‑generated grocery checklist if anything is missing.</li>
                  </ul>

                  <button
                    type="button"
                    onClick={goToRecipe}
                    className="mt-3 rounded-full bg-[#FF7043] px-3 py-1.5 text-[11px] font-semibold text-slate-900 hover:bg-[#ff865f]"
                  >
                    View full recipe
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ScanPage;