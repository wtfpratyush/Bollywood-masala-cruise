import React from "react";
import { Link } from "react-router-dom";
import { Check, Ship, CircleDollarSign, Camera, Users } from "lucide-react";
import { popularCruises, cruiseTrust } from "../mock";
import { useToast } from "../hooks/use-toast";

const trustIconMap = { Ship, CircleDollarSign, Camera, Users };

const toSlug = (title) => title.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");

const PopularCruises = () => {
  const { toast } = useToast();
  const book = (title) =>
    toast({ title: `Booking: ${title}`, description: "Our team will contact you to confirm your booking." });

  return (
    <section id="packages" className="bg-white pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141452] rounded-3xl px-5 sm:px-8 lg:px-10 py-9 lg:py-11">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-[13px] font-bold tracking-[0.15em] text-[#8b8bef] mb-1">POPULAR CRUISES</p>
              <h2 className="text-[28px] sm:text-[34px] font-bold text-white">Unforgettable Journeys Await</h2>
            </div>
            <Link
              to="/packages"
              className="self-start sm:self-auto rounded-lg border border-white/40 px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-white hover:text-[#141452] transition-all whitespace-nowrap"
            >
              View All Cruises
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {popularCruises.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl overflow-hidden flex flex-col sm:flex-row">
                <div className="sm:w-[42%] relative overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-48 sm:h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 p-5">
                  <span className="inline-block text-[11px] font-bold tracking-wide text-[#4b3df5] bg-[#eeeafe] rounded-md px-2.5 py-1 mb-2">
                    {c.tag}
                  </span>
                  <h3 className="text-[21px] font-bold text-[#1a1a3a]">{c.title}</h3>
                  <p className="text-[13px] text-gray-500 mb-3">{c.subtitle}</p>
                  <ul className="space-y-1.5 mb-4">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[14px] text-gray-700">
                        <Check size={15} className="text-[#4b3df5]" strokeWidth={3} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-end justify-between flex-wrap gap-2">
                    <div>
                      <p className="text-[24px] font-bold text-[#4b3df5] leading-none">
                        <span className="text-[14px] font-medium text-gray-500">From </span>{c.price}
                      </p>
                      <p className="text-[12px] text-gray-400">Per Person</p>
                    </div>
                    <div className="flex gap-2">
                      {c.details && (
                        <Link
                          to={`/packages/${toSlug(c.title)}`}
                          className="rounded-lg border border-[#4b3df5] px-4 py-2 text-[13px] font-semibold text-[#4b3df5] hover:bg-[#4b3df5] hover:text-white transition-all"
                        >
                          View Details
                        </Link>
                      )}
                      <button
                        onClick={() => book(c.title)}
                        className="rounded-lg bg-[#f5a623] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#e5981a] transition-all"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-9 pt-2">
            {cruiseTrust.map((t) => {
              const Icon = trustIconMap[t.icon];
              return (
                <div key={t.title} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white shrink-0">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[14px] font-semibold text-white">{t.title}</p>
                    <p className="text-[12px] text-white/60">{t.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCruises;
