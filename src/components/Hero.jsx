import React, { useState } from "react";
import { ShieldCheck, Ticket, Headset, Play, Lock, Calendar, User, ChevronDown, ChefHat, BedDouble, Music, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { heroFeatures, cruiseOptions, featureStrip, heroImage } from "../mock";
import { Input } from "./ui/input";
import { useToast } from "../hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const iconMap = { ShieldCheck, Ticket, Headset };
const featureIconMap = { ChefHat, BedDouble, Music, Users };

const QuoteForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", mobile: "", cruise: "", date: "", guests: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: "Please fill required fields", description: "Name and email are needed to get your quote." });
      return;
    }
    toast({ title: "Quote request received!", description: "Our cruise experts will reach out to you within 60 seconds." });
    setForm({ name: "", email: "", mobile: "", cruise: "", date: "", guests: "" });
  };

  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl shadow-indigo-900/10 p-6 sm:p-7 border border-gray-100">
      <h3 className="text-[26px] font-bold text-[#1a1a3a]">
        Get a <span className="text-[#4b3df5]">Quick Quote</span>
      </h3>
      <p className="text-[14px] text-gray-500 mb-5">Set sail in less than 60 seconds</p>

      <form onSubmit={submit} className="space-y-3">
        <Input
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="h-12 rounded-lg bg-gray-50 border-gray-200"
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="h-12 rounded-lg bg-gray-50 border-gray-200"
        />
        <div className="flex gap-2">
          <div className="flex items-center gap-1 px-3 h-12 rounded-lg bg-gray-50 border border-gray-200 text-[15px] text-gray-600 shrink-0">
            <span>🇮🇳</span> +91
            <ChevronDown size={14} />
          </div>
          <Input
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            className="h-12 rounded-lg bg-gray-50 border-gray-200"
          />
        </div>
        <Select value={form.cruise} onValueChange={(v) => setForm({ ...form, cruise: v })}>
          <SelectTrigger className="h-12 rounded-lg bg-gray-50 border-gray-200 text-gray-600">
            <SelectValue placeholder="Select Cruise" />
          </SelectTrigger>
          <SelectContent>
            {cruiseOptions.map((c) => (
              <SelectItem key={c} value={c}>{c}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="relative">
          <Input
            type="text"
            placeholder="Travel Date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
            className="h-12 rounded-lg bg-gray-50 border-gray-200 pr-10"
          />
          <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        <div className="relative">
          <Input
            type="number"
            placeholder="No. of Guests"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="h-12 rounded-lg bg-gray-50 border-gray-200 pr-10"
          />
          <User size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        <button
          type="submit"
          className="w-full h-12 rounded-lg bg-[#4b3df5] text-white font-semibold text-[16px] hover:bg-[#3d31d6] transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/30"
        >
          Get My Quote Now
        </button>
        <div className="flex items-center justify-center gap-1.5 text-[13px] text-gray-500 pt-1">
          <Lock size={13} /> No hidden charges. 100% secure.
        </div>
      </form>
    </div>
  );
};

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Full-bleed cruise background */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Luxury cruise ship" className="w-full h-full object-cover" />
        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent lg:via-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30 lg:from-white/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-14 pb-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center relative">
          {/* Left text */}
          <div className="reveal z-10">
            <p className="text-[13px] font-bold tracking-[0.15em] text-[#4b3df5] mb-3">WELCOME ABOARD</p>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[56px] leading-[1.05] font-extrabold text-[#1a1a3a]">
              An All-Inclusive<br />
              <span className="text-[#4b3df5]">Cruise</span> Experience
            </h1>
            <p className="mt-5 text-[16px] text-gray-600 max-w-md leading-relaxed">
              Sail into a world of luxury, entertainment, and unforgettable moments. Everything you need for the perfect getaway — all in one place.
            </p>

            <div className="mt-7 flex flex-wrap gap-6">
              {heroFeatures.map((f) => {
                const Icon = iconMap[f.icon];
                return (
                  <div key={f.title} className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#4b3df5]">
                      {Icon && <Icon size={20} />}
                    </div>
                    <div className="leading-tight">
                      <p className="text-[14px] font-semibold text-[#1a1a3a]">{f.title}</p>
                      <p className="text-[14px] font-semibold text-[#1a1a3a]">{f.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-[#f5a623] px-7 py-3.5 text-[16px] font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-[#e5981a] transition-all hover:-translate-y-0.5"
              >
                Request Pricing
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 rounded-lg bg-white border border-gray-200 px-6 py-3.5 text-[16px] font-semibold text-[#1a1a3a] hover:border-[#4b3df5] transition-all"
              >
                <span className="w-8 h-8 rounded-full bg-[#4b3df5] flex items-center justify-center text-white">
                  <Play size={15} fill="white" />
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right form */}
          <div className="relative flex lg:justify-end">
            <div className="w-full lg:max-w-[400px]">
              <QuoteForm />
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-10 lg:-mt-2">
        <div className="bg-white rounded-2xl shadow-xl shadow-indigo-900/5 border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {featureStrip.map((f) => {
            const Icon = featureIconMap[f.icon];
            return (
              <div key={f.title} className="flex items-start gap-3 p-5">
                <div className="text-[#4b3df5] shrink-0 mt-0.5">{Icon && <Icon size={30} strokeWidth={1.5} />}</div>
                <div>
                  <p className="font-bold text-[15px] text-[#1a1a3a]">{f.title}</p>
                  <p className="text-[13px] text-gray-500 leading-snug">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Cruise Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Cruise Experience Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
