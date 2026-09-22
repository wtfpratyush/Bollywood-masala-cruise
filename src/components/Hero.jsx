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
    <section id="home" className="relative min-h-[680px] lg:min-h-[760px] flex flex-col justify-between overflow-hidden">
      {/* Background Image - Clean and vividly visible ship */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroImage}
          alt="Luxury Bollywood Masala Cruise Ship sailing at sunset"
          className="w-full h-full object-cover object-[center_60%] sm:object-[center_55%] lg:object-center select-none"
        />
        {/* Soft edge gradients so text is readable while ship in center is 100% visible */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-white/90 via-white/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white/80 via-white/20 to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-8 w-full flex-1 flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
          
          {/* Left Hero Text Column */}
          <div className="z-10 lg:col-span-7 xl:col-span-7 pr-0 lg:pr-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4b3df5]/10 backdrop-blur-md border border-[#4b3df5]/20 text-[#4b3df5] font-extrabold text-[12px] tracking-[0.18em] uppercase shadow-sm mb-4">
              WELCOME ABOARD
            </span>

            <h1 className="text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[58px] font-black text-[#1a1a3a] leading-[1.06] tracking-tight">
              A Signature<br />
              <span className="text-[#4b3df5]">Bollywood Cruise</span><br />
              Experience
            </h1>

            <p className="mt-4 text-[15px] sm:text-[16px] text-gray-800 max-w-xl leading-relaxed font-medium">
              Sail into a world of luxury, entertainment, and unforgettable moments. Everything you need for the perfect getaway — all in one place.
            </p>

            {/* 3 Horizontal Feature Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-3.5">
              {heroFeatures.map((f) => {
                const Icon = iconMap[f.icon] || Sparkles;
                return (
                  <div
                    key={f.title}
                    className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200/90 shadow-sm hover:shadow transition-all"
                  >
                    <div className="w-6 h-6 rounded-full bg-indigo-50 text-[#4b3df5] flex items-center justify-center shrink-0">
                      <Icon size={14} strokeWidth={2.2} />
                    </div>
                    <p className="text-[13px] font-bold text-[#1a1a3a] whitespace-nowrap">
                      {f.title} {f.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#f5a623] px-8 py-3.5 text-[16px] font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-[#e5981a] hover:shadow-orange-500/40 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Pricing</span>
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          {/* Right Hero Form Column */}
          <div className="relative flex lg:justify-end lg:col-span-5 xl:col-span-5 w-full">
            <div className="w-full max-w-[480px] lg:max-w-[460px] xl:max-w-[490px]">
              <QuickQuoteForm />
            </div>
          </div>

        </div>
      </div>

      {/* Floating Bottom Feature Strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 pt-2 w-full">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-indigo-950/10 border border-white/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {featureStrip.map((f) => {
            const Icon = featureIconMap[f.icon] || ChefHat;
            return (
              <div key={f.title} className="flex items-start gap-3.5 p-4 sm:p-5">
                <div className="text-[#4b3df5] shrink-0 mt-0.5">
                  <Icon size={28} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="font-bold text-[15px] text-[#1a1a3a]">{f.title}</p>
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
