import React from "react";
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { contact } from "../mock";

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-10">
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
  </footer>
);

export default Footer;
