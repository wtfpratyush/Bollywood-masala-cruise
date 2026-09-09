import React from "react";
import { CircleDollarSign, Tag, Wifi, BadgeCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { benefits } from "../mock";

const benefitIconMap = { CircleDollarSign, Tag, Wifi, BadgeCheck, ShieldCheck };

const BenefitsBar = () => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1579592672790-39239b6cbc31?auto=format&fit=crop&w=1200&q=75"
        alt="Ocean"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1c3a63]/85" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-center text-[24px] sm:text-[28px] font-bold text-white mb-8">
        Book Now and Get Exclusive Benefits!
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {benefits.map((b) => {
          const Icon = benefitIconMap[b.icon];
          return (
            <div key={b.title} className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full border border-[#f5a623] flex items-center justify-center text-[#f5a623] shrink-0">
                <Icon size={19} strokeWidth={1.6} />
              </div>
              <div className="leading-tight">
                <p className="text-[14px] font-bold text-white">{b.title}</p>
                <p className="text-[12px] text-white/70">{b.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/contact"
          className="rounded-lg bg-[#f5a623] px-8 py-3 text-[15px] font-semibold text-white hover:bg-[#e5981a] transition-all hover:-translate-y-0.5"
        >
          Request Pricing
        </Link>
      </div>
    </div>
  </section>
);

export default BenefitsBar;
