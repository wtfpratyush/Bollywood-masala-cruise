import React from "react";
import {
  ShieldCheck,
  Ticket,
  Sparkles,
  Headset,
  ChefHat,
  BedDouble,
  Music,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { heroFeatures, featureStrip, heroImage } from "../mock";
import QuickQuoteForm from "./QuickQuoteForm";

const iconMap = {
  ShieldCheck: ShieldCheck,
  Ticket: Ticket,
  Sparkles: Sparkles,
  Headset: Headset,
};

const featureIconMap = {
  ChefHat: ChefHat,
  BedDouble: BedDouble,
  Music: Music,
  Users: Users,
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[640px] lg:min-h-[720px] flex flex-col justify-between overflow-hidden">
      {/* Background Image - 100% Vivid, unobstructed cruise ship */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroImage}
          alt="Luxury Bollywood Masala Cruise Ship sailing at sunset"
          className="w-full h-full object-cover object-[center_45%] sm:object-[center_50%] lg:object-[center_50%] select-none"
        />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 pb-6 w-full flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-8 w-full">
          
          {/* Left Hero Text Column - Framed to the left */}
          <div className="w-full lg:max-w-[460px] xl:max-w-[490px] shrink-0">
            <p className="text-[13px] sm:text-[14px] font-black tracking-[0.16em] text-[#4b3df5] uppercase mb-2 sm:mb-3">
              WELCOME ABOARD
            </p>

            <h1 className="text-[36px] sm:text-[46px] lg:text-[48px] xl:text-[52px] font-black text-[#1a1a3a] leading-[1.08] tracking-tight">
              A Signature<br />
              <span className="text-[#4b3df5]">Bollywood Cruise</span><br />
              Experience
            </h1>

            <p className="mt-3.5 sm:mt-4 text-[14px] sm:text-[15px] text-gray-700 leading-relaxed font-semibold max-w-md">
              Sail into a world of luxury, entertainment, and unforgettable moments. Everything you need for the perfect getaway — all in one place.
            </p>

            {/* 3 Horizontal Feature Badges (Circular icon + text beside it) */}
            <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-5">
              {heroFeatures.map((f) => {
                const Icon = iconMap[f.icon] || Sparkles;
                return (
                  <div key={f.title} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#4b3df5] shrink-0 border border-white/80">
                      <Icon size={18} strokeWidth={2.2} />
                    </div>
                    <div className="leading-tight">
                      <p className="text-[12px] sm:text-[13px] font-bold text-[#1a1a3a]">{f.title}</p>
                      <p className="text-[12px] sm:text-[13px] font-bold text-[#1a1a3a]">{f.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-7 flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#f5a623] px-7 py-3 text-[15px] sm:text-[16px] font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-[#e5981a] hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Pricing</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Center Area: Fully open and unobstructed so the cruise ship is completely visible */}

          {/* Right Hero Form Column - Framed to the right */}
          <div className="w-full lg:max-w-[420px] xl:max-w-[440px] shrink-0 lg:ml-auto">
            <QuickQuoteForm />
          </div>

        </div>
      </div>

      {/* Floating Bottom Feature Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6 pt-2 w-full">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-indigo-950/10 border border-white/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {featureStrip.map((f) => {
            const Icon = featureIconMap[f.icon] || ChefHat;
            return (
              <div key={f.title} className="flex items-start gap-3.5 p-4 sm:p-5">
                <div className="text-[#4b3df5] shrink-0 mt-0.5">
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="font-bold text-[14px] sm:text-[15px] text-[#1a1a3a]">{f.title}</p>
                  <p className="text-[12px] text-gray-500 leading-snug mt-0.5">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
