import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} BSV Executive Mens Hostel, Ameerpet,
          Hyderabad.
        </p>
        <p>Website content can be updated with final policies &amp; photos.</p>
      </div>
    </footer>
  );
};

export default Footer;