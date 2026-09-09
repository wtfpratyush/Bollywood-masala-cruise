import React, { useState } from "react";
import { Play, Star } from "lucide-react";
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

  return (
    <Layout>
      <PageBanner
        title="Testimonials"
        crumb="Testimonials"
        bgImage="https://images.unsplash.com/photo-1628336707631-68131ca720c3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBwYXJ0eXxlbnwwfHx8fDE3ODc3NDgyMzN8MA&ixlib=rb-4.1.0&q=85"
        subtitle="Real stories from real cruisers who sailed with Masala Cruise."
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <button onClick={() => setActive(t)} className="relative block w-full aspect-video group">
                  <img
                    src={t.thumb}
                    alt={t.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={18} fill="white" className="text-white ml-0.5" />
                    </span>
                  </span>
                </button>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} size={14} className="text-[#f5a623]" fill="#f5a623" />
                      ))}
                    </div>
                    <span className="text-[12px] font-semibold text-gray-400">Verified Guest</span>
                  </div>
                  <p className="text-[14px] text-gray-600 leading-snug">“{t.quote}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-[380px] sm:max-w-[420px] p-0 overflow-hidden bg-black border-0 rounded-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>Guest Testimonial</DialogTitle>
          </DialogHeader>
          <div className="w-full aspect-[9/16] max-h-[85vh] bg-black">
            {active && (
              <iframe
                className="w-full h-full"
                src={`${active.video}?autoplay=1&rel=0`}
                title={active.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Testimonials;
