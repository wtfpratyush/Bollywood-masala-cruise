import React from "react";
import { Link } from "react-router-dom";
import { Check, Ship, CircleDollarSign, Camera, Users, Calendar, ArrowRight, Anchor } from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { popularCruises, pastCruises, cruiseTrust } from "../mock";
import { useToast } from "../hooks/use-toast";

const trustIconMap = { Ship, CircleDollarSign, Camera, Users };

const toSlug = (title) => title.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");

const Packages = () => {
  const { toast } = useToast();
  const book = (title) =>
    toast({
      title: `Booking Inquiry: ${title}`,
      description: "Our cruise specialists will contact you with availability and special rates.",
    });

  return (
    <Layout>
      <PageBanner
        title="Cruise Packages"
        crumb="Cruise Packages"
        bgImage="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODIwMXww&ixlib=rb-4.1.0&q=85"
        subtitle="Experience luxury Bollywood-themed cruising with gourmet Indian dining, star performances, and breathtaking ports of call."
      />

      {/* ── Upcoming Cruises (2 Hero Packages) ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.15em] text-[#4b3df5] bg-[#eeeafe] px-3.5 py-1.5 rounded-full uppercase mb-3">
              <Anchor size={14} /> Upcoming Voyages
            </span>
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#1a1a3a] leading-tight">
              Featured Cruise Packages
            </h2>
            <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
              Reserve your stateroom for our upcoming signature sailings. All-inclusive luxury, authentic Indian multi-cuisine dining, and non-stop Bollywood entertainment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {popularCruises.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-indigo-950/5 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[12px] font-bold tracking-wider text-white bg-[#4b3df5] shadow-md rounded-lg px-3 py-1.5">
                    {c.tag}
                  </span>
                  {c.details?.ship && (
                    <span className="absolute bottom-4 left-4 text-[12px] font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      🚢 {c.details.ship}
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-[24px] sm:text-[26px] font-bold text-[#1a1a3a] group-hover:text-[#4b3df5] transition-colors">
                        {c.title}
                      </h3>
                      <span className="text-[12px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {c.subtitle.split("|")[0]?.trim() || "All-Inclusive"}
                      </span>
                    </div>
                    <p className="text-[14px] text-gray-500 mb-5">{c.subtitle}</p>

                    <div className="space-y-2.5 mb-6">
                      {c.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5 text-[14px] text-gray-700">
                          <div className="w-5 h-5 rounded-full bg-[#eeeafe] flex items-center justify-center text-[#4b3df5] shrink-0">
                            <Check size={13} strokeWidth={3} />
                          </div>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-[12px] font-medium text-gray-400 uppercase tracking-wider">Starting Rate</p>
                      <p className="text-[28px] font-extrabold text-[#4b3df5] leading-none mt-0.5">
                        {c.price} <span className="text-[13px] font-medium text-gray-500">/ Person</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Link
                        to={`/packages/${toSlug(c.title)}`}
                        className="rounded-xl border border-gray-200 px-4 sm:px-5 py-3 text-[13px] font-bold text-[#1a1a3a] hover:border-[#4b3df5] hover:text-[#4b3df5] transition-all flex items-center gap-1.5"
                      >
                        View Details <ArrowRight size={14} />
                      </Link>
                      <Link
                        to="/contact"
                        className="rounded-xl bg-[#f5a623] px-5 sm:px-6 py-3 text-[13px] font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#e5981a] transition-all hover:-translate-y-0.5"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Past Cruises Section ── */}
      <section className="bg-[#f8f9fc] py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-bold tracking-[0.15em] text-[#4b3df5] bg-[#eeeafe] px-3.5 py-1.5 rounded-full uppercase mb-3">
              <Calendar size={14} /> Memories At Sea
            </span>
            <h2 className="text-[32px] sm:text-[38px] font-extrabold text-[#1a1a3a]">
              Our Past Cruises
            </h2>
            <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
              Explore memories and past sailing destinations from our previous sold-out Bollywood Masala Cruise voyages.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {pastCruises.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-100">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 left-3 text-[11px] font-bold tracking-wider text-white bg-[#4b3df5]/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    {c.date}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                    Sold Out
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[17px] font-bold text-[#1a1a3a] group-hover:text-[#4b3df5] transition-colors">
                      {c.title}
                    </h4>
                    <p className="text-[12px] text-gray-500 mt-1">Bollywood Masala Sailing Experience</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[12px]">
                    <span className="text-gray-400">Voyage Completed</span>
                    <Link
                      to="/gallery"
                      className="font-semibold text-[#4b3df5] hover:underline flex items-center gap-1"
                    >
                      View Photos <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-10 border-t border-gray-200/80">
            {cruiseTrust.map((t) => {
              const Icon = trustIconMap[t.icon];
              return (
                <div key={t.title} className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-[#eeeafe] flex items-center justify-center text-[#4b3df5] shrink-0">
                    {Icon && <Icon size={20} strokeWidth={1.8} />}
                  </div>
                  <div className="leading-tight">
                    <p className="text-[14px] font-bold text-[#1a1a3a]">{t.title}</p>
                    <p className="text-[12px] text-gray-500 mt-0.5">{t.desc}</p>
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
