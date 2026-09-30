import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Star } from "lucide-react";
import { dining, testimonials } from "../mock";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const FoodTestimonials = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="testimonials" className="bg-white pb-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Dining Banner */}
          <div className="relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[340px] flex flex-col justify-center">
            {/* Background Image & Multi-layer Overlay for complete text readability on all screens */}
            <div className="absolute inset-0">
              <img
                src={dining.image}
                alt={dining.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#1c1055]/95 via-[#2d1b8f]/90 to-[#2d1b8f]/60 sm:to-transparent" />
            </div>

            {/* Content Container - Constrained and wrapped safely for phone screens */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex flex-col justify-center max-w-full sm:max-w-md">
              <p className="text-[12px] font-bold tracking-[0.15em] text-[#f5a623] mb-2 uppercase">
                FOOD &amp; DINING
              </p>
              <h3 className="text-[24px] sm:text-[28px] lg:text-[30px] font-bold text-white leading-tight">
                {dining.title}
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-white/90 mt-3 leading-relaxed break-words">
                {dining.desc}
              </p>
              <Link
                to="/onboard"
                className="mt-6 self-start inline-flex items-center justify-center rounded-xl bg-[#f5a623] px-6 py-3 text-[14px] sm:text-[15px] font-bold text-white hover:bg-[#e5981a] shadow-md transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Explore Dining
              </Link>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-[#f6f7fc] rounded-3xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <p className="text-[12px] font-bold tracking-[0.15em] text-[#4b3df5] mb-1 uppercase">
                    TESTIMONIALS
                  </p>
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-[#1a1a3a] leading-snug">
                    What Our Guests Have to Say
                  </h3>
                </div>
                {/* Mobile swipe hint badge */}
                <span className="sm:hidden text-[11px] font-semibold text-[#4b3df5] bg-[#eeeafe] px-2.5 py-1 rounded-full whitespace-nowrap">
                  Swipe →
                </span>
              </div>

              {/* Swipable on mobile, grid on tablet/desktop */}
              <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-3 pb-2 hide-scrollbar sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:gap-4">
                {testimonials
                  .filter(
                    (t) =>
                      t.platform === "youtube" ||
                      t.video?.includes("youtube.com") ||
                      t.link?.includes("youtube.com") ||
                      (!t.platform?.includes("instagram") && !t.video?.includes("instagram.com"))
                  )
                  .slice(0, 3)
                  .map((t, i) => {
                    const ig = t.platform === "instagram" || t.video?.includes("instagram.com") || t.link?.includes("instagram.com");
                    return (
                      <div
                        key={i}
                        className="shrink-0 w-[82%] sm:w-auto snap-center bg-white rounded-2xl overflow-hidden shadow-xs border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all"
                      >
                        <div>
                          <button
                            type="button"
                            onClick={() => setActive(t)}
                            className="relative block w-full aspect-video group overflow-hidden cursor-pointer"
                            aria-label="YouTube Short: watch guest video review"
                          >
                            <img
                              src={t.thumb}
                              alt=""
                              aria-hidden="true"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <span className="absolute top-2.5 left-2.5 z-10">
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-bold text-white shadow-sm border border-white/20">
                                <svg className="w-2.5 h-2.5 fill-[#FF0000]" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                YouTube Short
                              </span>
                            </span>

                            <span className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/35">
                              <span className="w-11 h-7.5 rounded-[8px] bg-[#FF0000] shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-3.5 h-3.5 fill-white ml-0.5" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </span>
                            </span>
                          </button>
                          <div className="p-3.5">
                            <p className="text-[12px] text-gray-700 leading-snug font-medium mb-2 line-clamp-2">
                              “{t.quote}”
                            </p>
                          </div>
                        </div>

                        <div className="px-3.5 pb-3.5 pt-1 border-t border-gray-50 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-gray-400">Verified Guest</span>
                          <div
                            className="flex gap-0.5 shrink-0"
                            role="img"
                            aria-label={`${t.rating || 5} out of 5 stars`}
                          >
                            {Array.from({ length: t.rating || 5 }).map((_, s) => (
                              <Star key={s} size={11} className="text-[#f5a623]" fill="#f5a623" aria-hidden="true" />
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="flex justify-center mt-5 sm:mt-6">
              <Link
                to="/testimonials"
                className="rounded-xl border border-[#4b3df5]/40 px-6 py-2.5 text-[14px] font-semibold text-[#4b3df5] hover:bg-[#4b3df5] hover:text-white transition-all text-center"
              >
                View More Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-[380px] sm:max-w-[420px] p-0 overflow-hidden bg-black border-0 rounded-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>Guest Testimonial</DialogTitle>
          </DialogHeader>
          <div className="w-full aspect-[9/16] min-h-[480px] max-h-[85vh] bg-black">
            {active && (
              <iframe
                className="w-full h-full"
                loading="lazy"
                src={
                  active.platform === "instagram" || active.video?.includes("instagram.com")
                    ? active.video?.includes("/embed")
                      ? active.video
                      : `${active.video?.replace(/\/+$/, "")}/embed/`
                    : `${active.video}?autoplay=1&rel=0`
                }
                title={active.name || "Guest Testimonial"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FoodTestimonials;
