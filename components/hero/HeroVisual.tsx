import React, { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";

const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Slide in from right with scaling
      tl.from(".hero-card", { 
        x: 60, 
        scale: 0.95, 
        opacity: 0, 
        duration: 1.4, 
        delay: 0.4 
      });

      // Continuous floating animation
      gsap.to(".hero-card-inner", {
        y: -12,
        rotation: 1,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.8,
      });
      
      // Pulse effect on availability dot
      gsap.to(".pulse-dot", {
        scale: 1.2,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative z-10 lg:pl-10 hidden lg:block">
      <div className="hero-card relative mx-auto max-w-sm">
        {/* Glow border */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-400/60 via-amber-300/50 to-teal-400/50 blur-xl opacity-60" />
        
        <div className="hero-card-inner relative rounded-3xl bg-slate-900/80 border border-slate-700/50 p-5 shadow-2xl backdrop-blur-md ring-1 ring-white/10">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-1 font-semibold">
                MENS HOSTEL
              </p>
              <p className="text-sm text-slate-100 font-medium">
                Ameerpet, Hyderabad
              </p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-slate-950 text-xs font-bold shadow-lg shadow-orange-500/20">
              BSV
            </div>
          </div>

          {/* Fake room preview */}
          <div className="rounded-2xl bg-slate-800 border border-slate-700 mb-5 overflow-hidden group cursor-default relative">
            <div className="aspect-[16/10] bg-slate-800 flex items-center justify-center relative overflow-hidden">
               {/* Abstract room representation */}
               <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 via-slate-700 to-slate-800 opacity-80"></div>
               <div className="absolute top-4 left-4 right-4 h-2 bg-slate-600/30 rounded-full w-2/3"></div>
               <div className="absolute bottom-0 right-0 w-32 h-24 bg-slate-700/50 rounded-tl-3xl"></div>
               
              <span className="text-[10px] text-slate-500 z-10 uppercase tracking-wider font-medium">
                Photo Placeholder
              </span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 text-[11px] sm:text-xs text-slate-200 mb-4">
            <div className="rounded-xl bg-white/5 border border-white/5 px-3 py-2.5 text-center hover:bg-white/10 transition-colors">
              <p className="font-medium text-slate-50 mb-0.5">
                Sharing
              </p>
              <p className="text-[10px] text-slate-400">
                3 / 4 / 5
              </p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/5 px-3 py-2.5 text-center hover:bg-white/10 transition-colors">
              <p className="font-medium text-slate-50 mb-0.5">
                Bath
              </p>
              <p className="text-[10px] text-slate-400">
                Attached
              </p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/5 px-3 py-2.5 text-center hover:bg-white/10 transition-colors">
              <p className="font-medium text-slate-50 mb-0.5">
                Includes
              </p>
              <p className="text-[10px] text-slate-400">
                Food+WiFi
              </p>
            </div>
          </div>

          {/* Highlight line */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-300 border-t border-white/10 pt-4">
            <span className="font-medium text-orange-200">From ₹6,300 / mo</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;