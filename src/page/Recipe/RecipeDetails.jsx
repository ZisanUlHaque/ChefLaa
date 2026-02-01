// src/page/Recipe/RecipeDetails.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const RecipeDetails = () => {
  const { id } = useParams(); // slug or id
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`http://localhost:5000/api/recipes/${id}`);

        const data = await res.json().catch(() => null);

        if (!res.ok || !data) {
          throw new Error(data?.error || "Failed to fetch recipe");
        }

        setRecipe(data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <section className="mx-auto flex h-[60vh] max-w-5xl items-center justify-center px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-300 border-t-transparent" />
          <p className="text-center text-slate-200">Loading recipe…</p>
        </div>
      </section>
    );
  }

  if (error || !recipe) {
    return (
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-center text-slate-200">
          {error || "Recipe not found."}{" "}
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
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-slate-100"
      >
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-800">
          ←
        </span>
        Back
      </button>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        {/* LEFT: image + basic info */}
        <div>
          <div className="overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-64 w-full object-cover sm:h-80"
              />
            )}
          </div>

          <div className="mt-5 space-y-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
              {recipe.title}
            </h1>
            {recipe.short && (
              <p className="text-sm text-slate-300">{recipe.short}</p>
            )}

            <div className="flex flex-wrap gap-3 text-xs text-slate-200">
              {recipe.time && <Badge label={`⏱ ${recipe.time}`} />}
              {recipe.servings && (
                <Badge label={`🍽 ${recipe.servings} servings`} />
              )}
              {recipe.kcal && (
                <Badge label={`🔥 ${recipe.kcal} kcal / serving`} />
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: macros + ingredients + steps */}
        <div className="space-y-6">
          {/* Macros */}
          {(recipe.kcal || recipe.protein || recipe.carbs || recipe.fats) && (
            <div className="rounded-3xl border border-emerald-500/40 bg-slate-950/90 p-4 text-xs text-slate-100 shadow-[0_18px_50px_rgba(0,0,0,0.7)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Macros per serving
              </p>
              {recipe.kcal && (
                <p className="mt-1 text-lg font-bold text-slate-50">
                  {recipe.kcal} kcal
                </p>
              )}
              <div className="mt-2 flex flex-wrap gap-4 text-[11px] text-slate-300">
                {recipe.protein && <span>Protein: {recipe.protein}g</span>}
                {recipe.carbs && <span>Carbs: {recipe.carbs}g</span>}
                {recipe.fats && <span>Fats: {recipe.fats}g</span>}
              </div>
            </div>
          )}

          {/* Ingredients */}
          {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 && (
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
          )}

          {/* Steps */}
          {Array.isArray(recipe.steps) && recipe.steps.length > 0 && (
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
          )}

          {/* Notes */}
          {Array.isArray(recipe.notes) && recipe.notes.length > 0 && (
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