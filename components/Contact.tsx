import React, { useState, useRef } from "react";
import { CALL_LINK, WHATSAPP_LINK, HOSTEL_EMAIL } from "../config/contact";
import { useGsapReveal } from "../hooks/useGsapReveal";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const infoRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  // Split motion: Left side slides in, right side scales up
  useGsapReveal(infoRef, { variant: "slide-left", distance: 50 });
  useGsapReveal(formRef, { variant: "scale-in", delay: 0.2 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-b from-amber-50/80 via-white to-white"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
        {/* Left: info */}
        <div ref={infoRef} className="opacity-0">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-xs mb-3 block">Get in touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Contact &amp; booking
          </h2>
          <p className="text-base text-slate-600 mb-8 max-w-xl leading-relaxed">
            For availability, bookings or hostel visits, use this form or get in
            touch directly through WhatsApp or a phone call.
          </p>

          <div className="space-y-6 text-sm text-slate-800 mb-8">
            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
               </div>
               <div>
                  <p className="font-bold text-slate-900 mb-1">Visit Us</p>
                  <p className="text-slate-600">CCQX+F58, beside Reliance Fresh, Srinivasa Nagar, Ameerpet, Hyderabad, Telangana 500038</p>
               </div>
            </div>

            <div className="flex gap-4">
               <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
               </div>
               <div>
                  <p className="font-bold text-slate-900 mb-1">Call</p>
                  <a href={CALL_LINK} className="text-slate-600 hover:text-orange-600 underline decoration-slate-300 underline-offset-4">+91-0000000000</a>
               </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 text-white px-6 py-3 text-sm font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.05] active:scale-[0.98] transition-all"
            >
              WhatsApp us
            </a>
            <a
              href={CALL_LINK}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 px-6 py-3 text-sm font-bold hover:border-slate-400 hover:bg-slate-50 transition-all"
            >
              Call now
            </a>
          </div>
        </div>

        {/* Right: form card */}
        <div ref={formRef} className="relative opacity-0">
          <div className="absolute -inset-1 bg-gradient-to-br from-slate-900/60 via-slate-800/60 to-slate-900/60 rounded-[2rem] blur-xl opacity-70" />
          <div className="relative rounded-[2rem] bg-slate-950/95 border border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-50">
            <h3 className="text-xl font-bold mb-2">
              Quick enquiry
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              Fill this form and we'll respond with room availability.
            </p>

            <form action="#" onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                      placeholder="Name"
                    />
                 </div>
                 <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                      placeholder="Mobile"
                    />
                 </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Sharing Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                   {['Triple', '4 Share', '5 Share'].map(opt => (
                     <label key={opt} className="cursor-pointer">
                       <input type="radio" name="sharing" className="peer sr-only" />
                       <div className="rounded-lg border border-slate-800 bg-slate-900/50 py-2.5 text-center text-xs text-slate-400 hover:bg-slate-800 peer-checked:bg-orange-500 peer-checked:text-white peer-checked:border-orange-500 transition-all">
                         {opt}
                       </div>
                     </label>
                   ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-50 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                  placeholder="When do you plan to join?"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-3.5 text-sm font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.99] transition-all"
              >
                Submit enquiry
              </button>

              {submitted && (
                <div className="animate-fade-in text-center p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                  <p className="text-xs font-bold text-emerald-400">
                    Received! We will check availability and call you.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;