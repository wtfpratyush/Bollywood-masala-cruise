import React, { useState } from "react";
import { Star, Instagram, ExternalLink } from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { testimonials } from "../mock";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

const Testimonials = () => {
  const [active, setActive] = useState(null);

  const isInstagram = (t) =>
    t?.platform === "instagram" || t?.video?.includes("instagram.com") || t?.link?.includes("instagram.com");

  return (
    <Layout>
      <PageBanner
        title="Testimonials"
        crumb="Testimonials"
        bgImage="https://images.unsplash.com/photo-1628336707631-68131ca720c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBwYXJ0eXxlbnwwfHx8fDE3ODc3NDgyMzN8MA&ixlib=rb-4.1.0&q=85"
        subtitle="Real stories and unfiltered experiences from guests who sailed with Bollywood Masala Cruise."
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const ig = isInstagram(t);
              return (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between">
                  <div>
                    <button onClick={() => setActive(t)} aria-label="Watch video testimonial" className="relative block w-full aspect-video group cursor-pointer overflow-hidden">
                      <img
                        src={t.thumb}
                        alt="Video testimonial"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Platform pill badge */}
                      <div className="absolute top-3 left-3 z-10">
                        {ig ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white shadow-sm border border-white/20">
                            <Instagram size={12} className="text-[#f58529]" />
                            Instagram Reel
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white shadow-sm border border-white/20">
                            <svg className="w-3 h-3 fill-[#FF0000]" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            YouTube Short
                          </span>
                        )}
                      </div>

                      <span className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/35">
                        {ig ? (
                          <span className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform text-white">
                            <Instagram size={22} strokeWidth={2.2} />
                          </span>
                        ) : (
                          <span className="w-13 h-9 rounded-[10px] bg-[#FF0000] shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-4 h-4 fill-white ml-0.5" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </span>
                        )}
                      </span>
                    </button>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex gap-0.5" aria-label={`${t.rating || 5} out of 5 stars`}>
                          {Array.from({ length: t.rating || 5 }).map((_, s) => (
                            <Star key={s} size={14} className="text-[#f5a623]" fill="#f5a623" aria-hidden="true" />
                          ))}
                        </div>
                        <span className="text-[12px] font-semibold text-gray-400">
                          Verified Guest
                        </span>
                      </div>
                      <p className="text-[14px] text-gray-700 leading-snug font-medium">“{t.quote}”</p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-0 flex items-center justify-end border-t border-gray-50 mt-2">
                    {t.link && (
                      <a
                        href={t.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#4b3df5] hover:underline pt-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{ig ? "View Post" : "Watch"}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-[380px] sm:max-w-[420px] p-0 overflow-hidden bg-black border-0 rounded-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>Guest Testimonial</DialogTitle>
          </DialogHeader>
          <div className="w-full aspect-[9/16] min-h-[480px] max-h-[85vh] bg-black">
            {active && (
              <iframe
                className="w-full h-full"
                src={
                  isInstagram(active)
                    ? active.video?.includes("/embed")
                      ? active.video
                      : `${active.video?.replace(/\/+$/, "")}/embed/`
                    : `${active.video}?autoplay=1&rel=0`
                }
                title={active.name || "Guest Testimonial"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Testimonials;
