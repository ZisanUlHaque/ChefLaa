// src/page/User/SavedRecipes.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const SavedRecipes = () => {
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const fetchSaved = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/saved-recipes", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setRecipes(data.savedRecipes || []);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSaved();
  }, [isAuthenticated, token, navigate]);

  const handleRemove = async (slug) => {
    try {
      await fetch(`http://localhost:5000/api/saved-recipes/${slug}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      setRecipes(recipes.filter(r => r.slug !== slug));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-400 border-t-transparent" />
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-100">💾 Saved Recipes</h1>
        <p className="mt-2 text-slate-400">Your favorite recipes, all in one place</p>
      </div>

      {recipes.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-700/50 bg-slate-950/80 py-20 text-center">
          <span className="text-6xl">📭</span>
          <h2 className="mt-4 text-xl font-semibold text-slate-200">No saved recipes yet</h2>
          <p className="mt-2 text-sm text-slate-400">Start scanning to discover delicious recipes!</p>
          <Link
            to="/scan"
            className="mt-6 rounded-xl bg-[#FF7043] px-6 py-3 text-sm font-semibold text-white"
          >
            Start Scanning
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <div
              key={recipe.slug}
              className="group overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/80 transition hover:border-emerald-500/40"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image || `https://source.unsplash.com/400x300/?${recipe.title}`}
                  alt={recipe.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => handleRemove(recipe.slug)}
                  className="absolute right-3 top-3 rounded-full bg-red-500/80 p-2 text-white opacity-0 transition hover:bg-red-500 group-hover:opacity-100"
                >
                  🗑️
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-100">{recipe.title}</h3>
                <p className="mt-1 text-sm text-slate-400 line-clamp-2">{recipe.short}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                  <span>⏱ {recipe.time}</span>
                  <span>🔥 {recipe.kcal} kcal</span>
                </div>
                <Link
                  to={`/recipe/${recipe.slug}`}
                  className="mt-4 block rounded-xl bg-slate-800 py-2 text-center text-sm font-medium text-slate-200 transition hover:bg-slate-700"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SavedRecipes;