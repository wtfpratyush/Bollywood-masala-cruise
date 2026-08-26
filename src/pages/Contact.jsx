import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import { contact } from "../mock";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast({ title: "Please fill required fields", description: "Name and email are needed so we can reach you." });
      return;
    }
    toast({ title: "Message sent!", description: "Thanks for reaching out \u2014 our team will respond shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const info = [
    { icon: Phone, label: "Call Us", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: Mail, label: "Email Us", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Visit Us", value: "1200 Ocean Drive, Miami, FL 33139", href: "#" },
    { icon: Clock, label: "Working Hours", value: "Mon \u2013 Sat, 9:00 AM \u2013 8:00 PM", href: "#" },
  ];

  return (
    <Layout showBenefits={false}>
      <PageBanner
        title="Contact Us"
        crumb="Contact"
        bgImage="https://images.unsplash.com/photo-1554254464-7046778097bf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHxjcnVpc2UlMjBzaGlwfGVufDB8fHx8MTc4Nzc0ODI2Mnww&ixlib=rb-4.1.0&q=85"
        subtitle="Have a question or ready to book? Our cruise experts are here to help."
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Info */}
          <div>
            <p className="text-[13px] font-bold tracking-[0.15em] text-[#4b3df5] mb-3">GET IN TOUCH</p>
            <h2 className="text-[30px] sm:text-[36px] font-extrabold text-[#1a1a3a] leading-tight">We'd Love to Hear From You</h2>
            <p className="mt-4 text-[16px] text-gray-600 leading-relaxed">
              Reach out for pricing, custom itineraries, group bookings or anything else. We usually respond within a few hours.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {info.map((it) => (
                <a key={it.label} href={it.href} className="flex items-start gap-3 rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-[#eeeafe] text-[#4b3df5] flex items-center justify-center shrink-0">
                    <it.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-400">{it.label}</p>
                    <p className="text-[15px] font-medium text-[#1a1a3a]">{it.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#f6f7fc] rounded-3xl p-7 sm:p-8 border border-gray-100">
            <h3 className="text-[24px] font-bold text-[#1a1a3a] mb-1">Send us a Message</h3>
            <p className="text-[14px] text-gray-500 mb-5">Fill in the form and we'll get back to you.</p>
            <form onSubmit={submit} className="space-y-3">
              <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 rounded-lg bg-white border-gray-200" />
              <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 rounded-lg bg-white border-gray-200" />
              <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-12 rounded-lg bg-white border-gray-200" />
              <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-lg bg-white border-gray-200" />
              <button type="submit" className="w-full h-12 rounded-lg bg-[#4b3df5] text-white font-semibold text-[16px] hover:bg-[#3d31d6] transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/30">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
