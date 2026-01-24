// src/page/Homepage/Pricing.jsx
import React, { useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    role: "For trying SmartChef",
    monthly: 0,
    yearly: 0,
    features: [
      "10 fridge scans / month",
      "Basic ingredient recognition",
      "Standard recipes & macros",
      "Save up to 20 recipes",
    ],
  },
  {
    id: "pro",
    name: "Pro Cook",
    role: "For regular home cooks",
    monthly: 9,
    yearly: 79, // ডিসকাউন্টেড
    highlight: true,
    badge: "Best value",
    features: [
      "Unlimited scans",
      "Advanced nutrition breakdown",
      "Diet filters (vegan, keto, allergies)",
      "Voice‑guided cook mode",
      "Priority recipe generation",
    ],
  },
  {
    id: "family",
    name: "Family",
    role: "For households & roommates",
    monthly: 19,
    yearly: 159,
    features: [
      "Up to 4 family profiles",
      "Shared grocery lists",
      "Per‑person calorie & macro targets",
      "Sync across devices",
    ],
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState("monthly"); // "monthly" | "annual"

  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-20 lg:py-24"
    >
      {/* Gradient header band */}
      <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-[#4F46E5] via-[#EC4899] to-[#F97316] p-[1px] shadow-[0_24px_80px_rgba(15,23,42,0.65)]">
        <div className="rounded-3xl bg-base-100/95 dark:bg-slate-950/95 px-4 pb-10 pt-8 sm:px-8 sm:pt-10">
          {/* Header */}
          <div className="mb-8 text-center text-slate-900 dark:text-slate-50">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-100/90">
              Pricing
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-[2.1rem]">
              Plans that grow with your cooking routine.
            </h2>
            <p className="mt-3 text-sm text-slate-100/90 dark:text-slate-200/90">
              Start free. Upgrade when SmartChef becomes part of how you plan
              meals every week.
            </p>

            {/* Billing toggle */}
            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/10 px-1 py-1 dark:bg-slate-900/40">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    billing === "monthly"
                      ? "bg-white text-slate-900 shadow-sm dark:bg-slate-100"
                      : "text-slate-100/80"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("annual")}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    billing === "annual"
                      ? "bg-white text-slate-900 shadow-sm dark:bg-slate-100"
                      : "text-slate-100/80"
                  }`}
                >
                  Annual
                </button>
                <span className="ml-1 rounded-full bg-amber-300 px-3 py-1 text-[10px] font-semibold text-slate-900">
                  {billing === "annual" ? "Saving applied" : "Save ~20% annually"}
                </span>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billing={billing}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Optional small footer notes */}
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 px-4 text-[11px] text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Accepted payment methods</p>
          <p>Visa · Mastercard · Amex · Apple Pay · Google Pay</p>
        </div>
        <div>
          <p className="font-semibold">7‑day refund window</p>
          <p>Didn&apos;t cook any meals? Cancel within 7 days for a full refund.</p>
        </div>
        <div>
          <p className="font-semibold">Secure checkout</p>
          <p>Your information is protected with 256‑bit SSL encryption.</p>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, billing }) => {
  const isAnnual = billing === "annual";
  const isFree = plan.monthly === 0 && plan.yearly === 0;

  let priceLabel = "Free";
  let subLabel = "Forever free";
  if (!isFree) {
    if (isAnnual) {
      priceLabel = `$${plan.yearly}`;
      subLabel = "Yearly · save around 20%";
    } else {
      priceLabel = `$${plan.monthly}`;
      subLabel = "Per month";
    }
  }

  const highlight = !!plan.highlight;

  return (
    <div
      className={`
        relative flex h-full flex-col rounded-2xl border bg-white text-slate-900
        shadow-[0_14px_40px_rgba(15,23,42,0.15)] transition-transform duration-200
        dark:bg-slate-900 dark:text-slate-50 dark:border-slate-700
        ${highlight ? "md:scale-[1.03] md:-translate-y-1 border-[#FF7043]/80" : ""}
      `}
    >
      {plan.badge && (
        <span className="absolute right-4 top-4 rounded-full bg-[#FF7043] px-3 py-0.5 text-[10px] font-semibold text-slate-900 shadow-sm">
          {plan.badge}
        </span>
      )}

      <div className="border-b border-slate-200 px-5 pb-4 pt-5 dark:border-slate-700">
        <h3 className="text-base font-semibold">{plan.name}</h3>
        <p className="mt-1 text-[12px] text-slate-500 dark:text-slate-400">
          {plan.role}
        </p>

        <div className="mt-4 flex items-baseline gap-1">
          <p className="text-3xl font-extrabold">{priceLabel}</p>
          {!isFree && (
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {isAnnual ? "/year" : "/month"}
            </span>
          )}
        </div>
        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
          {subLabel}
        </p>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <ul className="flex-1 space-y-2 text-[13px] text-slate-700 dark:text-slate-200">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span
                className={`mt-[6px] h-1.5 w-1.5 rounded-full ${
                  highlight ? "bg-[#FF7043]" : "bg-emerald-400"
                }`}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <button
          className={`
            mt-5 w-full rounded-full px-4 py-2 text-sm font-semibold
            transition shadow-md
            ${
              highlight
                ? "bg-[#FF7043] text-[#2D3436] hover:bg-[#ff865f]"
                : "bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
            }
          `}
        >
          {isFree
            ? "Get started free"
            : isAnnual
            ? "Choose annual"
            : "Choose monthly"}
        </button>
      </div>
    </div>
  );
};

export default Pricing;