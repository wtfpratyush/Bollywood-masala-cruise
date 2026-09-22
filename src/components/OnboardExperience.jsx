import React from "react";
import { Footprints, Music2, Dices, Drama, PartyPopper, Mic, Trophy, Sparkles } from "lucide-react";
import { onboardActivities } from "../mock";

const iconMap = { Footprints, Music2, Dices, Drama, PartyPopper, Mic, Trophy, Sparkles };

const OnboardExperience = () => {
  return (
    <section id="onboard" className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-[12px] font-black tracking-[0.2em] text-[#4b3df5] uppercase mb-2">ONBOARD EXPERIENCE</p>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-extrabold text-[#1a1a3a] tracking-tight leading-tight">
            All This and More Awaits You On Our Itinerary!
          </h2>
          <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">
            Handpicked entertainment and cultural moments crafted to bring Bollywood magic to the open ocean.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6">
          {onboardActivities.map((a) => {
            const Icon = iconMap[a.icon];
            return (
              <div key={a.title} className="flex flex-col items-center text-center group">
                <div className="text-[#4b3df5] mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon size={40} strokeWidth={1.4} />
                </div>
                <p className="text-[15px] font-bold text-[#1a1a3a]">{a.title}</p>
                <p className="text-[12px] text-gray-500 leading-snug mt-1">{a.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OnboardExperience;
