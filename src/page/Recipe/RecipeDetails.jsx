// src/page/Recipe/RecipeDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router";

const MOCK_RECIPES = {
  "creamy-garlic-veggie-pasta": {
    id: "creamy-garlic-veggie-pasta",
    title: "Creamy Garlic Veggie Pasta",
    time: "18 min",
    servings: 2,
    kcal: 440,
    protein: 32,
    carbs: 48,
    fats: 14,
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80",
    short:
      "A quick, high‑protein veggie pasta built from common fridge ingredients like spinach, tomatoes and garlic.",
    ingredients: [
      "160g pasta (any short shape)",
      "2 cups baby spinach",
      "1 cup cherry tomatoes, halved",
      "2 cloves garlic, minced",
      "60g cream cheese or Greek yogurt",
      "20g grated parmesan",
      "1 tbsp olive oil",
      "Salt & black pepper to taste",
    ],
    steps: [
      "Cook pasta in salted boiling water until al dente. Reserve 1/2 cup pasta water.",
      "Sauté garlic in olive oil until fragrant, then add cherry tomatoes and a pinch of salt.",
      "Stir in spinach until just wilted.",
      "Add cream cheese / yogurt and a splash of pasta water to create a creamy sauce.",
      "Toss in drained pasta and parmesan. Adjust consistency with more pasta water if needed.",
      "Season with pepper, taste and tweak salt. Serve hot with extra parmesan on top.",
    ],
    notes: [
      "Swap spinach for any leafy green you have (kale, chard, etc.).",
      "Use whole‑wheat pasta and extra Greek yogurt for more protein.",
    ],
  },
};

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = MOCK_RECIPES[id] || Object.values(MOCK_RECIPES)[0];

  if (!recipe) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-center text-slate-200">
          Recipe not found.{" "}
          <button
            onClick={() => navigate(-1)}
            className="text-emerald-300 underline"
          >
            Go back
          </button>
        </p>
      </section>
    );
  }

  return (
    <section className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-slate-100"
      >
        <span className="h-4 w-4 rounded-full bg-slate-800 flex items-center justify-center">
          ←
        </span>
        Back to scan
      </button>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* LEFT: image + basic info */}
        <div>
          <div className="overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>

          <div className="mt-5 space-y-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
              {recipe.title}
            </h1>
            <p className="text-sm text-slate-300">{recipe.short}</p>

            <div className="flex flex-wrap gap-3 text-xs text-slate-200">
              <Badge label={`⏱ ${recipe.time}`} />
              <Badge label={`🍽 ${recipe.servings} servings`} />
              <Badge label={`🔥 ${recipe.kcal} kcal / serving`} />
            </div>
          </div>
        </div>

        {/* RIGHT: macros + ingredients + steps */}
        <div className="space-y-6">
          {/* Macros */}
          <div className="rounded-3xl border border-emerald-500/40 bg-slate-950/90 p-4 text-xs text-slate-100 shadow-[0_18px_50px_rgba(0,0,0,0.7)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Macros per serving
            </p>
            <p className="mt-1 text-lg font-bold text-slate-50">
              {recipe.kcal} kcal
            </p>
            <div className="mt-2 flex gap-4 text-[11px] text-slate-300">
              <span>Protein: {recipe.protein}g</span>
              <span>Carbs: {recipe.carbs}g</span>
              <span>Fats: {recipe.fats}g</span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full bg-emerald-400" style={{ width: "45%" }} />
              <div
                className="h-full bg-sky-400"
                style={{ width: "35%" }}
              />
              <div
                className="h-full bg-amber-400"
                style={{ width: "20%" }}
              />
            </div>
          </div>

          {/* Ingredients */}
          <div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-4 text-sm text-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Ingredients
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-4 text-[13px] text-slate-200">
              {recipe.ingredients.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-4 text-sm text-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Step‑by‑step
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-[13px] text-slate-200">
              {recipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          {/* Notes */}
          {recipe.notes && (
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3 text-[12px] text-slate-200">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                SmartChef tips
              </p>
              <ul className="list-disc space-y-1 pl-4">
                {recipe.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Badge = ({ label }) => (
  <span className="rounded-full bg-slate-900/80 px-3 py-1 shadow-sm shadow-black/60">
    {label}
  </span>
);

export default RecipeDetails;