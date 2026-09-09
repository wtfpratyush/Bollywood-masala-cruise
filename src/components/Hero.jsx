import React, { useEffect } from "react";
import { ShieldCheck, Ticket, Headset, ChefHat, BedDouble, Music, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { heroFeatures, featureStrip, heroImage } from "../mock";

const iconMap = { ShieldCheck, Ticket, Headset };
const featureIconMap = { ChefHat, BedDouble, Music, Users };

const QuoteForm = () => {
  useEffect(() => {
    const scriptId = "msgsndr-form-embed";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl shadow-indigo-900/10 p-2 sm:p-4 border border-gray-100 min-h-[640px] flex flex-col justify-center">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/8LYQHo3CuLbis8cNAyyD"
        style={{ width: "100%", height: "100%", minHeight: "622px", border: "none", borderRadius: "8px" }}
        id="inline-8LYQHo3CuLbis8cNAyyD"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact form new website"
        data-height="622"
        data-layout-iframe-id="inline-8LYQHo3CuLbis8cNAyyD"
        data-form-id="8LYQHo3CuLbis8cNAyyD"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Contact form new website"
      />
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroImage}
          alt="Luxury cruise ship"
          className="w-full h-full object-cover"
        />
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40 lg:via-white/70 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-14 pb-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center relative">
          {/* Left text */}
          <div className="reveal z-10">
            <p className="text-[13px] font-bold tracking-[0.15em] text-[#4b3df5] mb-3">WELCOME ABOARD</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] leading-[1.05] font-extrabold text-[#1a1a3a]">
              An All-Inclusive<br />
              <span className="text-[#4b3df5]">Cruise</span> Experience
            </h1>
            <p className="mt-5 text-[16px] text-gray-600 max-w-md leading-relaxed">
              Sail into a world of luxury, entertainment, and unforgettable moments. Everything you need for the perfect getaway — all in one place.
            </p>

            <div className="mt-7 flex flex-wrap gap-6">
              {heroFeatures.map((f) => {
                const Icon = iconMap[f.icon];
                return (
                  <div key={f.title} className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#4b3df5]">
                      {Icon && <Icon size={20} />}
                    </div>
                    <div className="leading-tight">
                      <p className="text-[14px] font-semibold text-[#1a1a3a]">{f.title}</p>
                      <p className="text-[14px] font-semibold text-[#1a1a3a]">{f.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-[#f5a623] px-7 py-3.5 text-[16px] font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-[#e5981a] transition-all hover:-translate-y-0.5"
              >
                Request Pricing
              </Link>
            </div>
          </div>

          {/* Right form */}
          <div className="relative flex lg:justify-end">
            <div className="w-full lg:max-w-[400px]">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-10 lg:-mt-2">
        <div className="bg-white rounded-2xl shadow-xl shadow-indigo-900/5 border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {featureStrip.map((f) => {
            const Icon = featureIconMap[f.icon];
            return (
              <div key={f.title} className="flex items-start gap-3 p-5">
                <div className="text-[#4b3df5] shrink-0 mt-0.5">{Icon && <Icon size={30} strokeWidth={1.5} />}</div>
                <div>
                  <p className="font-bold text-[15px] text-[#1a1a3a]">{f.title}</p>
                  <p className="text-[13px] text-gray-500 leading-snug">{f.desc}</p>
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

