import React, { useRef } from "react";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { useGsapStagger } from "../hooks/useGsapStagger";

const WhyChooseUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Stagger the feature cards with slide-up effect
  useGsapStagger(containerRef, {
    childSelector: ".stagger-item",
    variant: "slide-up",
    stagger: 0.15,
  });

  // Reveal the header part separately
  const headerRef = useRef<HTMLDivElement | null>(null);
  useGsapReveal(headerRef, { variant: "soft-fade" });

  const features = [
    {
      title: "Spacious Rooms",
      description: "Not the usual cramped PG. Enjoy ample space for beds, luggage, and peace of mind.",
      color: "from-orange-400 to-amber-500",
      bg: "bg-orange-50",
      border: "border-orange-100"
    },
    {
      title: "Attached Washrooms",
      description: "Every room comes with a private attached washroom. No waiting, absolute privacy.",
      color: "from-teal-400 to-emerald-500",
      bg: "bg-teal-50",
      border: "border-teal-100"
    },
    {
      title: "Homely Food",
      description: "Healthy, hygienic meals daily. Different breakfast, weekly non-veg, and specials.",
      color: "from-blue-400 to-indigo-500",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16 opacity-0">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-xs mb-3 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            More than just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">place to sleep</span>
          </h2>
          <p className="text-slate-500 text-lg font-light">
            We prioritize what matters most: space, hygiene, and good food.
          </p>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="stagger-item opacity-0 h-full p-8 rounded-3xl border border-slate-100 bg-white hover:border-transparent hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.bg} z-0`}></div>
              
              {/* Corner accent */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500 z-0`}></div>
              
              <div className="relative z-10">
                <span className={`inline-block text-5xl font-bold bg-gradient-to-br ${feature.color} text-transparent bg-clip-text mb-6 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left`}>
                  0{idx + 1}
                </span>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-slate-950 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;