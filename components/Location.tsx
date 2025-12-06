import React, { useRef } from "react";
import { useGsapReveal } from "../hooks/useGsapReveal";

const LocationSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useGsapReveal(textRef, { direction: "left", distance: 30 });
  useGsapReveal(mapRef, { direction: "up", distance: 40, delay: 0.2 });

  return (
    <section className="py-12 sm:py-16 bg-slate-950 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 items-start">
        <div ref={textRef} className="opacity-0">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
            Located in the heart of Ameerpet
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-4 max-w-xl">
            BSV Executive Mens Hostel is situated beside Reliance Fresh in
            Srinivasa Nagar, Ameerpet, with easy access to coaching institutes,
            training centers and public transport.
          </p>
          <div className="space-y-2 text-sm text-slate-200 mb-4">
            <p>
              <span className="font-semibold">Address:</span>{" "}
              CCQX+F58, beside Reliance Fresh, Srinivasa Nagar, Ameerpet,
              Hyderabad, Telangana 500038
            </p>
            <ul className="space-y-1 text-slate-200/90">
              <li>• Close to major software training institutes</li>
              <li>• Easy access to metro station and bus stops</li>
              <li>• Nearby shops, food outlets and medical stores</li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Share this location with students and parents so they can directly
            navigate through maps.
          </p>
        </div>

        {/* Google Maps embed */}
        <div ref={mapRef} className="relative opacity-0">
          <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/60 to-amber-400/60 rounded-3xl blur-xl opacity-70 animate-pulse" />
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl">
            <iframe
              title="BSV Executive Mens Hostel Location"
              src="https://www.google.com/maps?q=17.438650,78.447930&hl=en&z=18&output=embed"
              loading="lazy"
              className="h-64 sm:h-72 w-full"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-700 text-[11px] text-slate-300 flex items-center justify-between">
              <span>BSV Executive Mens Hostel, Ameerpet</span>
              <span className="text-orange-300">View on map</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
