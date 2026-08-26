import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PageBanner = ({ title, subtitle, crumb, bgImage }) => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={bgImage || "https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODIwMXww&ixlib=rb-4.1.0&q=85"}
        alt="Cruise banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#141452]/90 via-[#141452]/70 to-[#4b3df5]/40" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="reveal max-w-2xl">
        <div className="flex items-center gap-2 text-[13px] text-white/70 mb-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#f5a623] font-medium">{crumb || title}</span>
        </div>
        <h1 className="text-[36px] sm:text-[48px] font-extrabold text-white leading-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-[16px] text-white/80 leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  </section>
);

export default PageBanner;
