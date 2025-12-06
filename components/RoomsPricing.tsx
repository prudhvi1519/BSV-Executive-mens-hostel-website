import React, { useRef } from "react";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { useGsapStagger } from "../hooks/useGsapStagger";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

const RoomsPricing: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const { scrollToId } = useSmoothScroll();

  useGsapReveal(headerRef, { variant: "lift" });
  useGsapStagger(gridRef, { childSelector: ".room-card", variant: "scale-pop", stagger: 0.15 });

  const rooms = [
    {
      name: "Triple sharing",
      price: "₹7,000 / month",
      tag: "Most comfortable",
      bullets: [
        "3 residents",
        "Spacious layout for beds & luggage",
        "Attached washroom (Western / Indian)",
        "Daily room cleaning",
      ],
    },
    {
      name: "4 sharing",
      price: "₹6,600 / month",
      tag: "Popular choice",
      bullets: [
        "4 residents",
        "Bigger than typical PG rooms",
        "Attached washroom",
        "Good balance of rent & comfort",
      ],
    },
    {
      name: "5 sharing",
      price: "₹6,300 / month",
      tag: "Best value",
      bullets: [
        "5 residents",
        "Well-planned to avoid cramped feel",
        "Attached washroom",
        "Budget friendly for students",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-orange-50/50 via-white to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 opacity-0">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Rooms &amp; pricing
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl font-light leading-relaxed">
              Pick a sharing type that suits your budget and comfort. All rooms
              include attached washrooms and basic facilities.
            </p>
          </div>
          {/* BOOK NOW -> scroll to contact */}
          <button
            type="button"
            onClick={() => scrollToId("#contact")}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-8 py-3 text-sm font-semibold shadow-lg hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Book now
          </button>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="room-card opacity-0 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-orange-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-x-0 -top-10 h-32 bg-gradient-to-b from-orange-100/50 via-transparent to-transparent pointer-events-none group-hover:from-orange-100 transition-colors duration-500" />
              <div className="relative p-6 sm:p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-orange-600 font-bold mb-1">
                      {room.tag}
                    </p>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {room.name}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    BSV
                  </div>
                </div>

                <p className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                  {room.price}
                </p>

                <ul className="space-y-3 text-sm text-slate-600 mb-8 flex-1">
                  {room.bullets.map((b) => (
                    <li key={b} className="flex gap-3 items-start">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => scrollToId("#contact")}
                  className="mt-auto w-full inline-flex items-center justify-center rounded-xl bg-orange-50 text-orange-700 border border-orange-100 px-4 py-3 text-sm font-semibold group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-orange-500/30 transition-all duration-300"
                >
                  Book this room
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed text-center md:text-left">
            All rooms include WiFi, geyser access, washing machine facility and
            regular cleaning. Security deposit and electricity terms can be updated as per final hostel
            policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomsPricing;