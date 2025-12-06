import React, { useRef } from "react";
import { Bed, Utensils, Zap } from "lucide-react";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { useGsapStagger } from "../hooks/useGsapStagger";

const Facilities: React.FC = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGsapReveal(headerRef, { variant: "slide-left", distance: 40 });
  useGsapStagger(gridRef, { 
    childSelector: ".facility-card", 
    variant: "fade-in", // Subtle entrance to contrast with header
    stagger: 0.1,
    y: 20
  });

  const categories = [
    {
      title: "Premium Stay",
      icon: <Bed className="w-6 h-6" />,
      items: [
        "Spacious triple / 4 / 5 sharing",
        "Attached washrooms in all rooms",
        "Western / Indian toilet options",
        "Lift, open terrace & balcony",
      ],
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20"
    },
    {
      title: "Healthy Food",
      icon: <Utensils className="w-6 h-6" />,
      items: [
        "Breakfast & dinner daily",
        "2 days non-veg (Chicken)",
        "2 days egg + fried rice",
        "Varied breakfast menu",
      ],
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      border: "border-teal-500/20"
    },
    {
      title: "Daily Convenience",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "Washing machine access",
        "Purified mineral water",
        "High-speed WiFi Internet",
        "Daily housekeeping",
      ],
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-orange-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 ref={headerRef} className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight opacity-0">
          Facilities that <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">matter</span>
        </h2>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className={`facility-card opacity-0 h-full bg-white/5 backdrop-blur-md rounded-3xl p-8 border ${cat.border} hover:bg-white/10 hover:scale-[1.02] transition-all duration-500 group`}>
              <div className={`w-12 h-12 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                {cat.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                {cat.title}
              </h3>
              
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${cat.color.replace('text', 'bg')} shadow-[0_0_8px_currentColor]`}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;