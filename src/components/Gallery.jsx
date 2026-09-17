import React, { useState, useEffect, useCallback } from "react";
import { galleryImages } from "../mock";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  // Duplicate the list so the marquee loops seamlessly (train-like continuous motion)
  const loop = [...galleryImages, ...galleryImages];

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Touch state for swipe handling on mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 45;

  const handleOpen = (index) => {
    setLightboxIndex(index % galleryImages.length);
  };

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
    );
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : 0
    );
  }, []);

  // Prevent background page scrolling when lightbox is active
  useEffect(() => {
    if (lightboxIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [lightboxIndex]);

  // Keyboard controls: ArrowLeft, ArrowRight, Escape
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  // Touch swipe handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    if (e.targetTouches && e.targetTouches[0]) {
      setTouchStart(e.targetTouches[0].clientX);
    }
  };

  const onTouchMove = (e) => {
    if (e.targetTouches && e.targetTouches[0]) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="gallery" className="bg-white py-14 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9">
          <p className="text-[13px] font-bold tracking-[0.15em] text-[#4b3df5] mb-1">GALLERY</p>
          <h2 className="text-[30px] sm:text-[36px] font-bold text-[#1a1a3a]">A Glimpse of Life Onboard</h2>
        </div>
      </div>

      {/* Full-bleed continuously moving track with square images */}
      <div className="relative">
        <div className="marquee-track gap-4">
          {loop.map((img, i) => (
            <div
              key={i}
              className="shrink-0 w-44 sm:w-56 md:w-60 group cursor-pointer"
              onClick={() => handleOpen(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpen(i);
                }
              }}
              aria-label={`Open photo: ${img.alt || "Cruise memory"}`}
            >
              <div className="overflow-hidden rounded-2xl aspect-square shadow-md border border-gray-100 bg-gray-100 relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm text-white text-[12px] font-semibold px-3 py-1 rounded-full shadow-lg">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center select-none p-4 sm:p-6"
            onClick={handleClose}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Top Bar: Counter & Close Button */}
            <div className="absolute top-4 sm:top-6 left-0 right-0 px-4 sm:px-8 flex items-center justify-between z-30 pointer-events-none">
              <div className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-[12px] sm:text-[13px] font-semibold tracking-wider">
                {lightboxIndex + 1} / {galleryImages.length}
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                aria-label="Close popup"
                className="pointer-events-auto w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-lg cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Prev Navigation Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center transition-all duration-200 z-30 backdrop-blur-md cursor-pointer shadow-lg"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Navigation Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center transition-all duration-200 z-30 backdrop-blur-md cursor-pointer shadow-lg"
            >
              <ChevronRight size={28} />
            </button>

            {/* Centered Popup Image Content */}
            <div
              className="relative max-w-full max-h-full flex flex-col items-center justify-center z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt || `Cruise photo ${lightboxIndex + 1}`}
                className="max-h-[80vh] sm:max-h-[85vh] max-w-[88vw] sm:max-w-[85vw] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
              />

              {galleryImages[lightboxIndex].alt && (
                <motion.p
                  key={`caption-${lightboxIndex}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 text-center text-white/80 text-[13px] sm:text-[14px] font-medium tracking-wide max-w-xl px-4"
                >
                  {galleryImages[lightboxIndex].alt}
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
