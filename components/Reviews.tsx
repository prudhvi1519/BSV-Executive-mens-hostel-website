import React, { useRef } from "react";
import { Quote } from "lucide-react";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { useGsapStagger } from "../hooks/useGsapStagger";

const reviews = [
  {
    name: "Ravi Kumar",
    role: "Software Trainee",
    quote: "Rooms are spacious and WiFi is stable. Better than most hostels in Ameerpet.",
    initials: "RK",
    color: "bg-orange-500"
  },
  {
    name: "Imran S.",
    role: "Student",
    quote: "Attached washrooms and daily cleaning make a huge difference. Very peaceful.",
    initials: "IS",
    color: "bg-teal-500"
  },
  {
    name: "Sandeep P.",
    role: "IT Professional",
    quote: "No drama, basic facilities work well. Perfect for working professionals.",
    initials: "SP",
    color: "bg-indigo-500"
  },
];

const Reviews: React.FC = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGsapReveal(headerRef, { variant: "lift" });
  useGsapStagger(gridRef, { childSelector: ".review-card", variant: "slide-from-left", stagger: 0.15 });

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Resident <span className="text-orange-500">Stories</span>
          </h2>
          <p className="text-slate-500">Don't just take our word for it.</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="review-card opacity-0 bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:bg-white hover:-translate-y-2 hover:-rotate-1 transition-all duration-300 h-full flex flex-col relative group">
              <Quote className="absolute top-8 right-8 text-slate-200 group-hover:text-orange-200 transition-colors transform group-hover:scale-110" size={40} />
              
              <p className="text-slate-700 text-lg leading-relaxed mb-8 font-light italic relative z-10">
                "{r.quote}"
              </p>
              
              <div className="mt-auto flex items-center gap-4 border-t border-slate-200/50 pt-6">
                <div className={`w-12 h-12 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-sm shadow-md ring-4 ring-white`}>
                  {r.initials}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;