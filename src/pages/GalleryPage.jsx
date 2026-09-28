import React, { useState } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/* ─── All local images from public/images/gallery ─── */
const galleryImages = [
  {
    "src": "/images/gallery/Destination/1.jpg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/Destination/2.jpg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/Destination/3.jpg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/Destination/4.jpg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/Destination/5.jpg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/Destination/6.jpg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/Destination/7.jpg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/Destination/8.jpg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/Destination/9.jpg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/Entertainment/20260722_172827.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/20260723_175458.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/20260725_113455.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/20260725_171352.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/20260726_173957.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/20260726_175716.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-106.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-207 (1).jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-235.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-255.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-304.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-308.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-312.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-344 (1).jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-382 (1).jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-413.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-421.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-460.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-528.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-577 (1).jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-589.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-600 (1).jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-645.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-725 (1).jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-729.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-801.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-838.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-841.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/BMC-95.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/IMG_3732.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/IMG_3972.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/IMG_3975.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/IMG_4001.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/IMG_4314.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/IMG_4367.jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Entertainment/IMG_5286(1).jpg",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/Event/1.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/10.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/11.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/12.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/13.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/14.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/15.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/16.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/17.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/18.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/19.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/2.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/20.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/21.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/22.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/23.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/24.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/25.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/26.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/27.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/28.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/29.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/3.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/30.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/31.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/4.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/6.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/7.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/8.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Event/9.jpg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/Moments/1.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/10.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/11.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/12.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/13.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/14.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/15.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/16.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/17.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/18.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/19.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/2.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/20.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/21.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/22.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/23.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/24.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/25.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/26.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/27.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/28.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/29.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/3.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/30.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/4.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/5.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/6.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/7.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/8.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/Moments/9.jpg",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/onboard/1.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/10.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/11.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/12.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/13.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/14.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/15.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/16.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/17.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/18.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/19.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/2.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/20.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/21.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/22.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/23.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/24.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/25.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/26.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/27.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/28.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/29.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/3.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/30.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/31.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/32.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/33.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/34.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/35.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/36.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/37.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/38.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/39.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/4.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/5.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/6.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/7.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/8.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/onboard/9.jpg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/667df7e30ec82103ea6bd236.webp",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/667f533096b757560a66b58f.webp",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/667f53da96b757e71a66b636.webp",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/667f554661f34bbba8d8c48d.webp",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/667f563c8145f81f6dda6c6a.webp",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/667f56d80ec821dfeb6e570b.webp",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/667f5d2f96b7577a3866f371 (1).webp",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/667f5d350ec821745b6e94e3.webp",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/667f5da861f34b6129d90dfe.jpeg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/669984144d63036856fccf7c.jpeg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/66998414763d6d45cb01b9fb.jpeg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/66998414faf180893ebce78d.jpeg",
    "cat": "Onboard"
  },
  {
    "src": "/images/gallery/66998865f3f1c46064f40c3c.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/6699886b21005a9c3350cae3.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/66998871763d6d76ad01c07d.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/66998877f3f1c49f6af40c40.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/66998880763d6d69a601c07e.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/6699888ab998f5e924d1a252.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/669988922477ef252404d49d.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/66998e36fe542b2ec2454dcf.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/66998e3cb998f5431ad1a538.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/66998e4253a60300f4e4d145.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/66998e4853a603e4afe4d15c.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/66998e512477efbcc304d85d.webp",
    "cat": "Entertainment"
  },
  {
    "src": "/images/gallery/679a33c6714dc02b0d0f2278.jpeg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/679a3650323e37fe2412495b.jpeg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/679a3650714dc0759b0f255d.jpeg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/679a385f2ee48503a4c25175.jpeg",
    "cat": "Events"
  },
  {
    "src": "/images/gallery/67aa34929957468281070998.jpeg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/67aa352337cca1ead0205ad5.jpeg",
    "cat": "Destinations"
  },
  {
    "src": "/images/gallery/6838e91d66722b80f67a2b2b.webp",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/695415927ccb03bacd5609f6.webp",
    "cat": "Moments"
  },
  {
    "src": "/images/gallery/695416a3ec06c51cf2ab1945.webp",
    "cat": "Moments"
  }
];

const CATEGORIES = ["All", "Events", "Entertainment", "Moments", "Onboard", "Destinations"];

/* ─── Lightbox ─── */
const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  if (index === null) return null;
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-10"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-[13px] font-semibold">
        {index + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Image */}
      <img
        src={images[index].src}
        alt={`Gallery ${index + 1}`}
        className="max-h-[88vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-all"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

/* ─── Immediate image card (lazy loading disabled) ─── */
const GalleryCard = ({ src, index, onOpen }) => {
  return (
    <div
      className="relative group overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-4 break-inside-avoid"
      onClick={() => onOpen(index)}
    >
      <img
        src={src}
        alt={`Gallery ${index + 1}`}
        loading="eager"
        decoding="sync"
        className="w-full object-cover transition-all duration-500 group-hover:scale-105 block"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg" />
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════════════════ */
const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.cat === activeCategory);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  // Keyboard navigation
  React.useEffect(() => {
    const handler = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filtered.length]);

  return (
    <Layout>
      <PageBanner
        title="Gallery"
        crumb="Gallery"
        bgImage="https://images.unsplash.com/photo-1579592672790-39239b6cbc31?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400"
        subtitle="Real moments from real cruises — parties, performances, destinations and memories that last a lifetime."
      />

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-[11px] font-black tracking-[0.22em] uppercase text-[#4b3df5] mb-2">OUR MOMENTS</p>
            <h2 className="text-[28px] sm:text-[36px] font-black text-[#1a1a3a]">Bollywood Masala Cruise Gallery</h2>
            <p className="text-[15px] text-gray-500 mt-3 max-w-xl mx-auto">
              Browse through {galleryImages.length}+ photos from our unforgettable cruises.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setLightboxIndex(null); }}
                className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#4b3df5] text-white shadow-lg shadow-indigo-300/30"
                    : "bg-gray-100 text-gray-500 hover:bg-indigo-50 hover:text-[#4b3df5]"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className={`ml-1.5 text-[11px] ${activeCategory === cat ? "text-white/70" : "text-gray-400"}`}>
                    ({galleryImages.filter((i) => i.cat === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {filtered.map((img, i) => (
              <GalleryCard
                key={img.src}
                src={img.src}
                index={i}
                onOpen={openLightbox}
              />
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-semibold">No photos in this category yet.</p>
            </div>
          )}

          {/* Count badge */}
          <p className="text-center text-[13px] text-gray-400 mt-8">
            Showing {filtered.length} of {galleryImages.length} photos
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </Layout>
  );
};

export default GalleryPage;
