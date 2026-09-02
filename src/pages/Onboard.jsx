import React, { useState } from "react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import {
  Footprints, Music2, Dices, Drama, PartyPopper, Mic, Gamepad2,
  ChefHat, Waves, Sunset, Sparkles, Users, Star, Heart, Camera,
  Clock, MapPin, Shield, Wifi, BedDouble, Coffee, Wind
} from "lucide-react";

/* ─── Inline lazy image with shimmer ─── */
const LazyImg = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full">
      {!loaded && <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />}
      <img
        src={src} alt={alt} loading="lazy" decoding="async"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

/* ─── Section label + heading ─── */
const SectionHead = ({ label, title, subtitle, light = false, center = true }) => (
  <div className={`mb-10 ${center ? "text-center" : ""}`}>
    <p className={`text-[11px] font-black tracking-[0.22em] uppercase mb-2 ${light ? "text-amber-300" : "text-[#4b3df5]"}`}>{label}</p>
    <h2 className={`text-[26px] sm:text-[34px] font-black leading-tight ${light ? "text-white" : "text-[#1a1a3a]"}`}>{title}</h2>
    {subtitle && <p className={`mt-3 text-[15px] max-w-2xl ${center ? "mx-auto" : ""} leading-relaxed ${light ? "text-white/70" : "text-gray-500"}`}>{subtitle}</p>}
  </div>
);

/* ─── Star rating ─── */
const Stars = ({ n = 5 }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: n }).map((_, i) => <Star key={i} size={13} fill="#f5a623" className="text-[#f5a623]" />)}
  </div>
);

/* ─── Data ─── */
const activities = [
  { icon: "🪷", name: "Mehndi Night", desc: "Adorn your hands with beautiful henna art and bond with fellow travellers." },
  { icon: "🎵", name: "Antakshari", desc: "Sing your heart out in this beloved Bollywood song competition." },
  { icon: "🎲", name: "Tambola", desc: "Try your luck with exciting prizes up for grabs every evening." },
  { icon: "💃", name: "Dance Showcase", desc: "Watch incredible choreographed Bollywood performances by talented artists." },
  { icon: "🎉", name: "Bollywood Party", desc: "Dance the night away under the stars to your favourite Bollywood beats." },
  { icon: "🎤", name: "Open Mic & Karaoke", desc: "Step on stage and show off your singing talent in front of a live crowd." },
  { icon: "🕹️", name: "Games Night", desc: "Enjoy fun classic party games and challenges with new friends." },
  { icon: "🌅", name: "Sunrise Deck Walk", desc: "Start your mornings with a peaceful scenic walk on the open deck." },
  { icon: "🎭", name: "Live Comedy Show", desc: "Laugh out loud at stand-up sets by top Indian comedians." },
  { icon: "🏆", name: "Talent Show", desc: "Compete or cheer on guests in the ultimate onboard talent competition." },
  { icon: "🌺", name: "Garba on Deck", desc: "Celebrate with traditional garba dancing under the open sky." },
  { icon: "🍹", name: "Welcome Cocktail", desc: "Kick off your voyage with a signature welcome drink and mixer party." },
];

const diningOptions = [
  {
    name: "Indian Buffet",
    desc: "An elaborate spread of authentic North and South Indian vegetarian dishes prepared fresh every day.",
    tag: "Vegetarian",
    tagColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?crop=entropy&cs=srgb&fm=jpg&q=80&w=600",
  },
  {
    name: "Non-Veg Grill",
    desc: "Succulent tandoori, tikkas, kebabs, and coastal seafood prepared by our master chefs.",
    tag: "Non-Veg",
    tagColor: "bg-red-100 text-red-700",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "International Cuisine",
    desc: "A global menu featuring continental favourites, Asian delicacies, and Jain-friendly options.",
    tag: "International",
    tagColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=srgb&fm=jpg&q=80&w=600",
  },
  {
    name: "Dessert & Chai Bar",
    desc: "Indulge in Indian sweets, gulab jamun, kheer, and unlimited masala chai at any hour.",
    tag: "Sweet Corner",
    tagColor: "bg-amber-100 text-amber-700",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?crop=entropy&cs=srgb&fm=jpg&q=80&w=600",
  },
];

const amenities = [
  { icon: BedDouble, title: "Luxury Cabins", desc: "Spacious inside rooms, balcony rooms, and premium suites with ocean views." },
  { icon: Wifi, title: "Onboard WiFi", desc: "Stay connected with high-speed internet available across the ship." },
  { icon: Coffee, title: "24/7 Room Service", desc: "Cravings at midnight? Our team is always ready to serve you." },
  { icon: Shield, title: "Medical Centre", desc: "Fully equipped medical facility with doctors and nurses on duty round the clock." },
  { icon: Wind, title: "Spa & Wellness", desc: "Rejuvenate with massages, yoga sessions, and a relaxing steam room." },
  { icon: Camera, title: "Photo & Video", desc: "Professional photographers capture your memories throughout the voyage." },
  { icon: Users, title: "Kids' Club", desc: "Dedicated activities and supervision for children of all ages." },
  { icon: MapPin, title: "Shore Excursions", desc: "Guided tours and experiences at every destination port we visit." },
];

const schedule = [
  { time: "7:00 AM", event: "Sunrise Yoga & Deck Walk", icon: "🌅", type: "wellness" },
  { time: "8:30 AM", event: "Breakfast Buffet Opens", icon: "🍳", type: "dining" },
  { time: "11:00 AM", event: "Pool Party & Deck Games", icon: "🏊", type: "fun" },
  { time: "1:00 PM", event: "Lunch Service", icon: "🍽️", type: "dining" },
  { time: "3:00 PM", event: "Tambola / Antakshari", icon: "🎲", type: "fun" },
  { time: "5:30 PM", event: "Sunset Cocktail Hour", icon: "🌇", type: "social" },
  { time: "7:30 PM", event: "Gala Dinner & Live Music", icon: "🎶", type: "dining" },
  { time: "9:30 PM", event: "Bollywood Dance Party / Show", icon: "💃", type: "fun" },
  { time: "11:30 PM", event: "Late Night Chai & Snacks", icon: "🍹", type: "dining" },
];

const typeColors = {
  wellness: "bg-emerald-50 border-emerald-200 text-emerald-700",
  dining:   "bg-amber-50 border-amber-200 text-amber-700",
  fun:      "bg-purple-50 border-purple-200 text-purple-700",
  social:   "bg-blue-50 border-blue-200 text-blue-700",
};

const testimonials = [
  { name: "Sanjay & Kavitha", avatar: "https://i.pravatar.cc/80?img=15", rating: 5, text: "The Bollywood party on night 3 was absolutely electric. The DJ kept the crowd going till 2 AM! Best cruise experience we've ever had." },
  { name: "Priya Mehta", avatar: "https://i.pravatar.cc/80?img=47", rating: 5, text: "Mehndi night was so beautifully organised. Made so many friends. The food was out of this world — especially the chai bar!" },
  { name: "Rohan Verma", avatar: "https://i.pravatar.cc/80?img=12", rating: 5, text: "Tambola at sea — who knew?! We won a prize too. Every evening had something amazing planned. Truly unforgettable." },
  { name: "Ananya S.", avatar: "https://i.pravatar.cc/80?img=25", rating: 5, text: "Sunrise yoga on the deck with the ocean breeze is something I'll never forget. Perfectly balanced between relaxation and non-stop fun." },
  { name: "Deepak Nair", avatar: "https://i.pravatar.cc/80?img=11", rating: 5, text: "The live comedy show had us in tears of laughter. Everything was so well curated — felt like a 5-star Bollywood festival at sea!" },
  { name: "Meera Iyer", avatar: "https://i.pravatar.cc/80?img=44", rating: 5, text: "My parents joined us and they absolutely loved the garba on deck. The crew made every single person feel so special and welcome." },
];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1628336707631-68131ca720c3?crop=entropy&cs=srgb&fm=jpg&q=80&w=700", label: "Bollywood Party Night" },
  { src: "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=srgb&fm=jpg&q=80&w=700", label: "Live Stage Performance" },
  { src: "https://images.pexels.com/photos/24643916/pexels-photo-24643916.jpeg?auto=compress&cs=tinysrgb&w=700", label: "Gourmet Dining" },
  { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=srgb&fm=jpg&q=80&w=700", label: "Concert Lights" },
  { src: "https://images.unsplash.com/photo-1579592672790-39239b6cbc31?crop=entropy&cs=srgb&fm=jpg&q=80&w=700", label: "Pool Deck at Sunset" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=srgb&fm=jpg&q=80&w=700", label: "Ocean Views" },
];

/* ════════════════════════════════════════════════════════ */
const Onboard = () => {
  return (
    <Layout>
      <PageBanner
        title="Onboard Experience"
        crumb="Onboard Experience"
        bgImage="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwbGlnaHRzfGVufDB8fHx8MTc4Nzc0ODIzM3ww&ixlib=rb-4.1.0&q=85"
        subtitle="From Bollywood nights to sunrise deck walks — every moment aboard is crafted for joy."
      />

      {/* ═══════════════════════════════════════════════
          1. ACTIVITIES GRID
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            label="ONBOARD ACTIVITIES"
            title="All This and More Awaits You on Our Itinerary!"
            subtitle="Every day at sea is packed with handpicked experiences that blend Bollywood magic with unforgettable fun."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {activities.map((act) => (
              <div
                key={act.name}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{act.icon}</span>
                <p className="text-[15px] font-bold text-[#1a1a3a] mb-1">{act.name}</p>
                <p className="text-[12px] text-gray-500 leading-snug">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. DAILY SCHEDULE TIMELINE
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#f7f7ff] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            label="YOUR DAY AT SEA"
            title="A Typical Day on the Bollywood Masala Cruise"
            subtitle="No two days are the same, but here's a taste of what a perfect day aboard looks like."
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-indigo-100 hidden sm:block" />
            <div className="space-y-5">
              {schedule.map((item, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div key={item.event} className={`flex gap-4 items-center sm:items-stretch ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    {/* Content card */}
                    <div className={`flex-1 flex ${isLeft ? "sm:justify-end" : "sm:justify-start"}`}>
                      <div className={`flex items-start gap-3 bg-white rounded-2xl border px-5 py-4 shadow-sm max-w-sm w-full hover:shadow-md transition-all ${typeColors[item.type]}`}>
                        <span className="text-2xl mt-0.5 shrink-0">{item.icon}</span>
                        <div>
                          <p className="text-[11px] font-black tracking-widest uppercase opacity-60 mb-0.5">{item.time}</p>
                          <p className="text-[15px] font-bold text-[#1a1a3a]">{item.event}</p>
                        </div>
                      </div>
                    </div>

                    {/* Centre dot (desktop) */}
                    <div className="hidden sm:flex shrink-0 w-4 items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[#4b3df5] ring-4 ring-indigo-100" />
                    </div>

                    {/* Empty spacer on other side */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. DINING SECTION
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            label="FOOD & DINING"
            title="Delicious Dining — A Feast for Every Craving"
            subtitle="From authentic Indian meals to international cuisine, every dish is crafted with love and served with warmth."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diningOptions.map((item) => (
              <div key={item.name} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="h-48 overflow-hidden bg-gray-100">
                  <LazyImg src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${item.tagColor} mb-3 inline-block`}>{item.tag}</span>
                  <h3 className="text-[17px] font-black text-[#1a1a3a] mb-2">{item.name}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. HERO EXPERIENCE SPLIT — BOLLYWOOD NIGHTS
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#141452] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <p className="text-[11px] font-black tracking-[0.22em] uppercase text-amber-300 mb-3">THE BOLLYWOOD MAGIC</p>
              <h2 className="text-[30px] sm:text-[38px] font-black text-white leading-tight mb-5">
                Nights at Sea Like<br />You've Never Seen Before
              </h2>
              <p className="text-[15px] text-white/70 leading-relaxed mb-7">
                As the sun dips below the horizon, the ship transforms into an electric celebration of Bollywood. From live bands 
                playing your favourite tracks to breathtaking dance performances, mehndi ceremonies, garba on the deck, and DJ nights 
                that go past midnight — our evenings are nothing short of legendary.
              </p>
              <ul className="space-y-3 mb-8">
                {["Live Bollywood Band Every Evening", "Guest DJ Sets & Dance Floor", "Mehndi & Sangeet Night", "Garba Under the Open Sky", "Comedy & Talent Shows", "Special Theme Nights"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[14px] text-white/80">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 text-[10px] font-black">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/packages" className="inline-block rounded-xl bg-[#f5a623] px-7 py-3.5 text-[15px] font-bold text-white hover:bg-[#e5981a] transition-all">
                View Cruise Packages
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1628336707631-68131ca720c3?crop=entropy&cs=srgb&fm=jpg&q=80&w=600",
                "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=srgb&fm=jpg&q=80&w=600",
                "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=srgb&fm=jpg&q=80&w=600",
                "https://images.unsplash.com/photo-1579592672790-39239b6cbc31?crop=entropy&cs=srgb&fm=jpg&q=80&w=600",
              ].map((src, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden bg-gray-800 ${i === 0 ? "row-span-2 h-64 lg:h-auto" : "h-36"}`}>
                  <LazyImg src={src} alt={`Night ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. AMENITIES & FACILITIES GRID
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            label="SHIP AMENITIES"
            title="Everything You Need, Right Onboard"
            subtitle="World-class facilities so you never have to think about anything except making memories."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {amenities.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-[#4b3df5] group-hover:bg-[#4b3df5] group-hover:text-white transition-all">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-[#1a1a3a]">{a.title}</p>
                    <p className="text-[12px] text-gray-500 leading-snug mt-1">{a.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. PHOTO GALLERY
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#f7f7ff] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            label="GALLERY"
            title="Moments That Stay With You Forever"
            subtitle="A glimpse of the magic that happens when Bollywood meets the open ocean."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryItems.map((item, idx) => (
              <div key={idx} className={`group relative rounded-2xl overflow-hidden bg-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all ${idx === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`} style={{ minHeight: idx === 0 ? "340px" : "180px" }}>
                <LazyImg src={item.src} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 text-white text-[13px] font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7. GUEST TESTIMONIALS
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            label="TESTIMONIALS"
            title="Hear It From Our Happy Cruisers"
            subtitle="Real stories from real guests — this is why people come back year after year."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all bg-white">
                <Stars n={t.rating} />
                <p className="text-[14px] text-gray-600 leading-relaxed my-4">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img src={t.avatar} alt={t.name} loading="lazy" decoding="async" className="w-10 h-10 rounded-full object-cover border-2 border-indigo-100" />
                  <p className="text-[14px] font-bold text-[#1a1a3a]">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          8. STATS STRIP
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#4b3df5] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: "10,000+", label: "Happy Cruisers", icon: "😄" },
              { num: "50+", label: "Cruises Organised", icon: "🚢" },
              { num: "12+", label: "Destinations Visited", icon: "🗺️" },
              { num: "4.9 / 5", label: "Average Rating", icon: "⭐" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-4xl mb-3">{s.icon}</span>
                <p className="text-[36px] font-black text-white leading-none">{s.num}</p>
                <p className="text-[13px] text-white/70 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          9. CTA — BOOK NOW
      ═══════════════════════════════════════════════ */}
      <section
        className="relative py-20 text-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1583157048761-ac1dba033233?crop=entropy&cs=srgb&fm=jpg&q=80&w=1400')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/80" />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <p className="text-[11px] font-black tracking-[0.22em] uppercase text-amber-300 mb-3">READY TO SAIL?</p>
          <h2 className="text-[30px] sm:text-[42px] font-black text-white mb-4 leading-tight">
            Your Bollywood Adventure<br />at Sea Awaits
          </h2>
          <p className="text-[15px] text-white/70 mb-8 leading-relaxed">
            Don't miss your chance to be part of the most celebrated Bollywood cruise experience. Limited cabins available — book now before they're gone!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/packages" className="rounded-xl bg-[#f5a623] px-8 py-4 text-[16px] font-bold text-white hover:bg-[#e5981a] transition-all shadow-xl">
              View Packages & Pricing
            </Link>
            <Link to="/contact" className="rounded-xl border-2 border-white/50 px-8 py-4 text-[15px] font-bold text-white hover:bg-white hover:text-[#1a1a3a] transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Onboard;
