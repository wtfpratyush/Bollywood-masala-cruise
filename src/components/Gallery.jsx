import React from "react";
import { galleryImages } from "../mock";

const Gallery = () => {
  // Duplicate the list so the marquee loops seamlessly (train-like continuous motion)
  const loop = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="bg-white py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9">
          <p className="text-[13px] font-bold tracking-[0.15em] text-[#4b3df5] mb-1">GALLERY</p>
          <h2 className="text-[30px] sm:text-[36px] font-bold text-[#1a1a3a]">A Glimpse of Life Onboard</h2>
        </div>
      </div>

      {/* Full-bleed continuously moving track */}
      <div className="relative">
        <div className="marquee-track gap-4">
          {loop.map((img, i) => (
            <div key={i} className="shrink-0 w-40 sm:w-48 group">
              <div className="overflow-hidden rounded-xl aspect-[3/4] shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
