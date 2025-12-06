import React, { useRef } from "react";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { useGsapStagger } from "../hooks/useGsapStagger";

const images = [
  { label: "Triple Sharing", span: "md:col-span-2 md:row-span-2", bg: "bg-slate-200" },
  { label: "4 Sharing Room", span: "md:col-span-1 md:row-span-1", bg: "bg-slate-300" },
  { label: "Attached Washroom", span: "md:col-span-1 md:row-span-1", bg: "bg-slate-100" },
  { label: "Dining Area", span: "md:col-span-1 md:row-span-2", bg: "bg-slate-200" },
  { label: "Terrace View", span: "md:col-span-1 md:row-span-1", bg: "bg-slate-300" },
  { label: "Corridors", span: "md:col-span-1 md:row-span-1", bg: "bg-slate-100" },
];

const Gallery: React.FC = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGsapReveal(headerRef, { variant: "blur-in" });
  useGsapStagger(gridRef, { 
    childSelector: ".gallery-tile", 
    variant: "gallery-tiles", // Custom scale-in effect
    stagger: 0.08 
  });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 ref={headerRef} className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-12 opacity-0">
          Photo <span className="text-orange-500">Gallery</span>
        </h2>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[600px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`gallery-tile opacity-0 w-full h-full relative group overflow-hidden rounded-3xl ${img.bg} ${img.span} flex items-center justify-center transform transition-transform duration-500 hover:z-10`}
            >
              {/* Simulated Image Content */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 transition-transform duration-700 group-hover:scale-110"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <span className="text-6xl text-slate-400 font-black tracking-tighter opacity-20 rotate-[-15deg] select-none">BSV</span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  {img.label}
                </span>
              </div>

              {/* Always visible label for placeholder */}
              <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {img.label}
                  </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;