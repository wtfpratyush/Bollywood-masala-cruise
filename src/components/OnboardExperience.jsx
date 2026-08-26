import React from "react";
import { Footprints, Music2, Dices, Drama, PartyPopper, Mic, Gamepad2 } from "lucide-react";
import { onboardActivities } from "../mock";

const iconMap = { Footprints, Music2, Dices, Drama, PartyPopper, Mic, Gamepad2 };

const OnboardExperience = () => {
  return (
    <section id="onboard" className="bg-white py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9">
          <p className="text-[13px] font-bold tracking-[0.15em] text-[#4b3df5] mb-1">ONBOARD EXPERIENCE</p>
          <h2 className="text-[26px] sm:text-[34px] font-bold text-[#1a1a3a]">
            All This and More Awaitts You On Our Itinerary!
          </h2>
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
