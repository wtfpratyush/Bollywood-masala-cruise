import React, { useState, useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft, Star, ChevronDown, Phone, Ship, Calendar, Check,
} from "lucide-react";
import Layout from "../components/Layout";
import { popularCruises, allPackages } from "../mock";
import { useToast } from "../hooks/use-toast";

/* ── Lazy background section: only sets bg-image when in viewport ── */
const LazyBgSection = ({ imageUrl, className, children, id }) => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLoaded(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transition-all duration-500`}
      style={loaded ? { backgroundImage: `url('${imageUrl}')`, backgroundSize: "cover", backgroundPosition: "center" } : { backgroundColor: "#0f0f2e" }}
    >
      {children}
    </section>
  );
};

/* ── Lazy image with blur-up placeholder ── */
const LazyImg = ({ src, alt, className, eager = false }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      {/* Placeholder shimmer */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-inherit" />
      )}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

/* ── helpers ── */
const StarRow = ({ count = 5 }) => (
  <span className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={13} fill="#f5a623" className="text-[#f5a623]" />
    ))}
  </span>
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

const SectionHeading = ({ label, title, light = false, center = true }) => (
  <div className={`mb-8 ${center ? "text-center" : ""}`}>
    <p className={`text-[11px] font-black tracking-[0.22em] uppercase mb-1 ${light ? "text-amber-300" : "text-[#4b3df5]"}`}>
      {label}
    </p>
    <h2 className={`text-[22px] sm:text-[28px] font-black leading-tight ${light ? "text-white" : "text-[#1a1a3a]"}`}>
      {title}
    </h2>
  </div>
);

/* ─────────────────────────────────────────────────────── */
const CruiseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const all = [...(popularCruises || []), ...(allPackages || [])];
  const cruise = all.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "") === slug
  );

  const book = () =>
    toast({
      title: `Booking: ${cruise?.title}`,
      description: "Our team will contact you to confirm your booking.",
    });

  if (!cruise || !cruise.details) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <p className="text-[#1a1a3a] text-xl font-bold">Cruise not found.</p>
          <Link to="/packages" className="text-[#4b3df5] underline font-semibold">
            ← Back to Packages
          </Link>
        </div>
      </Layout>
    );
  }

  const d = cruise.details;
  const sections = ["Overview", "Itinerary", "Accommodation", "Entertainment", "Dining", "Testimonials", "Gallery", "FAQ"];

  const scrollTo = (id) => {
    const el = document.getElementById(`cs-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      {/* ── Hero Banner — eager loaded (above fold) ── */}
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden bg-gray-900">
        <img
          src={d.banner}
          alt={cruise.title}
          loading="eager"
          decoding="async"
          fetchpriority="high"
          className="w-full h-full object-cover scale-105"
          style={{ transformOrigin: "center top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-black/70 transition-all z-10"
        >
          <ArrowLeft size={15} /> Back
        </button>

        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-20 pb-8 max-w-6xl mx-auto w-full">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 rounded-md bg-[#f5a623] text-white text-[11px] font-black tracking-wide">
              {cruise.tag}
            </span>
            <span className="px-3 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1">
              <Calendar size={11} /> {d.dates}
            </span>
            <span className="px-3 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1">
              <Ship size={11} /> {d.ship}
            </span>
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-black text-white leading-tight mb-2">
            {cruise.title}
          </h1>
          <p className="text-[14px] sm:text-[16px] text-white/80 max-w-2xl">{d.tagline}</p>
        </div>
      </div>

      {/* ── Sticky Section Nav ── */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2.5" style={{ scrollbarWidth: "none" }}>
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="px-4 py-2 rounded-full text-[12px] font-bold whitespace-nowrap transition-all text-gray-500 hover:text-[#4b3df5] hover:bg-indigo-50"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-0">

        {/* ── 1. OVERVIEW ── */}
        <section id="cs-Overview" className="py-14 border-b border-gray-100">
          <SectionHeading label="WHAT YOU GET" title="An All-Inclusive Cruise Experience" />
          <p className="text-[15px] text-gray-600 text-center max-w-2xl mx-auto leading-relaxed mb-10">
            When we say all-inclusive, we mean it! Whatever package you sign up for ensures you enjoy every moment worry-free.
            Enjoy sumptuous meals, unwind in luxurious accommodations, and have fun with endless entertainment and activities.
            Get ready to make unforgettable memories—everything's taken care of, so you can simply relax and enjoy!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
            {[
              { icon: "🍽️", label: "Meals", sub: "Feast on delicious Indian veg and non-veg meals" },
              { icon: "🛏️", label: "Accommodation", sub: "Relax in your luxurious room" },
              { icon: "🎶", label: "Entertainment", sub: "Endless entertainment all day long" },
              { icon: "🎭", label: "Activities", sub: "Exciting games, shows & experiences" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all shadow-sm"
              >
                <span className="text-4xl mb-3">{item.icon}</span>
                <p className="text-[15px] font-bold text-[#1a1a3a]">{item.label}</p>
                <p className="text-[12px] text-gray-500 mt-1 leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={book}
              className="rounded-xl bg-[#f5a623] px-8 py-3.5 text-[15px] font-bold text-white hover:bg-[#e5981a] transition-all shadow-lg shadow-orange-300/30"
            >
              Request Pricing
            </button>
            <a
              href="tel:5879824004"
              className="rounded-xl border-2 border-[#4b3df5] px-6 py-3.5 text-[14px] font-bold text-[#4b3df5] hover:bg-[#4b3df5] hover:text-white transition-all flex items-center gap-2"
            >
              <Phone size={15} /> 587-982-4004
            </a>
          </div>
        </section>

        {/* ── 2. ITINERARY ── */}
      </div>

      <section
        id="cs-Itinerary"
        className="relative py-14 overflow-hidden"
        style={
          cruise.title === "Holi Cruise"
            ? {
                backgroundImage: `url('https://images.unsplash.com/photo-1547153760-18fc86324498?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : { backgroundColor: "#4b3df5" }
        }
      >
        {/* Overlay: light white wash for Holi, dark for others */}
        <div
          className="absolute inset-0"
          style={
            cruise.title === "Holi Cruise"
              ? { backgroundColor: "rgba(255,255,255,0.22)" }
              : { backgroundColor: "rgba(0,0,0,0)" }
          }
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-8 text-center`}>
            <p
              className="text-[11px] font-black tracking-[0.22em] uppercase mb-1"
              style={cruise.title === "Holi Cruise" ? { color: "#7c3aed" } : { color: "#fcd34d" }}
            >
              WHERE WE'RE GOING
            </p>
            <h2
              className="text-[22px] sm:text-[28px] font-black leading-tight"
              style={cruise.title === "Holi Cruise" ? { color: "#1a1a3a" } : { color: "#ffffff" }}
            >
              {cruise.title === "Holi Cruise"
                ? "An unforgettable week of fun, excitement, and Bollywood magic"
                : `An unforgettable ${cruise.subtitle?.split("|")[0]?.trim()?.toLowerCase() || ""} of fun, excitement & Bollywood magic`}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-6">
            {d.itinerary.map((stop) => (
              <div key={stop.day + stop.port} className="flex flex-col items-center group">
                <div
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 transition-all shadow-xl mb-3 shrink-0"
                  style={
                    cruise.title === "Holi Cruise"
                      ? { borderColor: "rgba(255,255,255,0.8)" }
                      : { borderColor: "rgba(255,255,255,0.3)" }
                  }
                >
                  <LazyImg
                    src={stop.image}
                    alt={stop.port}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p
                  className="text-[11px] font-black uppercase tracking-wider"
                  style={cruise.title === "Holi Cruise" ? { color: "#7c3aed" } : { color: "#fcd34d" }}
                >
                  {stop.day}
                </p>
                <p
                  className="text-[12px] font-semibold text-center leading-snug mt-0.5"
                  style={cruise.title === "Holi Cruise" ? { color: "#1a1a3a" } : { color: "#ffffff" }}
                >
                  {stop.port}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 3. ACCOMMODATION ── */}
        <section id="cs-Accommodation" className="py-14 border-b border-gray-100">
          <SectionHeading label="ACCOMMODATION" title="Your Luxurious Home at Sea" />
          <div className="space-y-8">
            {d.rooms.map((room, idx) => (
              <div
                key={room.name}
                className={`flex flex-col ${idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all`}
              >
                <div className="sm:w-[45%] min-h-[220px] overflow-hidden bg-gray-100">
                  <LazyImg src={room.image} alt={room.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center p-7 sm:p-10">
                  <h3 className="text-[22px] font-black text-[#1a1a3a] mb-3">{room.name}</h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed mb-6">{room.desc}</p>
                  <button
                    onClick={book}
                    className="self-start rounded-xl bg-[#f5a623] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#e5981a] transition-all"
                  >
                    Request Pricing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── 4. ENTERTAINMENT — lazy bg ── */}
      <LazyBgSection
        id="cs-Entertainment"
        imageUrl="https://images.unsplash.com/photo-1628336707631-68131ca720c3?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200"
        className="relative py-16"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[11px] font-black tracking-[0.22em] uppercase text-amber-300 mb-1">ENTERTAINMENT</p>
            <h2 className="text-[26px] sm:text-[32px] font-black text-white">
              All This and More Awaits<br />You on Our Itinerary!
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {d.activities.map((act) => (
              <div
                key={act.name}
                className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all"
              >
                <span className="text-4xl mb-3">{act.icon}</span>
                <p className="text-[14px] font-bold text-white">{act.name}</p>
                <p className="text-[12px] text-white/70 mt-1 leading-snug">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LazyBgSection>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 5. DINING ── */}
        <section id="cs-Dining" className="py-14 border-b border-gray-100">
          <SectionHeading label="FOOD" title="Delicious Dining Options" center={false} />
          <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-gray-100 shadow-sm mt-4">
            <div className="sm:w-[45%] min-h-[240px] overflow-hidden bg-gray-100">
              <LazyImg src={d.diningImage} alt="Dining" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center p-7 sm:p-10">
              <p className="text-[15px] text-gray-600 leading-relaxed mb-6">{d.diningDesc}</p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Authentic Indian Vegetarian Menu",
                  "Non-Vegetarian & Jain Options",
                  "International Gourmet Cuisine",
                  "24-Hour Room Service",
                  "Themed Dinner Nights",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[14px] text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-[#4b3df5] flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={book}
                className="self-start rounded-xl bg-[#f5a623] px-6 py-3 text-[14px] font-bold text-white hover:bg-[#e5981a] transition-all"
              >
                Request Pricing
              </button>
            </div>
          </div>
        </section>

        {/* ── 6. TESTIMONIALS ── */}
        <section id="cs-Testimonials" className="py-14 border-b border-gray-100">
          <SectionHeading label="TESTIMONIALS" title="What Our Guests Have to Say" />
          <div className="grid sm:grid-cols-3 gap-5">
            {d.testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all bg-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-100 shrink-0 bg-gray-100">
                    <LazyImg
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#1a1a3a]">{t.name}</p>
                    <StarRow count={t.rating} />
                  </div>
                </div>
                <p className="text-[13px] text-gray-600 leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Book Now Banner — lazy bg ── */}
      <LazyBgSection
        imageUrl="https://images.unsplash.com/photo-1583157048761-ac1dba033233?crop=entropy&cs=srgb&fm=jpg&q=80&w=1200"
        className="relative py-16 text-center"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-xl mx-auto px-4">
          <h2 className="text-[28px] sm:text-[34px] font-black text-white mb-3">Book Now!</h2>
          <p className="text-[14px] text-white/80 mb-7 leading-relaxed">
            Ready for the adventure of a lifetime? Book your all-inclusive cruise now and sail into unforgettable experiences!
          </p>
          <button
            onClick={book}
            className="rounded-xl bg-[#f5a623] px-10 py-4 text-[16px] font-bold text-white hover:bg-[#e5981a] transition-all shadow-xl shadow-orange-500/20"
          >
            Request Pricing
          </button>
        </div>
      </LazyBgSection>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 7. FAQ ── */}
        <section id="cs-FAQ" className="py-14 border-b border-gray-100">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" />
          <p className="text-center text-[13px] text-gray-500 mb-8 -mt-4">
            Have additional questions?{" "}
            <Link to="/contact" className="text-[#4b3df5] font-bold hover:underline">
              Contact Us!
            </Link>
          </p>
          <div className="max-w-2xl mx-auto space-y-3">
            {d.faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* ── 8. GALLERY ── */}
        <section id="cs-Gallery" className="py-14">
          <SectionHeading label="GALLERY" title="Get a Glimpse of Our Cruise" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {d.gallery.map((src, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <LazyImg
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all" />
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Sticky Bottom Bar ── */}
      <div className="sticky bottom-0 z-40 bg-white border-t border-gray-200 shadow-lg px-4 sm:px-10 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-[12px] text-gray-400">Starting from</p>
            <p className="text-[26px] font-black text-[#4b3df5] leading-none">
              {cruise.price}{" "}
              <span className="text-[13px] font-medium text-gray-400">per person</span>
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <Link
              to="/packages"
              className="hidden sm:flex items-center gap-1.5 px-5 py-3 rounded-xl border border-gray-200 text-[13px] font-semibold text-gray-500 hover:border-[#4b3df5] hover:text-[#4b3df5] transition-all"
            >
              <ArrowLeft size={14} /> All Packages
            </Link>
            <button
              onClick={book}
              className="px-7 py-3 rounded-xl bg-[#f5a623] text-[15px] font-bold text-white hover:bg-[#e5981a] transition-all shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default CruiseDetail;
