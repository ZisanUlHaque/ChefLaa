// src/page/Homepage/ScanShowcase.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Mixed veggie drawer",
    img: "https://i.ibb.co/WvKmnHr3/pexels-cottonbro-6969266.jpg",
    ingredients: "Spinach · Bell pepper · Carrots · Tomatoes",
    result: "2 high‑fiber dinners + 1 quick lunch",
  },
  {
    id: 2,
    title: "Breakfast shelf",
    img: "https://i.ibb.co/YFV0ZLk0/pexels-markus-winkler-1430818-13782616.jpg",
    ingredients: "Eggs · Avocado · Bread · Berries",
    result: "3 balanced breakfast options under 500 kcal",
  },
  {
    id: 3,
    title: "Leftover night",
    img: "https://i.ibb.co/VpCJLXqy/pexels-kelvinocta16-773760.jpg",
    ingredients: "Rice · Chicken · Veggies · Sauce",
    result: "Zero‑waste fried rice + protein‑packed bowl",
  },
  {
    id: 4,
    title: "Colorful prep board",
    img: "https://i.ibb.co/BHfR3kwg/pexels-43381756-7462772.jpg",
    ingredients: "Peppers · Herbs · Citrus · Garlic",
    result: "Vibrant one‑pan tray bake in 25 minutes",
  },
  {
    id: 5,
    title: "Clean salad base",
    img: "https://i.ibb.co/nNRFk7w3/pexels-vitaliy-haiduk-326720599-17308537.jpg",
    ingredients: "Greens · Tomatoes · Seeds · Cheese",
    result: "Two macro‑balanced salad bowls",
  },
  {
    id: 6,
    title: "Dinner with friends",
    img: "https://i.ibb.co/rRPwCKJH/pexels-shardar-tarikul-islam-84327533-8983414.jpg",
    ingredients: "Pasta · Veggies · Sauces · Bread",
    result: "Family‑style sharing platter + leftovers",
  },
  {
    id: 7,
    title: "Weekend brunch",
    img: "https://i.ibb.co/kLRsyfH/pexels-rachel-claire-6127272.jpg",
    ingredients: "Eggs · Greens · Bread · Coffee",
    result: "One‑pan brunch for 2 under 20 minutes",
  },
];

const ScanShowcase = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:pb-24">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Live examples
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            What a single SmartChef scan can unlock.
          </h2>
          <p className="mt-2 max-w-xl text-sm light:text-slate-300">
            Real‑world fridge and kitchen shots – not studio setups. Scroll
            through to see how random ingredients become structured meal plans.
          </p>
        </div>
        <p className="text-xs text-slate-400">
          Drag or scroll · best viewed on desktop for 3D effect
        </p>
      </div>

      <Swiper
        loop
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={1.1}
        speed={700} // transition speed একটু বাড়ানো, smooth ফিল
        breakpoints={{
          640: { slidesPerView: 1.4 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 18,        
          stretch: 0,
          depth: 130,        // depth কমালে motion নরম হয়
          modifier: 1,
          scale: 0.86,
          slideShadows: false, // shadow animation off → কম ঝাঁকি
        }}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="!pb-10"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="px-1">
            <ScanCard slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const ScanCard = ({ slide }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-emerald-500/25 bg-slate-950/85 shadow-2xl shadow-black/70 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
      <div className="grid h-full md:grid-cols-[1.1fr_0.9fr]">
        {/* Image side */}
        <div className="relative overflow-hidden">
          <img
            src={slide.img}
            alt={slide.title}
            className="h-56 w-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03] md:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <div className="absolute top-3 left-3 flex items-center gap-2 text-[10px] text-slate-100">
            <span className="rounded-full bg-black/60 px-2 py-0.5 uppercase tracking-[0.18em]">
              Before scan
            </span>
          </div>
          <div className="absolute bottom-3 left-3 right-3 text-[11px] text-slate-100">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
              Example scan
            </p>
            <p className="text-sm font-semibold">{slide.title}</p>

            <div className="mt-1 flex flex-wrap gap-1.5">
              {slide.ingredients.split("·").map((ing) => (
                <span
                  key={ing.trim()}
                  className="rounded-full bg-black/55 px-2 py-0.5 text-[10px] text-slate-100/90"
                >
                  {ing.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Result side */}
        <div className="flex flex-col justify-between gap-3 bg-slate-950/80 p-4 text-[13px] text-slate-100">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
              SmartChef output
            </p>
            <p className="mt-1 text-sm font-semibold text-emerald-100">
              {slide.result}
            </p>
            <p className="mt-2 text-[12px] text-slate-300">
              SmartChef reads the photo, builds an ingredient list, then crafts
              recipes and macros built entirely from what&apos;s visible in the
              scan.
            </p>
          </div>

          <div className="mt-1 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
            <div>
              <p className="text-[10px] text-slate-400">Prep time</p>
              <p className="font-semibold text-emerald-300">15–20 min</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400">Meals created</p>
              <p className="font-semibold text-sky-300">2–3</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-400">Food waste</p>
              <p className="font-semibold text-[#FF7043]">−25–30%</p>
            </div>
          </div>

          <button className="mt-2 w-full rounded-full border border-emerald-500/60 bg-slate-900/80 px-3 py-2 text-[12px] font-semibold text-emerald-100 transition hover:bg-slate-800">
            Try a similar scan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScanShowcase;