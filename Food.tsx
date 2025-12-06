import React, { useRef } from "react";
import { Calendar, Coffee, Sun } from "lucide-react";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { useGsapStagger } from "../hooks/useGsapStagger";

const Food: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useGsapReveal(headerRef, { direction: "up", distance: 30 });
  useGsapStagger(cardsRef, { childSelector: ".food-card", stagger: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 opacity-0">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Taste of <span className="text-orange-500">Home</span>
              </h2>
              <p className="text-slate-600 max-w-sm text-lg font-light">
                Hygienic preparation. Consistent quality. Menu designed to not get boring.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-orange-200 mx-8 relative top-[-15px]"></div>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          <div className="food-card opacity-0 bg-white p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-6">
              <Coffee size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Morning Breakfast</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Start your day right with a different item every day. Idli, Dosa, Puri, Wada - no repetition in the same week.
            </p>
          </div>

          <div className="food-card opacity-0 bg-white p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full">
             <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-6">
              <Calendar size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Weekly Plan</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Balanced diet with 2 days Chicken Curry, 2 days Egg + Fried Rice. Vegetable curries on other days.
            </p>
          </div>

          <div className="food-card opacity-0 bg-white p-8 rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all h-full">
             <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-6">
              <Sun size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Sundays & Festivals</h3>
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
