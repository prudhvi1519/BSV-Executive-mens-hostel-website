import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-[10px] font-bold">B</div>
           <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
            © {new Date().getFullYear()} BSV Executive Mens Hostel
          </p>
        </div>
        <p className="text-xs text-slate-400">
          Designed for comfort in Ameerpet, Hyderabad
        </p>
      </div>
    </footer>
  );
};

export default Footer;