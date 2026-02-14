// src/page/Recipe/RecipeDetails.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../../context/AuthContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token, isAuthenticated } = useAuth();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`https://chef-laa-server.vercel.app/api/recipes/${id}`);
        const data = await res.json().catch(() => null);

        if (!res.ok || !data) {
          throw new Error(data?.error || "Recipe not found");
        }

        setRecipe(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleSave = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("https://chef-laa-server.vercel.app/api/saved-recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ recipeSlug: recipe.slug })
      });

      if (res.ok) {
        setSaved(true);
      }
    } catch (err) {
      console.error("Save error:", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-400 border-t-transparent" />
          <p className="text-slate-300">Loading recipe...</p>
        </div>
      </section>
    );
  }

  if (error || !recipe) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4">
        <div className="text-6xl">😕</div>
        <h2 className="text-2xl font-bold text-slate-100">Recipe Not Found</h2>
        <p className="text-slate-400">{error || "The recipe you're looking for doesn't exist."}</p>
        <button
          onClick={() => navigate(-1)}
          className="rounded-xl bg-slate-800 px-6 py-3 text-sm font-medium text-slate-200 hover:bg-slate-700"
        >
          ← Go Back
        </button>
      </section>
    );
  }

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-16">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-slate-200"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 transition hover:bg-slate-700">
          ←
        </span>
        Back to results
      </button>

      {/* Main content */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Left column */}
        <div className="space-y-6">
          {/* Hero image */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
            <img
              src={recipe.image || `https://source.unsplash.com/800x600/?${encodeURIComponent(recipe.title)}`}
              alt={recipe.title}
              className="h-72 w-full object-cover sm:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
                  {recipe.cuisine}
                </span>
                <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs text-slate-200">
                  {recipe.difficulty}
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                {recipe.title}
              </h1>
              <p className="mt-2 text-sm text-slate-300">{recipe.short}</p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4">
            <StatCard icon="⏱" label="Cook Time" value={recipe.time} />
            <StatCard icon="🍽" label="Servings" value={`${recipe.servings} people`} />
            <StatCard icon="📊" label="Difficulty" value={recipe.difficulty} />
          </div>

          {/* Ingredients */}
          <div className="rounded-3xl border border-slate-700/50 bg-slate-950/90 p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-100">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20 text-sm">
                🥗
              </span>
              Ingredients
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {recipe.ingredients?.map((ing, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-slate-900/80 px-4 py-3 text-sm text-slate-200"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Nutrition card */}
          <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-slate-950/90 p-6">
            <h2 className="mb-4 text-lg font-bold text-slate-100">
              Nutrition per Serving
            </h2>
            <div className="mb-4 text-center">
              <span className="text-4xl font-extrabold text-emerald-400">{recipe.kcal}</span>
              <span className="ml-1 text-lg text-slate-400">kcal</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <MacroCircle label="Protein" value={recipe.protein} unit="g" color="from-blue-500 to-blue-600" />
              <MacroCircle label="Carbs" value={recipe.carbs} unit="g" color="from-amber-500 to-amber-600" />
              <MacroCircle label="Fats" value={recipe.fats} unit="g" color="from-pink-500 to-pink-600" />
            </div>
          </div>

          {/* Steps */}
          <div className="rounded-3xl border border-slate-700/50 bg-slate-950/90 p-6">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-100">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/20 text-sm">
                📝
              </span>
              Instructions
            </h2>
            <div className="space-y-3">
              {recipe.steps?.map((step, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`
                    cursor-pointer rounded-xl border p-4 transition
                    ${activeStep === i
                      ? "border-emerald-500/50 bg-emerald-500/10"
                      : "border-slate-800 bg-slate-900/50 hover:bg-slate-900/80"
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`
                        flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold
                        ${activeStep === i
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-800 text-slate-400"
                        }
                      `}
                    >
                      {i + 1}
                    </span>
                    <p className={`text-sm ${activeStep === i ? "text-slate-100" : "text-slate-400"}`}>
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          {recipe.tips?.length > 0 && (
            <div className="rounded-3xl border border-amber-500/30 bg-amber-500/5 p-6">
              <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-400">
                💡 Chef's Tips
              </h2>
              <ul className="space-y-2">
                {recipe.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={saved || saving}
              className={`
                flex-1 rounded-2xl py-4 text-sm font-semibold transition
                ${saved
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                }
              `}
            >
              {saving ? "Saving..." : saved ? "✓ Saved" : "💾 Save Recipe"}
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 rounded-2xl bg-slate-800 py-4 text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
            >
              🖨️ Print
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Stat card component
const StatCard = ({ icon, label, value }) => (
  <div className="rounded-2xl border border-slate-700/50 bg-slate-950/90 p-4 text-center">
    <span className="text-2xl">{icon}</span>
    <p className="mt-1 text-lg font-bold text-slate-100">{value}</p>
    <p className="text-xs text-slate-500">{label}</p>
  </div>
);

// Macro circle component
const MacroCircle = ({ label, value, unit, color }) => (
  <div className="text-center">
    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${color} shadow-lg`}>
      <span className="text-lg font-bold text-white">{value}</span>
    </div>
    <p className="mt-2 text-sm font-medium text-slate-300">{label}</p>
    <p className="text-xs text-slate-500">{value}{unit}</p>
  </div>
);

export default RecipeDetails;