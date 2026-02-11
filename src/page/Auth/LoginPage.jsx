// src/page/Auth/LoginPage.jsx
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the page user was trying to access
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await login(email, password);
      // Redirect to the page they were trying to access, or home
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="animate-scale-in rounded-3xl border border-slate-700/60 bg-slate-950/90 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.8)] backdrop-blur-sm">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF7043] to-[#FFD1A3] shadow-lg shadow-orange-500/30">
              <span className="text-3xl">🍳</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-50">Welcome back</h1>
            <p className="mt-2 text-sm text-slate-400">
              Sign in to access your recipes and scan history
            </p>
          </div>

          {/* Redirect notice */}
          {from !== "/" && (
            <div className="mb-4 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
              Please login to access that page
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus-ring w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-emerald-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus-ring w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-emerald-400"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="animate-fade-in-up rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-[#FF7043] to-[#ff865f] py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-500/25 transition hover:shadow-orange-500/40 disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-slate-950 px-3 text-slate-500">or continue with</span>
            </div>
          </div>

          {/* Social login (placeholder) */}
          <div className="flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800">
              <GoogleIcon className="h-5 w-5" />
              Google
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800">
              <GithubIcon className="h-5 w-5" />
              GitHub
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-emerald-400 hover:text-emerald-300"
            >
              Create one
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icons
const GoogleIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="currentColor"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="currentColor"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="currentColor"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default LoginPage;