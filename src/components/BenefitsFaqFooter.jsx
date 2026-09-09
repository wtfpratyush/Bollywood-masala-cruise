import React from "react";
import { CircleDollarSign, Tag, Wifi, BadgeCheck, ShieldCheck, Phone, Mail, Facebook, Instagram, Youtube, ChevronDown } from "lucide-react";
import { benefits, faqs, contact, navLinks } from "../mock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const benefitIconMap = { CircleDollarSign, Tag, Wifi, BadgeCheck, ShieldCheck };

const BenefitsFaqFooter = () => {
  return (
    <>
      {/* Benefits ocean bar */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579592672790-39239b6cbc31?auto=format&fit=crop&w=1200&q=75"
            alt="Ocean"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1c3a63]/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-center text-[24px] sm:text-[28px] font-bold text-white mb-8">
            Book Now and Get Exclusive Benefits!
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {benefits.map((b) => {
              const Icon = benefitIconMap[b.icon];
              return (
                <div key={b.title} className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-10 h-10 rounded-full border border-[#f5a623] flex items-center justify-center text-[#f5a623] shrink-0">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[14px] font-bold text-white">{b.title}</p>
                    <p className="text-[12px] text-white/70">{b.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="#contact"
              className="rounded-lg bg-[#f5a623] px-8 py-3 text-[15px] font-semibold text-white hover:bg-[#e5981a] transition-all hover:-translate-y-0.5"
            >
              Request Pricing
            </a>
          </div>
        </div>
      </section>

      {/* FAQ + Accreditation */}
      <section id="faq" className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-[13px] font-bold tracking-[0.12em] text-[#4b3df5] mb-4">FREQUENTLY ASKED QUESTIONS</p>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-[15px] font-medium text-[#1a1a3a] hover:no-underline py-4">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] text-gray-600 leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <a href="#faq" className="inline-block mt-5 text-[14px] font-semibold text-[#4b3df5] underline underline-offset-4">
              View All FAQs
            </a>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <p className="text-[13px] font-bold tracking-[0.12em] text-[#4b3df5] mb-6">WE'RE PROUDLY ACCREDITED BY</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              {["IATA", "CLIA", "IATO", "TAFI", "BBB"].map((name) => (
                <div key={name} className="h-14 px-5 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 text-[#1a1a3a] font-bold text-[15px] tracking-wide">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <a href="https://www.facebook.com/profile.php?id=61560687726948" target="_blank" rel="noopener noreferrer" className="text-[#1877f2] hover:opacity-70 transition-opacity" aria-label="Facebook"><Facebook size={22} fill="#1877f2" strokeWidth={0} /></a>
              <a href="https://www.instagram.com/bollywoodmasalacruise/" target="_blank" rel="noopener noreferrer" className="text-[#e1306c] hover:opacity-70 transition-opacity" aria-label="Instagram"><Instagram size={22} /></a>
              <a href="https://www.youtube.com/@Bollywoodmasalacruise/shorts" target="_blank" rel="noopener noreferrer" className="text-[#ff0000] hover:opacity-70 transition-opacity" aria-label="YouTube"><Youtube size={24} fill="#ff0000" strokeWidth={0} /></a>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-[14px] text-gray-600">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-2 hover:text-[#4b3df5]">
                <Phone size={16} className="text-[#4b3df5]" /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-[#4b3df5]">
                <Mail size={16} className="text-[#4b3df5]" /> {contact.email}
              </a>
            </div>

            <div className="text-center lg:text-right text-[13px] text-gray-500">
              <p>{contact.copyright}</p>
              <p>{contact.rights}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BenefitsFaqFooter;
