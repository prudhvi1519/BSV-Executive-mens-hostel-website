import React, { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { gsap, useGSAP } from "../lib/gsap";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { useGsapStagger } from "../hooks/useGsapStagger";

const items = [
  {
    question: "What is included in the rent?",
    answer: "Rent covers your room, bed, individual cupboard, high-speed WiFi, daily room cleaning, and two meals a day (Breakfast & Dinner). Washing machine usage is also included.",
  },
  {
    question: "Do all rooms have attached washrooms?",
    answer: "Yes, absolutely. Every single room (Triple, 4, and 5 sharing) comes with a clean, private attached washroom.",
  },
  {
    question: "Is there a security deposit?",
    answer: "Yes, a fully refundable security deposit is collected at the time of joining. It is returned when you vacate with proper notice.",
  },
  {
    question: "What are the gate timings?",
    answer: "The main gate is open from 6:00 AM to 10:30 PM. For shift employees, prior permission can be arranged.",
  },
  {
    question: "Is electricity bill included?",
    answer: "Maintenance charges usually cover common area electricity. Room electricity might be charged based on sub-meter readings. Please check with the manager for current policy.",
  },
];

// Single Accordion Item Component
const AccordionItem = ({ item, isOpen, onClick }: { item: typeof items[0], isOpen: boolean, onClick: () => void }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, { scope: contentRef, dependencies: [isOpen] });

  return (
    <div className={`faq-item opacity-0 bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-orange-200 shadow-lg' : 'border-slate-200'}`}>
      <button
        className="w-full flex justify-between items-center p-6 text-left group"
        onClick={onClick}
      >
        <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-orange-600' : 'text-slate-800 group-hover:text-orange-500'}`}>
          {item.question}
        </span>
        <span className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div 
        ref={contentRef}
        className="h-0 opacity-0 overflow-hidden"
      >
        <div className="px-6 pb-6">
          <p className="text-slate-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useGsapReveal(headerRef, { direction: "up", distance: 30 });
  useGsapStagger(listRef, { childSelector: ".faq-item", stagger: 0.1, y: 20 });

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Common <span className="text-orange-500">Questions</span>
          </h2>
        </div>

        <div ref={listRef} className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              item={item} 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? null : index)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
