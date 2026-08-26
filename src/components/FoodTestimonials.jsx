import React, { useState } from "react";
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
          <div className="bg-[#f6f7fc] rounded-3xl p-7 lg:p-8">
            <p className="text-[12px] font-bold tracking-[0.15em] text-[#4b3df5] mb-1">TESTIMONIALS</p>
            <h3 className="text-[24px] sm:text-[28px] font-bold text-[#1a1a3a] mb-6">What Our Guests Have to Say</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <button
                    onClick={() => setActive(t)}
                    className="relative block w-full aspect-video group"
                  >
                    <img src={t.thumb} alt={t.name} className="w-full h-full object-cover" />
                    <span className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <span className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={16} fill="white" className="text-white ml-0.5" />
                      </span>
                    </span>
                  </button>
                  <div className="p-3">
                    <p className="text-[11px] text-gray-600 leading-snug min-h-[45px]">“{t.quote}”</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} size={12} className="text-[#f5a623]" fill="#f5a623" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button className="rounded-lg border border-[#4b3df5]/40 px-6 py-2.5 text-[14px] font-semibold text-[#4b3df5] hover:bg-[#4b3df5] hover:text-white transition-all">
                View More Reviews
              </button>
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
