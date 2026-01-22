import React from "react";
import Marquee from "react-fast-marquee";

const techLogos = [
  { name: "React", tag: "UI" },
  { name: "Node.js", tag: "Backend" },
  { name: "MongoDB", tag: "Database" },
  { name: "Tailwind", tag: "Styling" },
  { name: "DaisyUI", tag: "Components" },
  { name: "Gemini", tag: "Vision" },
  { name: "GPT‑4o", tag: "LLM" },
];

const benefitBadges = [
  { icon: "⚡", text: "Scan → recipes in under 10s" },
  { icon: "🥦", text: "Detects 30+ ingredients per photo" },
  { icon: "📊", text: "Macros & calories auto‑calculated" },
  { icon: "🛒", text: "Ready‑to‑shop grocery lists" },
  { icon: "🌱", text: "Diet & allergy‑aware suggestions" },
  { icon: "💸", text: "Reduce food waste & food spend" },
];

const MarqueeSection = () => {
  return (
    <section className="relative py-10 sm:py-12">
      {/* subtle bg strip */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#fffbeb]/70 to-transparent dark:via-slate-900/80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-300">
              Trusted stack · Real impact
            </p>
            <h3 className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
              The tools behind SmartChef and the benefits people feel.
            </h3>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Hover to pause · top row left, bottom row right
          </p>
        </div>

        {/* TOP ROW – tech / brand logos (left) */}
        <Marquee pauseOnHover speed={35} gradient={false} className="py-2">
          <div className="flex items-center gap-4 pr-4">
            {techLogos.map((logo) => (
              <LogoPill key={logo.name} logo={logo} />
            ))}
          </div>
        </Marquee>

        {/* BOTTOM ROW – benefits (right) */}
        <Marquee
          pauseOnHover
          speed={30}
          direction="right"
          gradient={false}
          className="py-2 mt-3"
        >
          <div className="flex items-center gap-4 pr-4">
            {benefitBadges.map((item, idx) => (
              <BenefitPill key={idx} item={item} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

/* ───────── Logo pills with actual SVG icons ───────── */

const LogoPill = ({ logo }) => {
  const Icon = logoIcons[logo.name] || DefaultIcon;

  return (
    <div
      className="
        flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold
        bg-white/95 border-slate-200 text-slate-900
        shadow-sm shadow-slate-200/70
        dark:bg-slate-900/95 dark:border-slate-700 dark:text-slate-100 dark:shadow-black/60
        transition-transform duration-300 hover:-translate-y-1 hover:shadow-md
      "
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/5 dark:bg-slate-900">
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col leading-tight">
        <span>{logo.name}</span>
        <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400">
          {logo.tag}
        </span>
      </div>
    </div>
  );
};

const BenefitPill = ({ item }) => {
  return (
    <div
      className="
        inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-medium
        bg-[#1B4332]/5 border-emerald-200 text-slate-800
        shadow-sm shadow-emerald-100
        dark:bg-slate-900/85 dark:border-slate-700 dark:text-slate-100 dark:shadow-black/60
        transition-transform duration-300 hover:-translate-y-1 hover:shadow-md
      "
    >
      <span className="text-sm">{item.icon}</span>
      <span>{item.text}</span>
    </div>
  );
};

/* ───────── SVG logo icons ───────── */

const ReactIcon = (props) => (
  <svg viewBox="0 0 128 128" {...props}>
    <g fill="#61DAFB">
      <circle r="11.4" cy="64" cx="64"></circle>
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"></path>
    </g>
  </svg>
);

const NodeIcon = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path d="M128 10L21 71v114l107 61 107-61V71L128 10z" fill="#3C873A" />
    <path
      d="M128 30l87 49v98l-87 49-87-49V79l87-49z"
      fill="#fff"
      opacity=".1"
    />
    <text
      x="128"
      y="142"
      textAnchor="middle"
      fontSize="52"
      fontWeight="700"
      fill="#fff"
    >
      js
    </text>
  </svg>
);

const MongoIcon = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path
      d="M128 16c-10 31-52 60-52 118 0 40 20 70 52 96 32-26 52-56 52-96 0-58-42-87-52-118z"
      fill="#10B981"
    />
    <path
      d="M128 70v120"
      stroke="#064E3B"
      strokeWidth="10"
      strokeLinecap="round"
    />
  </svg>
);

const TailwindIcon = (props) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path
      d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
      fill="#38BDF8"
    />
  </svg>
);

const DaisyIcon = (props) => (
  <svg viewBox="0 0 64 64" {...props}>
    <circle cx="32" cy="32" r="7" fill="#F97316" />
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * Math.PI) / 4;
      const x = 32 + Math.cos(angle) * 16;
      const y = 32 + Math.sin(angle) * 16;
      return (
        <circle key={i} cx={x} cy={y} r="6" fill="#FACC15" opacity="0.9" />
      );
    })}
  </svg>
);

const GeminiIcon = (props) => (
  <svg viewBox="0 0 64 64" {...props}>
    <defs>
      <linearGradient id="geminiGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#4F46E5" />
        <stop offset="1" stopColor="#22D3EE" />
      </linearGradient>
    </defs>
    <rect
      x="10"
      y="14"
      width="44"
      height="10"
      rx="5"
      fill="url(#geminiGrad)"
    />
    <rect
      x="10"
      y="40"
      width="44"
      height="10"
      rx="5"
      fill="url(#geminiGrad)"
    />
  </svg>
);

const GPTIcon = (props) => (
  <svg viewBox="0 0 64 64" {...props}>
    <circle cx="32" cy="32" r="18" fill="#111827" />
    {Array.from({ length: 3 }).map((_, i) => {
      const angle = (i * 2 * Math.PI) / 3;
      const x = 32 + Math.cos(angle) * 9;
      const y = 32 + Math.sin(angle) * 9;
      return <circle key={i} cx={x} cy={y} r="6" fill="#22C55E" />;
    })}
  </svg>
);

const DefaultIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="#0F172A"
      stroke="#38BDF8"
      strokeWidth="2"
    />
  </svg>
);

const logoIcons = {
  React: ReactIcon,
  "Node.js": NodeIcon,
  MongoDB: MongoIcon,
  Tailwind: TailwindIcon,
  DaisyUI: DaisyIcon,
  Gemini: GeminiIcon,
  "GPT‑4o": GPTIcon,
};

export default MarqueeSection;