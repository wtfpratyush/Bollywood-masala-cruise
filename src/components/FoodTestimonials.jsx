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
    <section id="testimonials" className="bg-white pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Dining */}
          <div className="relative rounded-3xl overflow-hidden min-h-[300px] flex">
            <div className="absolute inset-0">
              <img src={dining.image} alt="Dining" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#2d1b8f]/95 via-[#2d1b8f]/80 to-transparent" />
            </div>
            <div className="relative z-10 p-7 lg:p-9 flex flex-col justify-center max-w-md">
              <p className="text-[12px] font-bold tracking-[0.15em] text-[#f5a623] mb-2">FOOD &amp; DINING</p>
              <h3 className="text-[26px] sm:text-[30px] font-bold text-white leading-tight">{dining.title}</h3>
              <p className="text-[14px] text-white/80 mt-3 leading-relaxed">{dining.desc}</p>
              <button className="mt-6 self-start rounded-lg bg-[#f5a623] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#e5981a] transition-all hover:-translate-y-0.5">
                Explore Dining
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-[#f6f7fc] rounded-3xl p-5 sm:p-7 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <p className="text-[12px] font-bold tracking-[0.15em] text-[#4b3df5] mb-1">TESTIMONIALS</p>
                  <h3 className="text-[22px] sm:text-[28px] font-bold text-[#1a1a3a]">What Our Guests Have to Say</h3>
                </div>
                {/* Mobile swipe hint badge */}
                <span className="sm:hidden text-[11px] font-semibold text-[#4b3df5] bg-[#eeeafe] px-2.5 py-1 rounded-full whitespace-nowrap">
                  Swipe →
                </span>
              </div>

              {/* Swipable on mobile, grid on tablet/desktop */}
              <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-3.5 pb-2 -mx-2 px-2 hide-scrollbar sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0 sm:gap-4">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="shrink-0 w-[84%] sm:w-auto snap-center bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all"
                  >
                    <button
                      onClick={() => setActive(t)}
                      className="relative block w-full aspect-video group overflow-hidden"
                      aria-label={`Watch testimonial by ${t.name}`}
                    >
                      <img
                        src={t.thumb}
                        alt={t.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover:bg-black/40">
                        <span className="w-11 h-11 rounded-full bg-red-600 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play size={18} fill="white" className="text-white ml-0.5" />
                        </span>
                      </span>
                    </button>
                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <p className="text-[12px] text-gray-700 leading-snug font-medium mb-2 line-clamp-2">
                        “{t.quote}”
                      </p>
                      <div className="flex items-center justify-between pt-1 border-t border-gray-50">
                        <span className="text-[11px] font-bold text-[#1a1a3a]">{t.name}</span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: t.rating }).map((_, s) => (
                            <Star key={s} size={11} className="text-[#f5a623]" fill="#f5a623" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Guest Testimonial</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            {active && (
              <iframe
                className="w-full h-full"
                src={active.video}
                title={active.name}
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
