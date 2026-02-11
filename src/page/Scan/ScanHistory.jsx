// src/page/User/ScanHistory.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const ScanHistory = () => {
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedScan, setSelectedScan] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const fetchHistory = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/scan-history", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setHistory(data.history || []);
        }
      } catch (err) {
        console.error("Fetch history error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [isAuthenticated, token, navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined
    });
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const copyIngredients = (ingredients) => {
    const text = ingredients.join(", ");
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  if (loading) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-400 border-t-transparent" />
          <p className="text-slate-400">Loading scan history...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Link to="/" className="text-slate-500 hover:text-slate-300">
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-300">Scan History</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-100">📷 Scan History</h1>
            <p className="mt-2 text-slate-400">
              View all your previous ingredient scans
            </p>
          </div>
          
          {history.length > 0 && (
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2 text-center">
                <p className="text-2xl font-bold text-emerald-400">{history.length}</p>
                <p className="text-xs text-slate-500">Total Scans</p>
              </div>
              <Link
                to="/scan"
                className="rounded-xl bg-[#FF7043] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-[#ff865f]"
              >
                + New Scan
              </Link>
            </div>
          )}
        </div>

        {/* Empty state */}
        {history.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-700/50 bg-slate-900/50 py-20 text-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-800">
              <span className="text-5xl">📸</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-200">
              No scans yet
            </h2>
            <p className="mt-2 max-w-sm text-sm text-slate-400">
              Start by scanning your fridge or ingredients. Each scan will be saved here for future reference.
            </p>
            <Link
              to="/scan"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#FF7043] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-[#ff865f]"
            >
              <span>📷</span>
              Start Your First Scan
            </Link>
          </div>
        ) : (
          /* History list */
          <div className="space-y-4">
            {history.map((scan, index) => (
              <div
                key={scan._id || index}
                className={`
                  group rounded-2xl border transition-all duration-300
                  ${selectedScan === index
                    ? "border-emerald-500/50 bg-emerald-500/5"
                    : "border-slate-700/50 bg-slate-900/60 hover:border-slate-600"
                  }
                `}
              >
                {/* Main row */}
                <div
                  onClick={() => setSelectedScan(selectedScan === index ? null : index)}
                  className="flex cursor-pointer items-center gap-4 p-4 sm:p-5"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-slate-800 text-2xl">
                    📷
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate font-semibold text-slate-100">
                        {scan.fileName || `Scan #${history.length - index}`}
                      </h3>
                      <span className="shrink-0 rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
                        {scan.ingredients?.length || 0} items
                      </span>
                    </div>
                    
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-3.5 w-3.5" />
                        {formatDate(scan.createdAt)}
                      </span>
                      {scan.fileSize && (
                        <span className="flex items-center gap-1">
                          <FileIcon className="h-3.5 w-3.5" />
                          {formatFileSize(scan.fileSize)}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <RecipeIcon className="h-3.5 w-3.5" />
                        {scan.recipeCount || 0} recipes generated
                      </span>
                    </div>

                    {/* Ingredients preview */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {scan.ingredients?.slice(0, 5).map((ing, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-300"
                        >
                          {ing}
                        </span>
                      ))}
                      {scan.ingredients?.length > 5 && (
                        <span className="rounded-full bg-slate-700 px-2 py-0.5 text-xs text-slate-400">
                          +{scan.ingredients.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expand arrow */}
                  <div className="shrink-0">
                    <svg
                      className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
                        selectedScan === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expanded details */}
                {selectedScan === index && (
                  <div className="border-t border-slate-700/50 px-5 pb-5">
                    <div className="pt-4">
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        All Detected Ingredients
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {scan.ingredients?.map((ing, i) => (
                          <span
                            key={i}
                            className="rounded-xl bg-slate-800/80 px-3 py-1.5 text-sm text-slate-200"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        to="/scan"
                        className="rounded-xl bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-400 transition hover:bg-emerald-500/30"
                      >
                        🔄 Scan Similar
                      </Link>
                      <button 
                        onClick={() => copyIngredients(scan.ingredients || [])}
                        className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700"
                      >
                        📋 Copy Ingredients
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Stats summary */}
        {history.length > 0 && (
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <StatsCard
              icon="📊"
              label="Total Ingredients Found"
              value={history.reduce((acc, s) => acc + (s.ingredients?.length || 0), 0)}
              color="emerald"
            />
            <StatsCard
              icon="🍳"
              label="Recipes Generated"
              value={history.reduce((acc, s) => acc + (s.recipeCount || 0), 0)}
              color="orange"
            />
            <StatsCard
              icon="📅"
              label="Days Active"
              value={calculateActiveDays(history)}
              color="blue"
            />
          </div>
        )}
      </div>
    </section>
  );
};

// Stats card component
const StatsCard = ({ icon, label, value, color }) => {
  const colorClasses = {
    emerald: "from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/30",
    orange: "from-orange-500/20 to-orange-500/5 text-orange-400 border-orange-500/30",
    blue: "from-blue-500/20 to-blue-500/5 text-blue-400 border-blue-500/30"
  };

  return (
    <div className={`rounded-2xl border bg-gradient-to-br p-5 ${colorClasses[color]}`}>
      <span className="text-2xl">{icon}</span>
      <p className="mt-2 text-3xl font-bold text-slate-100">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  );
};

// Calculate active days
const calculateActiveDays = (history) => {
  if (!history.length) return 0;
  const dates = new Set(
    history.map((s) => new Date(s.createdAt).toDateString())
  );
  return dates.size;
};

// Icons
const ClockIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FileIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const RecipeIcon = (props) => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);

export default ScanHistory;