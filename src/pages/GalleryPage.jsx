import React, { useState } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

/* ─── All local images from public/images/gallery ─── */
const galleryImages = [
  { src: "/images/gallery/679a385f2ee48503a4c25175.jpeg", cat: "Events" },
  { src: "/images/gallery/679a3650323e37fe2412495b.jpeg", cat: "Events" },
  { src: "/images/gallery/679a35aa6018454facd93efb.jpeg", cat: "Events" },
  { src: "/images/gallery/679a33c6714dc02b0d0f2278.jpeg", cat: "Events" },
  { src: "/images/gallery/679a3650714dc0759b0f255d.jpeg", cat: "Events" },
  { src: "/images/gallery/gallery-dance.jpg", cat: "Entertainment" },
  { src: "/images/gallery/gallery-night-deck.jpg", cat: "Entertainment" },
  { src: "/images/gallery/66998865f3f1c46064f40c3c.webp", cat: "Entertainment" },
  { src: "/images/gallery/6699886b21005a9c3350cae3.webp", cat: "Entertainment" },
  { src: "/images/gallery/66998871763d6d76ad01c07d.webp", cat: "Entertainment" },
  { src: "/images/gallery/66998877f3f1c49f6af40c40.webp", cat: "Entertainment" },
  { src: "/images/gallery/66998880763d6d69a601c07e.webp", cat: "Entertainment" },
  { src: "/images/gallery/6699888ab998f5e924d1a252.webp", cat: "Entertainment" },
  { src: "/images/gallery/669988922477ef252404d49d.webp", cat: "Entertainment" },
  { src: "/images/gallery/66998e36fe542b2ec2454dcf.webp", cat: "Entertainment" },
  { src: "/images/gallery/66998e3cb998f5431ad1a538.webp", cat: "Entertainment" },
  { src: "/images/gallery/66998e4253a60300f4e4d145.webp", cat: "Entertainment" },
  { src: "/images/gallery/66998e4853a603e4afe4d15c.webp", cat: "Entertainment" },
  { src: "/images/gallery/66998e512477efbcc304d85d.webp", cat: "Entertainment" },
  { src: "/images/gallery/679a8cc62ee48554e2c2e4a4.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8cc69eedab2a756f4643.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8cc69eedab69d86f4644.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8cc70d9c7541f7a66914.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8cc70d9c75855ba66915.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8cc76018457ddcd9af9d.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d050d9c754a05a6694b.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d050d9c75a573a6694c.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d052ee4855ceec2e4d4.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d0531492731742fc0be.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d0535f5ca5b8c111611.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d054f0aeb1852623064.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d056018454049d9afc6.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d0562e328025bdcb260.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d0562e3282ebfdcb264.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d0562e3284617dcb263.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d0562e328e0efdcb262.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d0580145c27ccf9f0ba.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d0580145c5efff9f0bb.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d059dbb375851064d18.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d05c66ff74e2f1de138.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d05cdc648872f92af8f.jpeg", cat: "Moments" },
  { src: "/images/gallery/679a8d05d6e977f48b43a8c8.jpeg", cat: "Moments" },
  { src: "/images/gallery/669991f5f3f1c409d5f4129f.webp", cat: "Onboard" },
  { src: "/images/gallery/669991fafaf1807b72bcf4ae.webp", cat: "Onboard" },
  { src: "/images/gallery/669991ff21005a0fa550d71c.webp", cat: "Onboard" },
  { src: "/images/gallery/667df7e30ec82103ea6bd236.webp", cat: "Onboard" },
  { src: "/images/gallery/669711015f08bcfca7889e47.webp", cat: "Onboard" },
  { src: "/images/gallery/6697125be1b559680b719358.webp", cat: "Onboard" },
  { src: "/images/gallery/6699841421005a380d50c378.jpeg", cat: "Onboard" },
  { src: "/images/gallery/669984144d63030143fccf7a.jpeg", cat: "Onboard" },
  { src: "/images/gallery/669984144d63031abcfccf7d.jpeg", cat: "Onboard" },
  { src: "/images/gallery/669984144d63036856fccf7c.jpeg", cat: "Onboard" },
  { src: "/images/gallery/669984145f2569065123e031.jpeg", cat: "Onboard" },
  { src: "/images/gallery/669984145f2569691523e032.jpeg", cat: "Onboard" },
  { src: "/images/gallery/66998414763d6d45cb01b9fb.jpeg", cat: "Onboard" },
  { src: "/images/gallery/6699841480329d3a96849a50.jpeg", cat: "Onboard" },
  { src: "/images/gallery/66998414b998f52b1dd19c6f.jpeg", cat: "Onboard" },
  { src: "/images/gallery/66998414b998f5f12bd19c6e.jpeg", cat: "Onboard" },
  { src: "/images/gallery/66998414f3f1c4052df406ee.jpeg", cat: "Onboard" },
  { src: "/images/gallery/66998414faf180893ebce78d.jpeg", cat: "Onboard" },
  { src: "/images/gallery/66998414fe542b83044544f8.jpeg", cat: "Onboard" },
  { src: "/images/gallery/66998414fe542bab6d4544f7.jpeg", cat: "Onboard" },
  { src: "/images/gallery/67aa34929957468281070998.jpeg", cat: "Destinations" },
  { src: "/images/gallery/67aa352337cca1ead0205ad5.jpeg", cat: "Destinations" },
  { src: "/images/gallery/679a8cc6714dc0200f23a601.jpeg", cat: "Destinations" },
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

/* ─── Lazy image card ─── */
const GalleryCard = ({ src, index, onOpen }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className="relative group overflow-hidden rounded-2xl bg-gray-200 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-4 break-inside-avoid"
      onClick={() => onOpen(index)}
    >
      {!loaded && (
        <div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-2xl" />
      )}
      <img
        src={src}
        alt={`Gallery ${index + 1}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full object-cover transition-all duration-500 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0 absolute inset-0"}`}
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
