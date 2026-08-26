import React from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import OnboardExperience from "../components/OnboardExperience";
import Gallery from "../components/Gallery";
import { Link } from "react-router-dom";
import { dining } from "../mock";

const Onboard = () => {
  return (
    <Layout>
      <PageBanner
        title="Onboard Experience"
        crumb="Onboard Experience"
        bgImage="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwbGlnaHRzfGVufDB8fHx8MTc4Nzc0ODIzM3ww&ixlib=rb-4.1.0&q=85"
        subtitle="From Bollywood nights to sunrise deck walks \u2014 every moment aboard is crafted for joy."
      />

      <OnboardExperience />
      <Gallery />

      {/* Dining highlight */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden min-h-[320px] flex">
            <div className="absolute inset-0">
              <img src={dining.image} alt="Dining" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2d1b8f]/95 via-[#2d1b8f]/80 to-transparent" />
            </div>
            <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-center max-w-lg">
              <p className="text-[12px] font-bold tracking-[0.15em] text-[#f5a623] mb-2">FOOD &amp; DINING</p>
              <h3 className="text-[28px] sm:text-[34px] font-bold text-white leading-tight">{dining.title}</h3>
              <p className="text-[15px] text-white/80 mt-3 leading-relaxed">{dining.desc}</p>
              <Link to="/contact" className="mt-6 self-start rounded-lg bg-[#f5a623] px-7 py-3 text-[15px] font-semibold text-white hover:bg-[#e5981a] transition-all hover:-translate-y-0.5">
                Explore Dining
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Onboard;
