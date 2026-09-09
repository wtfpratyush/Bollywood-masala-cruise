import React from "react";
import { pastCruises } from "../mock";

const PastCruises = () => {
  return (
    <section className="bg-white pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f6f7fc] rounded-3xl px-5 sm:px-8 py-9 lg:py-11">
          <div className="text-center mb-9">
            <p className="text-[13px] font-bold tracking-[0.15em] text-[#4b3df5] mb-1">PAST CRUISES</p>
            <h2 className="text-[24px] sm:text-[32px] font-bold text-[#1a1a3a]">
              Memories That Sailed Beyond the Horizon
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-5 lg:gap-4">
            {pastCruises.map((c, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 lg:w-[104px] lg:h-[104px] rounded-full overflow-hidden ring-4 ring-white shadow-lg mb-3">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="text-[12px] font-bold tracking-wide text-[#4b3df5]">{c.date}</p>
                <p className="text-[14px] font-semibold text-[#1a1a3a]">{c.title}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-9">
            <button className="rounded-lg border border-[#4b3df5]/40 px-6 py-2.5 text-[14px] font-semibold text-[#4b3df5] hover:bg-[#4b3df5] hover:text-white transition-all">
              View All Cruises
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastCruises;
