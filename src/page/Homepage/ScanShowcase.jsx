// src/page/Homepage/ScanShowcase.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Mixed veggie drawer",
    img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=1000&q=80",
    ingredients: "Spinach · Bell pepper · Carrots · Tomatoes",
    result: "2 high‑fiber dinners + 1 quick lunch",
  },
  {
    id: 2,
    title: "Breakfast shelf",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
    ingredients: "Eggs · Avocado · Bread · Berries",
    result: "3 balanced breakfast options under 500 kcal",
  },
  {
    id: 3,
    title: "Leftover night",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=80",
    ingredients: "Rice · Chicken · Veggies · Sauce",
    result: "Zero‑waste fried rice + protein‑packed bowl",
  },
];

const ScanShowcase = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:pb-24">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs md:text-4xl font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Live examples
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            What SmartChef can do with a single scan.
          </h2>
          <p className="mt-2 max-w-xl text-sm light:text-slate-300">
            Real‑world fridge photos, not studio setups. Swipe through to see
            how random items become structured meal plans.
          </p>
        </div>
        <p className="text-xs text-slate-400">
          Swipe on mobile · Hover & scroll on desktop
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={18}
        slidesPerView={1.05}
        centeredSlides={false}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 1.7 },
          1024: { slidesPerView: 2.3 },
        }}
        pagination={{ clickable: true }}
        className="!pb-10"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-emerald-500/25 bg-slate-950/85 shadow-2xl shadow-black/70 backdrop-blur-md">
              <div className="grid h-full md:grid-cols-[1.1fr_0.9fr]">
                {/* Image side */}
                <div className="relative overflow-hidden">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-[11px] text-slate-100">
                    <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
                      Example scan
                    </p>
                    <p className="text-sm font-semibold">{slide.title}</p>
                    <p className="mt-1 text-slate-200/90">
                      {slide.ingredients}
                    </p>
                  </div>
                </div>

                {/* Result side */}
                <div className="flex flex-col justify-between gap-3 p-4 text-[13px] text-slate-100">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                      SmartChef output
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      {slide.result}
                    </p>
                    <p className="mt-2 text-[12px] text-slate-300">
                      Ingredient list, recipes and macros are generated in
                      under 10 seconds, based entirely on what&apos;s visible in
                      the scan.
                    </p>
                  </div>

                  <div className="mt-1 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Prep time
                      </p>
                      <p className="font-semibold text-emerald-300">
                        15–20 min
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Meals created
                      </p>
                      <p className="font-semibold text-sky-300">2–3</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Food waste
                      </p>
                      <p className="font-semibold text-[#FF7043]">−25–30%</p>
                    </div>
                  </div>

                  <button className="mt-2 w-full rounded-full border border-emerald-500/60 bg-slate-900/80 px-3 py-2 text-[12px] font-semibold text-emerald-100 hover:bg-slate-800">
                    Try a similar scan
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ScanShowcase;