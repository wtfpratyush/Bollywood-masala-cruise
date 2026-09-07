import React from "react";
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { contact } from "../mock";

const accreditations = [
  {
    name: "IATA",
    src: "/images/accreditation/iata.svg",
    href: "https://www.iata.org",
  },
  {
    name: "CLIA",
    src: "/images/accreditation/clia.svg",
    href: "https://www.cruising.org",
  },
  {
    name: "TAFI",
    src: "/images/accreditation/tafi.svg",
    href: "https://www.tafi.org.in",
  },
  {
    name: "BBB Accredited Business",
    src: "/images/accreditation/bbb.svg",
    href: "https://www.bbb.org",
  },
];

const Footer = () => (
  <footer className="bg-white border-t border-gray-100">
    {/* ── Accreditation Bar ── */}
    <div className="border-b border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-black tracking-[0.18em] uppercase text-[#f5a623] mb-4 text-center">
          We're Proudly Accredited By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {accreditations.map((acc) => (
            <a
              key={acc.name}
              href={acc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              aria-label={acc.name}
            >
              <img
                src={acc.src}
                alt={acc.name}
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* ── Main Footer ── */}
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <a href="https://www.facebook.com/profile.php?id=61560687726948" target="_blank" rel="noopener noreferrer" className="text-[#1877f2] hover:opacity-70 transition-opacity"><Facebook size={22} fill="#1877f2" strokeWidth={0} /></a>
            <a href="https://www.instagram.com/bollywoodmasalacruise/" target="_blank" rel="noopener noreferrer" className="text-[#e1306c] hover:opacity-70 transition-opacity"><Instagram size={22} /></a>
            <a href="#" className="text-[#ff0000] hover:opacity-70 transition-opacity"><Youtube size={24} fill="#ff0000" strokeWidth={0} /></a>
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
    </div>
  </footer>
);

export default Footer;
