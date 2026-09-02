import React, { useState } from "react";
import { X, Star, ChevronDown, Phone, Ship, Calendar, MapPin, Utensils, BedDouble, Zap, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const StarRating = ({ count = 5 }) => (
  <span className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={14} fill="#f5a623" className="text-[#f5a623]" />
    ))}
  </span>
);

const SectionTitle = ({ label, title, light = false }) => (
  <div className="text-center mb-8">
    <p className={`text-[12px] font-black tracking-[0.2em] uppercase mb-1 ${light ? "text-amber-300" : "text-[#4b3df5]"}`}>
      {label}
    </p>
    <h3 className={`text-[22px] sm:text-[28px] font-black ${light ? "text-white" : "text-[#1a1a3a]"}`}>
      {title}
    </h3>
  </div>
);

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-all"
      >
        <span className="text-[14px] font-semibold text-[#1a1a3a] pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#4b3df5] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 pb-4 text-[13px] text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-gray-50">
          {a}
        </div>
      )}
    </div>
  );
};

const CruiseDetailModal = ({ cruise, onClose, onBook }) => {
  // All hooks must be before any early returns
  const [activeSection, setActiveSection] = useState("Overview");

  const d = cruise.details;
  if (!d) return null;

  // Sections for sticky nav
  const sections = ["Overview", "Itinerary", "Accommodation", "Entertainment", "Dining", "Testimonials", "Gallery", "FAQ"];

  const scrollTo = (id) => {
    const el = document.getElementById(`cruise-section-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4 overflow-hidden">
      <div className="relative bg-white w-full max-w-4xl max-h-screen sm:max-h-[92vh] rounded-t-3xl sm:rounded-3xl flex flex-col shadow-2xl overflow-hidden">

        {/* ── Hero Banner ── */}
        <div className="relative h-52 sm:h-60 shrink-0 overflow-hidden">
          <img src={d.banner} alt={cruise.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-all z-10"
          >
            <X size={18} />
          </button>

          {/* Banner content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#f5a623] text-white text-[11px] font-black tracking-wide">
                {cruise.tag}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1">
                <Calendar size={11} /> {d.dates}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1">
                <Ship size={11} /> {d.ship}
              </span>
            </div>
            <h2 className="text-[24px] sm:text-[30px] font-black text-white leading-tight">
              {cruise.title}
            </h2>
            <p className="text-[13px] text-white/80 mt-1 max-w-2xl line-clamp-2">{d.tagline}</p>
          </div>
        </div>

        {/* ── Sticky Section Nav ── */}
        <div className="shrink-0 bg-white border-b border-gray-100 overflow-x-auto">
          <div className="flex gap-1 px-4 py-2.5">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap transition-all ${
                  activeSection === s
                    ? "bg-[#4b3df5] text-white"
                    : "text-gray-500 hover:text-[#4b3df5] hover:bg-indigo-50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* ── Scrollable Body ── */}
        <div className="flex-1 overflow-y-auto">

          {/* ── 1. Overview ── */}
          <div id="cruise-section-Overview" className="px-5 sm:px-8 py-8 border-b border-gray-100">
            <SectionTitle label="WHAT YOU GET" title="An All-Inclusive Cruise Experience" />
            <p className="text-[15px] text-gray-600 text-center max-w-2xl mx-auto leading-relaxed mb-8">
              When we say all-inclusive, we mean it! Whatever package you sign up for ensures you enjoy every moment worry-free. Enjoy sumptuous meals, unwind in luxurious accommodations, and have fun with endless entertainment and activities. Get ready to make unforgettable memories—everything's taken care of, so you can simply relax and enjoy!
            </p>
            {/* Included icons grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { icon: "🍽️", label: "Meals", sub: "Feast on delicious Indian veg and non-veg meals" },
                { icon: "🛏️", label: "Accommodation", sub: "Relax in your luxurious room" },
                { icon: "🎶", label: "Entertainment", sub: "Endless entertainment" },
                { icon: "🎭", label: "Activities", sub: "Exciting activities like game shows" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center p-4 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all">
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <p className="text-[14px] font-bold text-[#1a1a3a]">{item.label}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">{item.sub}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={onBook}
                className="rounded-xl bg-[#f5a623] px-7 py-3 text-[15px] font-bold text-white hover:bg-[#e5981a] transition-all shadow-lg shadow-orange-400/20"
              >
                Request Pricing
              </button>
              <a
                href="tel:5879824004"
                className="rounded-xl border-2 border-[#4b3df5] px-6 py-3 text-[14px] font-bold text-[#4b3df5] hover:bg-[#4b3df5] hover:text-white transition-all flex items-center gap-2"
              >
                <Phone size={15} /> 587-982-4004
              </a>
            </div>
          </div>

          {/* ── 2. Itinerary ── */}
          <div id="cruise-section-Itinerary" className="bg-[#4b3df5] px-5 sm:px-8 py-10 border-b border-indigo-700">
            <SectionTitle label="WHERE WE'RE GOING" title={`An unforgettable ${cruise.subtitle.split("|")[0].trim().toLowerCase()} of fun, excitement, and Bollywood magic`} light />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {d.itinerary.map((stop) => (
                <div key={stop.day + stop.port} className="flex flex-col items-center group">
                  <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-white/30 group-hover:border-amber-400 transition-all shadow-lg mb-3">
                    <img src={stop.image} alt={stop.port} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="text-[11px] font-black text-amber-300 uppercase tracking-wider">{stop.day}</p>
                  <p className="text-[12px] font-semibold text-white text-center leading-snug">{stop.port}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 3. Accommodation ── */}
          <div id="cruise-section-Accommodation" className="px-5 sm:px-8 py-10 border-b border-gray-100">
            <SectionTitle label="ACCOMMODATION" title="Your Luxurious Home at Sea" />
            <div className="space-y-6">
              {d.rooms.map((room, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={room.name} className={`flex flex-col sm:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all ${isLeft ? "" : "sm:flex-row-reverse"}`}>
                    <div className="sm:w-[45%] aspect-[4/3] sm:aspect-auto overflow-hidden bg-gray-100">
                      <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center p-6 sm:p-8">
                      <h4 className="text-[20px] font-black text-[#1a1a3a] mb-2">{room.name}</h4>
                      <p className="text-[14px] text-gray-500 leading-relaxed mb-5">{room.desc}</p>
                      <button onClick={onBook} className="self-start rounded-xl bg-[#f5a623] px-5 py-2.5 text-[13px] font-bold text-white hover:bg-[#e5981a] transition-all">
                        Request Pricing
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 4. Entertainment / Activities ── */}
          <div
            id="cruise-section-Entertainment"
            style={{ backgroundImage: "url('/images/gallery/gallery-night-deck.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            className="relative px-5 sm:px-8 py-12 border-b border-gray-800"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/70" />
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-[22px] sm:text-[28px] font-black text-white">
                  All This and More Awaits<br />You on Our Itinerary!
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {d.activities.map((act) => (
                  <div key={act.name} className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all">
                    <span className="text-3xl mb-2">{act.icon}</span>
                    <p className="text-[14px] font-bold text-white">{act.name}</p>
                    <p className="text-[11px] text-white/70 mt-1 leading-tight">{act.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── 5. Dining ── */}
          <div id="cruise-section-Dining" className="px-5 sm:px-8 py-10 border-b border-gray-100">
            <div className="mb-2">
              <p className="text-[12px] font-black tracking-[0.2em] text-[#4b3df5] uppercase">FOOD</p>
              <h3 className="text-[22px] font-black text-[#1a1a3a]">Delicious Dining Options</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 mt-5 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="sm:w-[45%] aspect-[4/3] sm:aspect-auto overflow-hidden bg-gray-100">
                <img src={d.diningImage} alt="Dining" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-center p-6">
                <p className="text-[15px] text-gray-600 leading-relaxed mb-5">{d.diningDesc}</p>
                <ul className="space-y-2 mb-5">
                  {["Authentic Indian Vegetarian Menu", "Non-Vegetarian & Jain Options", "International Gourmet Cuisine", "24-Hour Room Service", "Themed Dinner Nights"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-[#4b3df5]/10 text-[#4b3df5] flex items-center justify-center text-[10px] shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={onBook} className="self-start rounded-xl bg-[#f5a623] px-5 py-2.5 text-[13px] font-bold text-white hover:bg-[#e5981a] transition-all">
                  Request Pricing
                </button>
              </div>
            </div>
          </div>

          {/* ── 6. Testimonials ── */}
          <div id="cruise-section-Testimonials" className="bg-white px-5 sm:px-8 py-10 border-b border-gray-100">
            <SectionTitle label="TESTIMONIALS" title="What Our Guests Have to Say" />
            <div className="grid sm:grid-cols-3 gap-5">
              {d.testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100" />
                    <div>
                      <p className="text-[14px] font-bold text-[#1a1a3a]">{t.name}</p>
                      <StarRating count={t.rating} />
                    </div>
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed">"{t.text}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── 7. Book Now CTA ── */}
          <div
            className="relative px-5 sm:px-8 py-12 border-b border-gray-800 text-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583157048761-ac1dba033233?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10">
              <h3 className="text-[26px] font-black text-white mb-2">Book Now!</h3>
              <p className="text-[14px] text-white/80 mb-6">Ready for the adventure of a lifetime? Book your all-inclusive cruise now and sail into unforgettable experiences!</p>
              <button
                onClick={onBook}
                className="rounded-xl bg-[#f5a623] px-8 py-3.5 text-[16px] font-bold text-white hover:bg-[#e5981a] transition-all shadow-xl"
              >
                Request Pricing
              </button>
            </div>
          </div>

          {/* ── 8. FAQ ── */}
          <div id="cruise-section-FAQ" className="px-5 sm:px-8 py-10 border-b border-gray-100">
            <SectionTitle label="FAQ" title="Frequently Asked Questions" />
            <p className="text-center text-[13px] text-gray-500 mb-6 -mt-4">
              Have additional questions?{" "}
              <Link to="/contact" onClick={onClose} className="text-[#4b3df5] font-bold hover:underline">
                Contact Us!
              </Link>
            </p>
            <div className="max-w-2xl mx-auto space-y-3">
              {d.faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>

          {/* ── 9. Gallery ── */}
          <div id="cruise-section-Gallery" className="px-5 sm:px-8 py-10">
            <SectionTitle label="GALLERY" title="Get a Glimpse of Our Cruise" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {d.gallery.map((src, idx) => (
                <div key={idx} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Sticky Bottom Book Bar ── */}
        <div className="shrink-0 bg-white border-t border-gray-100 px-5 sm:px-8 py-4 flex items-center justify-between">
          <div>
            <p className="text-[12px] text-gray-400">Starting from</p>
            <p className="text-[24px] font-black text-[#4b3df5] leading-none">{cruise.price} <span className="text-[13px] font-medium text-gray-400">per person</span></p>
          </div>
          <div className="flex gap-3">
            <button onClick={onClose} className="px-4 py-2.5 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-600 hover:border-[#4b3df5] hover:text-[#4b3df5] transition-all">
              Close
            </button>
            <button onClick={onBook} className="px-6 py-2.5 rounded-xl bg-[#f5a623] text-[14px] font-bold text-white hover:bg-[#e5981a] transition-all shadow-md">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CruiseDetailModal;
