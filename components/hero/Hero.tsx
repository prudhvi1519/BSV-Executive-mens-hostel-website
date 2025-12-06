import React, { useRef } from "react";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import { useGsapReveal } from "../../hooks/useGsapReveal";

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  // Subtle fade in for the whole section container background
  useGsapReveal(sectionRef, { duration: 1.5, distance: 0 });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 min-h-[90vh] flex items-center">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-64 w-64 rounded-full bg-orange-500/25 blur-3xl opacity-60" />
        <div className="absolute top-40 -right-20 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-teal-400/15 blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 lg:py-24 grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
