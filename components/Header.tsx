import React, { useState } from "react";
import { NavItem } from "../types";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "../config/contact";
import { useHeaderScroll } from "../hooks/useHeaderScroll";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

type HeaderProps = {
  navItems: NavItem[];
};

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  const [open, setOpen] = useState(false);
  const { isHidden, hasBackground } = useHeaderScroll(20);
  const { scrollToId } = useSmoothScroll();

  const handleNavClick = (href: string) => {
    setOpen(false);
    scrollToId(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${
        hasBackground || open
          ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 py-3" 
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick("#home")}
        >
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 ease-out">
             <span className="text-white font-bold text-xl">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-lg tracking-tight leading-none group-hover:text-orange-400 transition-colors">
              BSV EXECUTIVE
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 leading-none mt-1">
              Mens Hostel
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="relative text-slate-300 hover:text-orange-400 transition-colors py-1 group"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wide rounded-full shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 ease-out"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-slate-100 p-2 hover:bg-slate-800 rounded-lg transition-colors active:scale-95"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6 text-lg font-medium">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-left text-slate-300 hover:text-orange-400 border-b border-slate-800 pb-3 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wide shadow-lg active:scale-[0.98] transition-transform"
          >
            WhatsApp Enquiry
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;