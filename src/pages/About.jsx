import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Sparkles,
  Leaf,
  UserCheck,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Award,
  ArrowRight,
  ChevronRight,
  Maximize2,
  Users,
  Music,
  UtensilsCrossed,
  Heart,
  Globe,
  X,
} from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import {
  aboutStory,
  aboutCoreValues,
  aboutAgents,
  aboutGalleryMoments,
  aboutMilestones,
  aboutStats,
} from "../mock";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";

const valueIconMap = {
  UserCheck: UserCheck,
  Sparkles: Sparkles,
  Leaf: Leaf,
  ShieldCheck: ShieldCheck,
};

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = [
    "All",
    "Stage Shows",
    "Nightlife",
    "Celebration",
    "Dining",
    "Activities",
  ];

  const filteredPhotos =
    selectedCategory === "All"
      ? aboutGalleryMoments.photos
      : aboutGalleryMoments.photos.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      <PageBanner
        title="About Us"
        crumb="About Us"
        bgImage="https://images.pexels.com/photos/24643916/pexels-photo-24643916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        subtitle="Discover the story, passionate vision, and dedicated team behind the premier Bollywood Masala Cruise."
      />

      {/* ========================================================================= */}
      {/* 1. OUR STORY SECTION (Image 1) */}
      {/* ========================================================================= */}
      <section className="bg-white py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Story Text & Info */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="text-[13px] font-bold tracking-[0.18em] text-[#4b3df5] uppercase mb-2">
                  {aboutStory.eyebrow}
                </p>
                <h2 className="text-[32px] sm:text-[42px] font-black text-[#1a1a3a] leading-[1.12] tracking-tight">
                  {aboutStory.title}
                </h2>
              </div>

              <div className="space-y-4 text-gray-600 text-[16px] leading-relaxed">
                <p className="font-normal text-[#2b2b4f]">
                  {aboutStory.body}
                </p>
                <p className="text-[15px] text-gray-500">
                  {aboutStory.body2}
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {aboutStory.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="p-3.5 rounded-xl bg-gray-50/80 border border-gray-100 flex items-start gap-2.5 transition-all hover:bg-[#f6f4fe] hover:border-indigo-100"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#4b3df5] shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="text-[14px] font-bold text-[#1a1a3a] leading-tight">
                        {h.title}
                      </p>
                      <p className="text-[12px] text-gray-500 mt-0.5 leading-snug">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#f5a623] px-7 py-3.5 text-[16px] font-bold text-white shadow-lg shadow-orange-500/25 hover:bg-[#e5981a] transition-all hover:-translate-y-0.5"
                >
                  Request Pricing
                </Link>
                <Link
                  to="/packages"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#4b3df5] px-6 py-3 text-[15px] font-bold text-[#4b3df5] hover:bg-[#4b3df5] hover:text-white transition-all"
                >
                  Explore Packages <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Story Photos Grid (Matching Image 1) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-amber-500/10 rounded-3xl filter blur-2xl -z-10" />

                {aboutStory.images.map((img, i) => (
                  <div
                    key={img.src}
                    className={`group relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                      i === 1 ? "mt-6 sm:mt-10" : ""
                    }`}
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3.5 bg-white border-t border-gray-100">
                      <p className="text-[13px] font-semibold text-[#1a1a3a] leading-tight">
                        {img.caption}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Bollywood Masala Voyage
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Stat Badge */}
              <div className="mt-6 sm:mt-8 p-4 rounded-2xl bg-gradient-to-r from-[#4b3df5] to-[#7064f8] text-white flex items-center justify-between shadow-xl shadow-indigo-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                    <Sparkles size={24} className="text-amber-300" />
                  </div>
                  <div>
                    <p className="text-[18px] font-extrabold leading-tight">
                      15+ Years of Oceanic Magic
                    </p>
                    <p className="text-[12px] text-white/80">
                      Over 50,000+ Happy Cruisers Celebrated At Sea
                    </p>
                  </div>
                </div>
                <Link
                  to="/testimonials"
                  className="text-[12px] font-bold underline text-amber-200 hover:text-white shrink-0 ml-2"
                >
                  Read Reviews &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE VALUES SECTION (Image 2) */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-br from-[#170e5c] via-[#24177d] to-[#4b3df5] py-20 text-white relative overflow-hidden">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-[13px] font-bold tracking-[0.2em] text-[#f5a623] uppercase mb-2">
              {aboutCoreValues.eyebrow}
            </p>
            <h2 className="text-[34px] sm:text-[44px] font-extrabold tracking-tight text-white">
              {aboutCoreValues.title}
            </h2>
            <div className="w-20 h-1 bg-[#f5a623] mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-[16px] text-indigo-100 leading-relaxed">
              {aboutCoreValues.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {aboutCoreValues.values.map((val) => {
              const Icon = valueIconMap[val.icon] || Sparkles;
              return (
                <div
                  key={val.title}
                  className="group relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-7 hover:bg-white/15 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Golden Icon badge matching Image 2 */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-500/10 border border-amber-300/40 text-amber-300 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                      <Icon size={28} strokeWidth={2} />
                    </div>

                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-amber-300 text-[11px] font-bold tracking-wide uppercase mb-3">
                      {val.tag}
                    </span>

                    <h3 className="text-[20px] font-bold text-white leading-snug mb-3">
                      {val.title}
                    </h3>

                    <p className="text-[15px] text-amber-100/90 font-medium leading-relaxed mb-3">
                      "{val.shortDesc}"
                    </p>

                    <p className="text-[13px] text-indigo-200 leading-relaxed">
                      {val.fullDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[12px] text-amber-300 font-semibold">
                    <CheckCircle2 size={14} /> Guaranteed On Every Sailing
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. AGENTS / CRUISE SPECIALISTS SECTION (Image 3) */}
      {/* ========================================================================= */}
      <section className="bg-[#fbfbfe] py-18 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-[13px] font-bold tracking-[0.2em] text-[#4b3df5] uppercase mb-2">
              {aboutAgents.eyebrow}
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-black text-[#1a1a3a] leading-tight">
              {aboutAgents.title}
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              {aboutAgents.subtitle}
            </p>
          </div>

          {/* 2 Dedicated Agent Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {aboutAgents.agents.map((agent) => (
              <div
                key={agent.name}
                className="group rounded-3xl bg-white border border-gray-100 shadow-xl shadow-indigo-900/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col"
              >
                {/* Agent Image Banner with Studio Look */}
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="px-3 py-1 rounded-full bg-[#4b3df5]/90 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider">
                      {agent.experience}
                    </span>
                    <span className="text-[12px] font-medium bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      Exotik Excursions Partner
                    </span>
                  </div>
                </div>

                {/* Agent Info Details */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-[26px] font-bold text-[#1a1a3a]">
                      {agent.name}
                    </h3>
                    <p className="text-[13px] font-extrabold tracking-wider text-[#4b3df5] uppercase mt-0.5">
                      {agent.role}
                    </p>

                    <p className="text-[14px] text-gray-600 leading-relaxed mt-4">
                      {agent.bio}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {agent.specialties.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-md bg-indigo-50/80 text-[#4b3df5] text-[12px] font-semibold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Links matching screenshot */}
                  <div className="pt-4 border-t border-gray-100 space-y-2.5">
                    <a
                      href={`tel:${agent.phone.replace(/[^0-9]/g, "")}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#eeeafe] text-gray-700 hover:text-[#4b3df5] transition-all font-semibold text-[15px]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#4b3df5] text-white flex items-center justify-center shrink-0">
                        <Phone size={15} />
                      </div>
                      <div className="leading-tight">
                        <p className="text-[11px] text-gray-400 uppercase font-bold">Direct Phone</p>
                        <p className="text-[15px] font-bold">{agent.phone}</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-[#eeeafe] text-gray-700 hover:text-[#4b3df5] transition-all font-semibold text-[14px]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0">
                        <Mail size={15} />
                      </div>
                      <div className="leading-tight truncate">
                        <p className="text-[11px] text-gray-400 uppercase font-bold">Direct Email</p>
                        <p className="text-[14px] font-bold truncate">{agent.email}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[14px] text-gray-500">
              Need immediate assistance? You can also{" "}
              <Link to="/contact" className="text-[#4b3df5] font-bold underline">
                fill out our 60-Second Quote Form
              </Link>{" "}
              for instant response.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. GALLERY & CRUISE MOMENTS (Image 4) */}
      {/* ========================================================================= */}
      <section className="bg-white py-18 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-[13px] font-bold tracking-[0.2em] text-[#4b3df5] uppercase mb-2">
              {aboutGalleryMoments.eyebrow}
            </p>
            <h2 className="text-[32px] sm:text-[42px] font-black text-[#1a1a3a] leading-tight">
              {aboutGalleryMoments.title}
            </h2>
            <p className="mt-3 text-[15px] text-gray-600">
              {aboutGalleryMoments.subtitle}
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#4b3df5] text-white shadow-md shadow-indigo-500/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid matching Image 4 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.title + idx}
                onClick={() => setActivePhoto(photo)}
                className="group relative rounded-2xl overflow-hidden shadow-md bg-gray-100 cursor-pointer border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Hover overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <span className="inline-block px-2 py-0.5 rounded bg-amber-500 text-[10px] font-extrabold uppercase w-fit mb-1">
                    {photo.category}
                  </span>
                  <p className="text-[14px] font-bold leading-tight">
                    {photo.title}
                  </p>
                  <p className="text-[11px] text-gray-300 line-clamp-1 mt-0.5">
                    {photo.desc}
                  </p>
                  <span className="flex items-center gap-1 text-[11px] text-amber-300 font-semibold mt-2">
                    <Maximize2 size={12} /> Click to View Full
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Link to Full Gallery Page */}
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1a1a3a] text-white px-8 py-3.5 font-bold text-[15px] hover:bg-[#4b3df5] transition-all hover:shadow-lg"
            >
              View Full Gallery &amp; Video Highlights <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. MILESTONES & TIMELINE (Enriched Information) */}
      {/* ========================================================================= */}
      <section className="bg-[#f6f5fe] py-16 lg:py-20 border-t border-b border-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[13px] font-bold tracking-[0.2em] text-[#4b3df5] uppercase mb-2">
              OUR MILESTONES
            </p>
            <h2 className="text-[30px] sm:text-[38px] font-black text-[#1a1a3a]">
              A Decade of Growth &amp; Celebrations
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutMilestones.map((m, idx) => (
              <div
                key={m.year}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md relative hover:shadow-xl transition-all"
              >
                <span className="text-[32px] font-black text-[#4b3df5] leading-none block mb-2">
                  {m.year}
                </span>
                <h4 className="text-[17px] font-bold text-[#1a1a3a] mb-2">
                  {m.title}
                </h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION BANNER */}
      {/* ========================================================================= */}
      <section className="bg-[#1a1a3a] py-16 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#f5a623] text-black text-[12px] font-black tracking-wider uppercase">
            Join the Next Voyage
          </span>
          <h2 className="text-[32px] sm:text-[44px] font-black leading-tight max-w-3xl mx-auto">
            Ready to Experience the Magic of Bollywood at Sea?
          </h2>
          <p className="text-[16px] text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Staterooms are filling fast for our upcoming Caribbean and Bahamas voyages. Lock in early bird pricing and all-inclusive perks today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl bg-[#f5a623] px-8 py-4 text-[16px] font-bold text-white shadow-xl shadow-orange-500/30 hover:bg-[#e5981a] transition-all hover:-translate-y-0.5"
            >
              Get Instant Quote Now
            </Link>
            <a
              href="tel:5879824004"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-7 py-4 text-[16px] font-bold text-white hover:bg-white hover:text-[#1a1a3a] transition-all"
            >
              <Phone size={18} /> Call Specialist (587) 982-4004
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Dialog Modal */}
      <Dialog open={!!activePhoto} onOpenChange={(open) => !open && setActivePhoto(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-0 text-white">
          <DialogHeader className="sr-only">
            <DialogTitle>{activePhoto?.title || "Cruise Photo"}</DialogTitle>
          </DialogHeader>
          {activePhoto && (
            <div className="relative">
              <div className="max-h-[75vh] flex items-center justify-center bg-black">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-5 bg-[#141432] flex items-center justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#4b3df5] text-[11px] font-bold uppercase mb-1">
                    {activePhoto.category}
                  </span>
                  <h3 className="text-[18px] font-bold text-white">{activePhoto.title}</h3>
                  <p className="text-[13px] text-gray-300">{activePhoto.desc}</p>
                </div>
                <Link
                  to="/packages"
                  className="px-5 py-2.5 rounded-xl bg-[#f5a623] text-white font-bold text-[13px] hover:bg-[#e5981a] transition-all shrink-0 ml-4"
                >
                  Book This Experience
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default About;
