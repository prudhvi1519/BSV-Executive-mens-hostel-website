import React, { useRef } from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import { useGsapReveal } from "../hooks/useGsapReveal";

const HygieneSafety: React.FC = () => {
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);

  useGsapReveal(card1Ref, { direction: "left", distance: 40, delay: 0 });
  useGsapReveal(card2Ref, { direction: "right", distance: 40, delay: 0.1 });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 lg:gap-16">
        
        <div ref={card1Ref} className="opacity-0 bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 h-full relative overflow-hidden group hover:shadow-lg transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-bl-full transition-transform group-hover:scale-110"></div>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
              <Sparkles size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Hygiene First</h2>
          </div>
          
          <ul className="space-y-4">
            {["Daily room cleaning", "Regular corridor & common area mopping", "Monthly deep cleaning of washrooms"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                 <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                 {item}
              </li>
            ))}
          </ul>
        </div>

        <div ref={card2Ref} className="opacity-0 bg-sky-50 rounded-3xl p-8 md:p-12 border border-sky-100 h-full relative overflow-hidden group hover:shadow-lg transition-all">
           <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/20 rounded-bl-full transition-transform group-hover:scale-110"></div>
           
           <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
              <ShieldCheck size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Safety & Rules</h2>
          </div>

          <ul className="space-y-4">
            {["CCTV Surveillance in common areas", "Controlled entry and exit", "Strict policies for peaceful environment"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 bg-white/60 p-3 rounded-lg backdrop-blur-sm">
                 <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                 {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default HygieneSafety;
