// src/page/Homepage/TechStackSection.jsx
import React from "react";

const TechStackSection = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        {/* Left: copy */}
        <div className="space-y-6">
          <p className="text-xs md:text-4xl font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Under the hood
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Production‑grade AI kitchen stack,{" "}
            <span className="bg-gradient-to-r from-[#FF7043] via-[#FFD1A3] to-[#D8F3DC] bg-clip-text text-transparent">
              not a weekend demo.
            </span>
          </h2>

          <p className="max-w-xl text-sm light:text-slate-300">
            SmartChef AI is wired like a real SaaS product: fast React +
            Tailwind experience on the surface, Node APIs and queues behind the
            scenes, and vision‑ready models that keep scans accurate even when
            the fridge is chaotic.
          </p>

          <div className="grid gap-3 text-sm text-slate-100 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/70 p-3 shadow-sm shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Fast scans
              </p>
              <p className="mt-1 text-[13px] text-slate-200">
                Image + text prompts under{" "}
                <span className="font-semibold text-emerald-300">
                  2.5s median
                </span>{" "}
                with caching and parallel AI calls.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/70 p-3 shadow-sm shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Reliable recipes
              </p>
              <p className="mt-1 text-[13px] text-slate-200">
                Vision models cross‑check ingredients before recipes or macros
                are generated.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/70 p-3 shadow-sm shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Safe by default
              </p>
              <p className="mt-1 text-[13px] text-slate-200">
                Images stay in a secure pipeline with optional{" "}
                <span className="font-semibold text-emerald-300">
                  auto‑delete after scan
                </span>
                .
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-500/25 bg-slate-900/70 p-3 shadow-sm shadow-black/40">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Built to ship
              </p>
              <p className="mt-1 text-[13px] text-slate-200">
                A stack you can extend with auth, billing or analytics without
                starting over.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-slate-300">
            <span className="rounded-full bg-slate-900/70 px-3 py-1">
              React · Tailwind · DaisyUI
            </span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1">
              Node / Express · REST APIs
            </span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1">
              MongoDB / Atlas
            </span>
            <span className="rounded-full bg-slate-900/70 px-3 py-1">
              Gemini / GPT‑4o vision models
            </span>
          </div>
        </div>

        {/* Right: orbit card */}
        <div className="relative flex items-center justify-center">
          {/* Glow + outer rings */}
          <div className="absolute h-80 w-80 rounded-full bg-gradient-to-tr from-[#FF7043]/25 via-[#1B4332]/80 to-transparent blur-3xl tech-orbit-glow" />
          <div className="absolute h-64 w-64 rounded-full border border-emerald-400/25" />
          <div className="absolute h-72 w-72 rounded-full border border-white/5" />

          {/* Orbiting dot */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="orbit-dot h-2 w-2 rounded-full bg-[#FF7043] shadow-[0_0_16px_rgba(255,112,67,0.9)]" />
          </div>

          <div className="profileCard_container relative rounded-full border-2 border-dashed border-gray-400/40 p-10">
            {/* React */}
            <button className="profile_item absolute left-[45px] -top-[4px] cursor-pointer rounded-full border border-gray-400/50 bg-cover p-[2px] transition-all duration-500 hover:scale-95 active:scale-95">
              <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-white p-1 transition-all duration-500">
                <svg viewBox="0 0 128 128">
                  <g fill="#61DAFB">
                    <circle r="11.4" cy="64" cx="64"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8z"></path>
                  </g>
                </svg>
              </span>
            </button>

            {/* Tailwind / CSS */}
            <button className="profile_item absolute right-[45px] -top-[4px] cursor-pointer rounded-full border border-gray-400/50 bg-cover p-[2px] transition-all duration-500 hover:scale-95 active:scale-95">
              <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-white p-1 transition-all duration-500">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                    fill="#00acc1"
                  ></path>
                </svg>
              </span>
            </button>

            {/* Figma / Design */}
            <button className="profile_item absolute -left-4 top-20 cursor-pointer rounded-full border border-gray-400/50 bg-cover p-[2px] transition-all duration-500 hover:scale-95 active:scale-95">
              <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-white p-1 transition-all duration-500">
                <svg viewBox="0 0 128 128">
                  <path
                    d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
                    fill="#0acf83"
                  ></path>
                  <path
                    d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"
                    fill="#a259ff"
                  ></path>
                  <path
                    d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"
                    fill="#f24e1e"
                  ></path>
                  <path
                    d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"
                    fill="#ff7262"
                  ></path>
                  <path
                    d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
                    fill="#1abcfe"
                  ></path>
                </svg>
              </span>
            </button>

            {/* Node / backend */}
            <button className="profile_item absolute -right-4 top-20 cursor-pointer rounded-full border border-gray-400/50 bg-cover p-[2px] transition-all duration-500 hover:scale-95 active:scale-95">
              <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-white p-1 transition-all duration-500">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#0d61a9"
                    d="M24,4C12.97,4,4,12.976,4,24s8.97,20,19.999,20C35.03,44,44,35.024,44,24S35.03,4,24,4z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M24 11l-9 5.2v10.6l9 5.2 9-5.2V16.2z"
                  ></path>
                </svg>
              </span>
            </button>

            {/* DB / storage */}
            <button className="profile_item absolute bottom-8 -left-0 cursor-pointer rounded-full border border-gray-400/50 bg-cover p-[2px] transition-all duration-500 hover:scale-95 active:scale-95">
              <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-white p-1 transition-all duration-500">
                <svg viewBox="0 0 264 264" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#FF2D20"
                    d="M255.855641,59.619717C255.95,59.97,256,60.33,256,60.7V117.27c0,1.48-.79,2.84-2.07,3.58L105.28,262.99c-.73.41-1.63.41-2.37,0L2.07,205.94C.79,205.2,0,203.84,0,202.36V32.66c0-.37.05-.73.14-1.08L51.61.55c1.28-.73 2.85-.73 4.13,0l49.54,28.53L200.26,28.59c1.28-.73 2.86-.73 4.13,0l49.55,28.53c1.28.74 2.07,2.1 2.07,3.58Z"
                  ></path>
                </svg>
              </span>
            </button>

            {/* AI / model */}
            <button className="profile_item absolute bottom-8 -right-0 cursor-pointer rounded-full border border-gray-400/50 bg-cover p-[2px] transition-all duration-500 hover:scale-95 active:scale-95">
              <span className="z-[2] block h-[40px] w-[40px] rounded-full bg-white p-1 transition-all duration-500">
                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197z"
                    fill="#00618A"
                  ></path>
                  <path
                    d="M56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606v-1.87c.197-.843.632-1.08 2.094-1.212h11.733v-2.738H63.504c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793h4.267c1.304.105 1.856.343 2.252.816v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58H56.63v2.738z"
                    fill="#E48E00"
                  ></path>
                </svg>
              </span>
            </button>

            {/* Center: SmartChef AI */}
            <button className="profile_item z-0 h-[200px] w-[200px] cursor-pointer rounded-full border-2 border-emerald-500/40 p-1 transition-all duration-500 hover:border-gray-400/60">
              <div className="flex h-full w-full flex-col items-center justify-center gap-1 rounded-full bg-slate-950/95 object-cover transition-all duration-500 hover:scale-95">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Powered by
                </span>
                <span className="text-lg font-bold text-slate-50">
                  SmartChef AI
                </span>
                <span className="px-4 text-center text-[11px] text-slate-400">
                  React · Node · Vision models · Nutrition engine
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;