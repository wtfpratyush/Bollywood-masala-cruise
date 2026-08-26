import React from "react";
import { Check, Ship, CircleDollarSign, Camera, Users } from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { allPackages, cruiseTrust } from "../mock";
import { useToast } from "../hooks/use-toast";

const trustIconMap = { Ship, CircleDollarSign, Camera, Users };

const Packages = () => {
  const { toast } = useToast();
  const book = (title) => toast({ title: `Booking: ${title}`, description: "Our team will contact you to confirm your booking." });

  return (
    <Layout>
      <PageBanner
        title="Cruise Packages"
        crumb="Cruise Packages"
        bgImage="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODIwMXww&ixlib=rb-4.1.0&q=85"
        subtitle="Hand-picked all-inclusive voyages to the world's most breathtaking destinations."
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPackages.map((c) => (
              <div key={c.title} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-52 overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 text-[11px] font-bold tracking-wide text-white bg-[#4b3df5] rounded-md px-2.5 py-1">{c.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-[20px] font-bold text-[#1a1a3a]">{c.title}</h3>
                  <p className="text-[13px] text-gray-500 mb-3">{c.subtitle}</p>
                  <ul className="space-y-1.5 mb-4">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[14px] text-gray-700">
                        <Check size={15} className="text-[#4b3df5]" strokeWidth={3} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-end justify-between pt-2 border-t border-gray-100">
                    <div>
                      <p className="text-[24px] font-bold text-[#4b3df5] leading-none">
                        <span className="text-[13px] font-medium text-gray-500">From </span>{c.price}
                      </p>
                      <p className="text-[12px] text-gray-400">Per Person</p>
                    </div>
                    <button onClick={() => book(c.title)} className="rounded-lg bg-[#f5a623] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#e5981a] transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {cruiseTrust.map((t) => {
              const Icon = trustIconMap[t.icon];
              return (
                <div key={t.title} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#eeeafe] flex items-center justify-center text-[#4b3df5] shrink-0">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[14px] font-semibold text-[#1a1a3a]">{t.title}</p>
                    <p className="text-[12px] text-gray-500">{t.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
