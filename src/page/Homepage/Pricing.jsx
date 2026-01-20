// src/page/Homepage/Pricing.jsx
import React from "react";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
          Pricing
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Start free. Upgrade when your kitchen routine demands more.
        </h2>
        <p className="mt-3 text-sm text-slate-300 max-w-2xl mx-auto">
          No credit card required to get started. Scan, test and cook with AI
          before you commit.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <PricingCard
          name="Starter"
          price="$0"
          subtitle="Perfect for trying SmartChef AI."
          highlight={false}
          features={[
            "10 fridge scans / month",
            "Basic ingredient recognition",
            "Standard recipes & macros",
            "Save up to 20 recipes",
          ]}
        />

        <PricingCard
          name="Pro Cook"
          price="$9/mo"
          subtitle="For people who cook several times a week."
          highlight
          badge="Most popular"
          features={[
            "Unlimited scans",
            "Advanced nutrition breakdown",
            "Diet filters (vegan, keto, allergies)",
            "Voice‑guided cook mode",
            "Priority recipe generation",
          ]}
        />

        <PricingCard
          name="Family"
          price="$19/mo"
          subtitle="Plan for everyone at home."
          highlight={false}
          features={[
            "Up to 4 family profiles",
            "Shared grocery lists",
            "Per‑person calorie & macro targets",
            "Sync across devices",
          ]}
        />
      </div>
    </section>
  );
};

const PricingCard = ({ name, price, subtitle, features, highlight, badge }) => (
  <div
    className={`relative flex h-full flex-col rounded-2xl border bg-slate-900/80 p-5 shadow-xl backdrop-blur ${
      highlight
        ? "border-[#FF7043]/70 shadow-[#FF7043]/40"
        : "border-emerald-500/20 shadow-black/50"
    }`}
  >
    {badge && (
      <span className="absolute right-4 top-4 rounded-full bg-[#FF7043] px-2 py-0.5 text-[11px] font-semibold text-slate-900">
        {badge}
      </span>
    )}
    <h3 className="text-base font-semibold text-slate-50">{name}</h3>
    <p className="mt-1 text-[13px] text-slate-300">{subtitle}</p>

    <p className="mt-4 text-3xl font-bold text-slate-50">
      {price}
      <span className="text-sm font-normal text-slate-300">
        {price !== "$0" && " · billed monthly"}
      </span>
    </p>

    <ul className="mt-4 flex-1 space-y-2 text-[13px] text-slate-200">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>{f}</span>
        </li>
      ))}
    </ul>

    <button
      className={`mt-5 w-full rounded-full px-4 py-2 text-sm font-semibold ${
        highlight
          ? "bg-[#FF7043] text-[#2D3436] hover:bg-[#ff865f]"
          : "bg-slate-800 text-slate-100 hover:bg-slate-700"
      } transition shadow-md`}
    >
      {price === "$0" ? "Get started free" : "Start 7‑day trial"}
    </button>
  </div>
);

export default Pricing;