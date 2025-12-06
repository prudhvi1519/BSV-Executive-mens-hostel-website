import React, { useRef } from "react";
import { gsap, useGSAP } from "../../lib/gsap";
import { CALL_LINK, WHATSAPP_LINK } from "../../config/contact";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

const HeroContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollToId } = useSmoothScroll();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-label", { y: -12, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(".hero-heading", { y: 25, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.6")
        .from(".hero-desc", { y: 15, opacity: 0, duration: 1 }, "-=0.8")
        .from(".hero-pill", { 
          y: 10, 
          opacity: 0, 
          duration: 0.6, 
          stagger: 0.08 
        }, "-=0.7")
        .from(".hero-btn", { 
          scale: 0.85, 
          opacity: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "back.out(1.6)" 
        }, "-=0.4")
        .from(".hero-footer", { opacity: 0, duration: 1 }, "-=0.5");
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative z-10">
      <p className="hero-label text-[11px] font-medium tracking-[0.18em] text-slate-300 uppercase mb-3">
        MENS HOSTEL • AMEERPET, HYDERABAD
      </p>

      <h1 className="hero-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 leading-[1.1]">
        Spacious executive mens hostel with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-300">attached washrooms</span>.
      </h1>

      <p className="hero-desc text-base sm:text-lg text-slate-300/90 leading-relaxed mb-8 max-w-xl font-light">
        Triple, 4 &amp; 5 sharing rooms with attached washrooms, homely
        food, WiFi, laundry and lift.{" "}
        <span className="font-medium text-orange-200">
          From ₹6,300 / month in Ameerpet.
        </span>
      </p>

      <div className="flex flex-wrap gap-2 mb-8 text-[11px] sm:text-xs text-slate-100/90">
        <span className="hero-pill inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1.5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
          Attached Western / Indian washrooms
        </span>
        <span className="hero-pill inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1.5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
          Spacious triple, 4 &amp; 5 sharing rooms
        </span>
        <span className="hero-pill inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1.5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
          WiFi • Meals • Laundry • Lift
        </span>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <button
          type="button"
          onClick={() => scrollToId("#contact")}
          className="hero-btn inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3 text-sm font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all"
        >
          Check availability
        </button>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/40 backdrop-blur-sm text-slate-50 px-6 py-3 text-sm font-medium hover:bg-slate-800/80 hover:border-slate-400 transition-colors"
        >
          WhatsApp us
        </a>
      </div>

      <div className="hero-footer">
        <p className="text-[11px] sm:text-xs text-slate-400">
          Ideal for software &amp; coaching students, IT trainees and working
          professionals staying in and around Ameerpet.
        </p>

        <p className="mt-2 text-[11px] sm:text-xs text-slate-500">
          Prefer calling?{" "}
          <a
            href={CALL_LINK}
            className="underline underline-offset-2 text-slate-300 hover:text-orange-200 transition-colors"
          >
            Call now
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default HeroContent;