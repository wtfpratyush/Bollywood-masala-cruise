import React from "react";
import { Link } from "react-router-dom";
import { Anchor, Eye, Heart, Check } from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { aboutIntro, aboutStats, aboutValues } from "../mock";

const valueIconMap = { Anchor, Eye, Heart };

const About = () => {
  return (
    <Layout>
      <PageBanner
        title="About Us"
        crumb="About Us"
        bgImage="https://images.pexels.com/photos/24643916/pexels-photo-24643916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        subtitle="Discover the story, mission and people behind the most loved all-inclusive cruise experience."
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative">
            <img src={aboutIntro.image} alt="About Masala Cruise" className="w-full h-[360px] lg:h-[440px] object-cover rounded-3xl shadow-xl" />
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#4b3df5] text-white rounded-2xl px-6 py-4 shadow-lg">
              <p className="text-[28px] font-extrabold leading-none">15+</p>
              <p className="text-[13px] text-white/80">Years at Sea</p>
            </div>
          </div>
          <div>
            <p className="text-[13px] font-bold tracking-[0.15em] text-[#4b3df5] mb-3">{aboutIntro.eyebrow}</p>
            <h2 className="text-[30px] sm:text-[38px] font-extrabold text-[#1a1a3a] leading-tight">{aboutIntro.title}</h2>
            <p className="mt-5 text-[16px] text-gray-600 leading-relaxed">{aboutIntro.body}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {["All-inclusive pricing", "Award-winning entertainment", "World-class dining", "24/7 guest support"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-[15px] text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-[#eeeafe] text-[#4b3df5] flex items-center justify-center"><Check size={13} strokeWidth={3} /></span>
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/packages" className="inline-block mt-8 rounded-lg bg-[#f5a623] px-7 py-3.5 text-[16px] font-semibold text-white hover:bg-[#e5981a] transition-all hover:-translate-y-0.5">
              Explore Cruises
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#141452] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[40px] font-extrabold text-[#f5a623] leading-none">{s.value}</p>
              <p className="mt-2 text-[14px] text-white/75">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[13px] font-bold tracking-[0.15em] text-[#4b3df5] mb-1">WHAT DRIVES US</p>
            <h2 className="text-[30px] sm:text-[36px] font-bold text-[#1a1a3a]">Our Mission, Vision &amp; Promise</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aboutValues.map((v) => {
              const Icon = valueIconMap[v.icon];
              return (
                <div key={v.title} className="rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-[#eeeafe] text-[#4b3df5] flex items-center justify-center mb-5">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#1a1a3a]">{v.title}</h3>
                  <p className="mt-2 text-[15px] text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
