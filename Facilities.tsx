import React from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import { Bed, Utensils, Zap } from "lucide-react";

const Facilities: React.FC = () => {
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

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
            Facilities that <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">matter</span>
          </h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <RevealOnScroll key={cat.title} delay={idx * 100}>
              <div className={`h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border ${cat.border} hover:bg-white/10 transition-all duration-300 group`}>
                <div className={`w-12 h-12 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-6">
                  {cat.title}
                </h3>
                
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${cat.color.replace('text', 'bg')}`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;