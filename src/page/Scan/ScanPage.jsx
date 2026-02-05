// src/page/Scan/ScanPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const ScanPage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scanProgress, setScanProgress] = useState(0);
  const fileInputRef = useRef(null);
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const { token, isAuthenticated } = useAuth();

  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  // Simulate progress during scan
  useEffect(() => {
    if (loading) {
      setScanProgress(0);
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    } else {
      setScanProgress(0);
    }
  }, [loading]);

  const handleFiles = (files) => {
    const file = files?.[0];
    if (file && file.type.startsWith("image/")) {
      fileRef.current = file;
      const url = URL.createObjectURL(file);
      setImageUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
      });
      setScanned(false);
      setScanResult(null);
      setError("");
    } else {
      setError("Please upload a valid image file (JPEG, PNG)");
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

  const handleScan = async () => {
    if (loading) return;
    if (!fileRef.current) {
      setError("Please upload an image first.");
      return;
    }

    setLoading(true);
    setError("");
    setScanned(false);
    setScanResult(null);

    try {
      const formData = new FormData();
      formData.append("image", fileRef.current);

      const headers = {};
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }

      const response = await fetch("http://localhost:5000/api/scan", {
        method: "POST",
        headers,
        body: formData
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data) {
        throw new Error(data?.error || "Scan failed on server");
      }

      setScanResult(data);
      setScanned(true);
    } catch (err) {
      console.error("Scan error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    setImageUrl(null);
    fileRef.current = null;
    setScanned(false);
    setScanResult(null);
    setError("");
  };

  const goToRecipe = (slug) => {
    navigate(`/recipe/${slug}`);
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* LEFT: Info */}
        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI-Powered Scanning
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Snap your fridge,
            <br />
            <span className="bg-gradient-to-r from-[#FF7043] via-[#FF8A65] to-[#FFD1A3] bg-clip-text text-transparent">
              cook like a chef.
            </span>
          </h1>

          <p className="max-w-lg text-base text-slate-300 sm:text-lg">
            Upload a photo of your ingredients. SmartChef will detect what's inside and 
            generate personalized recipes with complete macros and step-by-step instructions.
          </p>

          {/* Features */}
          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              icon="🎯"
              title="Smart Detection"
              desc="Works with any fridge or ingredient photo"
            />
            <FeatureCard
              icon="📊"
              title="Full Nutrition"
              desc="Calories, protein, carbs & fats calculated"
            />
            <FeatureCard
              icon="⚡"
              title="Real-Time"
              desc="Get recipes in seconds, not minutes"
            />
            <FeatureCard
              icon="💾"
              title="Save Favorites"
              desc={isAuthenticated ? "Logged in - recipes will be saved!" : "Sign in to save recipes"}
            />
          </div>

          {!isAuthenticated && (
            <div className="flex items-center gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
              <span className="text-xl">💡</span>
              <span>
                <strong>Pro tip:</strong>{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="underline hover:text-amber-100"
                >
                  Sign in
                </button>{" "}
                to save your favorite recipes and scan history!
              </span>
            </div>
          )}
        </div>

        {/* RIGHT: Scanner */}
        <div className="space-y-5">
          {/* Upload card */}
          <div
            className={`
              relative flex min-h-[320px] w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed
              px-6 text-center transition-all duration-300
              ${dragActive
                ? "border-emerald-400 bg-emerald-500/10 scale-[1.02]"
                : imageUrl
                  ? "border-slate-600 bg-slate-900/60"
                  : "border-slate-600/80 bg-slate-950/80 hover:border-slate-500 hover:bg-slate-900/70"
              }
              shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-sm
            `}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onClick={!imageUrl ? handleBrowseClick : undefined}
          >
            {!imageUrl ? (
              <div className="space-y-4">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-4xl shadow-lg">
                  📷
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-100">
                    Drop your photo here
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    or click to browse files
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-slate-800/80 px-3 py-1">JPEG</span>
                  <span className="rounded-full bg-slate-800/80 px-3 py-1">PNG</span>
                  <span className="rounded-full bg-slate-800/80 px-3 py-1">WebP</span>
                </div>
              </div>
            ) : (
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src={imageUrl}
                  alt="Selected"
                  className="h-full min-h-[280px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-black/70 px-3 py-1.5 text-xs text-slate-100 backdrop-blur-sm">
                    {scanned ? "✅ Scanned" : "📸 Ready to scan"}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReset();
                    }}
                    className="rounded-full bg-red-500/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm hover:bg-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}

            {/* Loading overlay */}
            {loading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-3xl bg-black/80 backdrop-blur-sm">
                <div className="relative h-20 w-20">
                  <svg className="h-20 w-20 -rotate-90 transform">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      className="text-slate-700"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray={226}
                      strokeDashoffset={226 - (226 * scanProgress) / 100}
                      className="text-emerald-400 transition-all duration-200"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-emerald-400">
                    {Math.round(scanProgress)}%
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium text-slate-100">
                  Analyzing ingredients...
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Detecting food items with AI
                </p>
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

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={!fileRef.current || loading}
              onClick={handleScan}
              className={`
                inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold
                transition-all duration-300 shadow-lg
                ${fileRef.current && !loading
                  ? "bg-gradient-to-r from-[#FF7043] to-[#FF8A65] text-white shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02]"
                  : "cursor-not-allowed bg-slate-800 text-slate-500"
                }
              `}
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Scanning...
                </>
              ) : (
                <>
                  <span>🔍</span>
                  Scan with AI
                </>
              )}
            </button>

            {imageUrl && !loading && (
              <button
                type="button"
                onClick={handleBrowseClick}
                className="rounded-2xl border border-slate-600 bg-slate-900/60 px-5 py-4 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
              >
                Change Image
              </button>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              <span>❌</span>
              {error}
            </div>
          )}

          {/* Results */}
          {scanned && scanResult && (
            <div className="space-y-5 rounded-3xl border border-slate-700/70 bg-slate-950/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              {/* Ingredients */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    🥗 Detected Ingredients
                  </h3>
                  <span className="text-xs text-slate-500">
                    {scanResult.ingredients?.length || 0} items
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {scanResult.ingredients?.map((ing, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-slate-800/80 px-3 py-1.5 text-sm font-medium text-slate-200 shadow-sm"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recipes */}
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  🍽️ Generated Recipes
                </h3>
                <div className="space-y-3">
                  {scanResult.recipes?.map((recipe, i) => (
                    <RecipeCard key={i} recipe={recipe} onView={() => goToRecipe(recipe.slug)} />
                  ))}
                </div>
              </div>

              {/* Processing time */}
              <div className="flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-500">
                <span>Processed in {scanResult.processingTime}</span>
                <button
                  onClick={handleReset}
                  className="text-slate-400 hover:text-slate-200"
                >
                  Scan another image →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Feature card component
const FeatureCard = ({ icon, title, desc }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
    <div className="mb-2 text-2xl">{icon}</div>
    <h3 className="font-semibold text-slate-100">{title}</h3>
    <p className="mt-1 text-xs text-slate-400">{desc}</p>
  </div>
);

// Recipe card component
const RecipeCard = ({ recipe, onView }) => (
  <div className="group rounded-2xl border border-slate-700/60 bg-slate-900/80 p-4 transition hover:border-emerald-500/40 hover:bg-slate-900">
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <h4 className="font-semibold text-slate-100 group-hover:text-emerald-400 transition">
          {recipe.title}
        </h4>
        <p className="mt-1 text-sm text-slate-400 line-clamp-2">
          {recipe.short}
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-slate-800 px-2 py-1 text-slate-300">
            ⏱ {recipe.time}
          </span>
          <span className="rounded-full bg-slate-800 px-2 py-1 text-slate-300">
            🔥 {recipe.kcal} kcal
          </span>
          <span className="rounded-full bg-slate-800 px-2 py-1 text-slate-300">
            {recipe.difficulty}
          </span>
          <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-400">
            {recipe.cuisine}
          </span>
        </div>
      </div>
      <button
        onClick={onView}
        className="shrink-0 rounded-xl bg-[#FF7043] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#ff865f] hover:scale-105"
      >
        View
      </button>
    </div>
  </div>
);

export default ScanPage;