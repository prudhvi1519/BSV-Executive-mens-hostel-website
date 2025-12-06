import React, { useRef } from "react";
import { Calendar, Coffee, Sun } from "lucide-react";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { useGsapStagger } from "../hooks/useGsapStagger";
import { gsap, useGSAP } from "../lib/gsap";

const Food: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useGsapReveal(headerRef, { variant: "scale-in" });
  useGsapStagger(cardsRef, { childSelector: ".food-card", variant: "scale-pop", stagger: 0.15 });

  // Add floating animation to the middle card for playfulness
  useGSAP(() => {
    gsap.to(".floating-card", {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1 // Start after entrance
    });
  }, { scope: cardsRef });

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Decorative background element */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl pointer-events-none" />

        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 opacity-0 relative z-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Taste of <span className="text-orange-500">Home</span>
              </h2>
              <p className="text-slate-600 max-w-sm text-lg font-light">
                Hygienic preparation. Consistent quality. Menu designed to not get boring.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-orange-200 to-transparent mx-8 relative top-[-15px]"></div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 relative z-10">
          <div className="food-card opacity-0 bg-white p-8 rounded-3xl border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 rotate-3">
              <Coffee size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Morning Breakfast</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Start your day right with a different item every day. Idli, Dosa, Puri, Wada - no repetition in the same week.
            </p>
          </div>

          <div className="food-card floating-card opacity-0 bg-gradient-to-b from-orange-500 to-amber-500 p-8 rounded-3xl shadow-xl shadow-orange-500/20 text-white h-full transform">
             <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 -rotate-3">
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Weekly Plan</h3>
            <p className="text-orange-50 leading-relaxed text-sm">
              Balanced diet with 2 days Chicken Curry, 2 days Egg + Fried Rice. Vegetable curries on other days.
            </p>
          </div>

          <div className="food-card opacity-0 bg-white p-8 rounded-3xl border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full">
             <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6 rotate-3">
              <Sun size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Sundays & Festivals</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Sunday Bagara Rice specials. Special menus prepared during major festivals to make you feel at home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;