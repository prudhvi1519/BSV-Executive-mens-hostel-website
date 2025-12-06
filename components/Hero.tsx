import React from "react";
import { CALL_LINK, WHATSAPP_LINK } from "../config/contact";

const scrollToContact = () => {
  const el = document.querySelector("#contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-64 w-64 rounded-full bg-orange-500/25 blur-3xl" />
        <div className="absolute top-40 -right-20 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-teal-400/15 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-20 lg:py-24 grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
        {/* LEFT: MAIN TEXT */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.18em] text-slate-300 uppercase mb-3">
            MENS HOSTEL • AMEERPET, HYDERABAD
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
            Spacious executive mens hostel with{" "}
            <span className="text-orange-300">attached washrooms</span>.
          </h1>

          <p className="text-sm sm:text-base text-slate-200/90 leading-relaxed mb-5 max-w-xl">
            Triple, 4 &amp; 5 sharing rooms with attached washrooms, homely
            food, WiFi, laundry and lift.{" "}
            <span className="font-medium text-orange-200">
              From ₹6,300 / month in Ameerpet.
            </span>
          </p>

          <div className="flex flex-wrap gap-2 mb-6 text-[11px] sm:text-xs text-slate-100/90">
            <span className="inline-flex items-center rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              Attached Western / Indian washrooms
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              Spacious triple, 4 &amp; 5 sharing rooms
            </span>
            <span className="inline-flex items-center rounded-full bg-slate-900/70 border border-slate-700 px-3 py-1">
              WiFi • Meals • Laundry • Lift
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            {/* PRIMARY: CHECK AVAILABILITY → SCROLL TO CONTACT */}
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 px-7 py-2.5 text-sm font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.03] active:scale-[0.98] transition-transform transition-shadow"
            >
              Check availability
            </button>

            {/* SECONDARY: WHATSAPP USING SHARED LINK */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-slate-900/60 text-slate-50 px-6 py-2.5 text-sm font-medium hover:bg-slate-800/90 hover:border-slate-300 transition-colors"
            >
              WhatsApp us
            </a>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-400">
            Ideal for software &amp; coaching students, IT trainees and working
            professionals staying in and around Ameerpet.
          </p>

          <p className="mt-1 text-[11px] sm:text-xs text-slate-500">
            Prefer calling?{" "}
            <a
              href={CALL_LINK}
              className="underline underline-offset-2 text-slate-100 hover:text-orange-200"
            >
              Call now
            </a>
            .
          </p>
        </div>

        {/* RIGHT: ATTRACTIVE HOSTEL "INFO CARD" */}
        <div className="relative">
          <div className="relative mx-auto max-w-sm">
            {/* Glow border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-400/60 via-amber-300/50 to-teal-400/50 blur-xl opacity-80" />
            <div className="relative rounded-3xl bg-slate-950/80 border border-slate-700/70 p-4 sm:p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[11px] text-slate-400 uppercase tracking-[0.18em] mb-1">
                    BSV EXECUTIVE MENS HOSTEL
                  </p>
                  <p className="text-sm text-slate-100">
                    Ameerpet, Hyderabad • Mens hostel
                  </p>
                </div>
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-slate-950 text-[11px] font-bold">
                  BSV
                </div>
              </div>

              {/* Fake room preview */}
              <div className="rounded-2xl bg-slate-900 border border-slate-700 mb-4 overflow-hidden">
                <div className="aspect-[16/9] bg-slate-800 flex items-center justify-center">
                  <span className="text-[11px] text-slate-400">
                    Room / hostel photo placeholder
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 text-[11px] sm:text-xs text-slate-200 mb-3">
                <div className="rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2">
                  <p className="font-medium text-slate-50 mb-0.5">
                    Rooms
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Triple / 4 / 5 sharing
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2">
                  <p className="font-medium text-slate-50 mb-0.5">
                    Attached bath
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Western / Indian
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/80 border border-slate-700 px-3 py-2">
                  <p className="font-medium text-slate-50 mb-0.5">
                    Food &amp; WiFi
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Meals, WiFi, laundry
                  </p>
                </div>
              </div>

              {/* Highlight line */}
              <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-300 border-t border-slate-800 pt-3">
                <span>From ₹6,300 / month • Daily cleaning</span>
                <span className="inline-flex items-center gap-1 text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;