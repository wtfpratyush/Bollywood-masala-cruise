import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { faqs, contact, accreditations } from "../mock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Search, Phone, Mail, HelpCircle } from "lucide-react";

const CATEGORIES = [
  "All",
  "Booking & Payments",
  "Onboard Experience",
  "Rooms & Suites",
  "Food & Dining",
  "Kids & Family",
  "Health & Safety",
];

const FaqSection = ({ showAll = false }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.q.toLowerCase().includes(q) ||
        faq.a.toLowerCase().includes(q) ||
        (faq.category && faq.category.toLowerCase().includes(q));

      // On home page without search or category filter, show top featured questions
      if (!showAll && selectedCategory === "All" && !q) {
        return faq.featured;
      }

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, showAll]);

  // On home page default, limit to 5 featured items matching screenshot
  const displayedFaqs = useMemo(() => {
    if (!showAll && selectedCategory === "All" && !searchQuery) {
      return filteredFaqs.slice(0, 5);
    }
    return filteredFaqs;
  }, [filteredFaqs, showAll, selectedCategory, searchQuery]);

  // Sub-component: Contact Card
  const ContactCard = () => (
    <div className="rounded-3xl bg-[#1b1c38] text-white p-6 sm:p-7 shadow-xl shadow-indigo-950/15 flex flex-col justify-between">
      <div>
        <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[11px] font-extrabold uppercase tracking-wider text-indigo-200 mb-3">
          NEED HELP?
        </span>
        <h3 className="text-[22px] sm:text-[24px] font-bold leading-tight">
          Speak Directly with Our Cruise Advisors
        </h3>
        <p className="text-[13px] text-gray-300 mt-2.5 leading-relaxed">
          Get personalized answers regarding cabin availability, group discounts, or flight connections.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        <a
          href={`tel:${contact.phone}`}
          className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#4b3df5] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Phone size={18} className="text-white" />
          </div>
          <div>
            <div className="text-[11px] text-gray-300 font-bold uppercase tracking-wider">
              DIRECT PHONE
            </div>
            <div className="text-[14px] sm:text-[15px] font-bold text-white">
              {contact.phone}
            </div>
          </div>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#4b3df5] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Mail size={18} className="text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-[11px] text-gray-300 font-bold uppercase tracking-wider">
              EMAIL US
            </div>
            <div className="text-[14px] font-bold text-white truncate max-w-[210px]">
              {contact.email}
            </div>
          </div>
        </a>
      </div>
    </div>
  );

  // Sub-component: Trust & Accreditation Card
  const TrustCard = () => (
    <div className="rounded-3xl bg-white border border-gray-100 p-6 sm:p-7 shadow-lg shadow-indigo-900/5 flex flex-col justify-between">
      <div>
        <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.12em] text-[#4b3df5] uppercase mb-1">
          TRUST & ACCREDITATION
        </p>
        <h4 className="text-[17px] sm:text-[18px] font-bold text-[#1a1a3a] mb-2">
          Licensed British Columbia Agency
        </h4>
        <p className="text-[13px] text-gray-600 mb-5 leading-relaxed">
          Exotik Excursions is a certified and bonded travel partner with over 10 years of reliable group cruise operations.
        </p>
      </div>
      <div className={`grid ${showAll ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2"} gap-3`}>
        {accreditations.map((item) => (
          <div
            key={item.name}
            className="h-16 sm:h-20 px-3 py-2 flex items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-xs hover:border-indigo-200 hover:shadow-md transition-all duration-300 group"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="max-h-12 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="faq" className="bg-gradient-to-b from-white via-indigo-50/15 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Header Matching Reference */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#4b3df5] text-[12px] font-bold tracking-[0.14em] uppercase mb-3 shadow-xs">
            <HelpCircle size={14} />
            FAQ
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#1a1a3a] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 text-[15px] sm:text-[16px] text-gray-500 font-medium">
            Have additional questions?{" "}
            <a
              href="#contact"
              className="text-[#4b3df5] font-bold hover:underline underline-offset-4"
            >
              Contact Us!
            </a>
          </p>
        </div>

        {/* Search Bar Matching Reference */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., booking, dining, kids, refund, etc)..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gray-200 text-[14.5px] text-gray-800 placeholder:text-gray-400 shadow-xs hover:border-gray-300 focus:border-[#4b3df5] focus:ring-4 focus:ring-[#4b3df5]/10 outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-bold text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills with Generous Spacing & Proportions */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 mb-12 max-w-5xl mx-auto px-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 sm:px-7 py-2.5 sm:py-3 rounded-full text-[13.5px] sm:text-[14px] font-semibold transition-all duration-200 cursor-pointer ${
                  cat === "All" ? "min-w-[72px] text-center" : ""
                } ${
                  isActive
                    ? "bg-[#4b3df5] text-white shadow-md shadow-indigo-500/25 scale-[1.02]"
                    : "bg-white text-gray-600 border border-gray-200/90 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Layout Switch: 2-Column on Home Page, Centered Full-Width + Below Cards on Separate FAQ Page */}
        {showAll ? (
          /* SEPARATE FAQ PAGE LAYOUT: Full-width questions container + 2 cards below */
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Main Question Accordion Container */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl shadow-indigo-900/5">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-gray-400">
                  SHOWING {displayedFaqs.length} {displayedFaqs.length === 1 ? "QUESTION" : "QUESTIONS"}
                </span>
                {selectedCategory !== "All" && (
                  <span className="text-[12px] font-semibold text-[#4b3df5] bg-indigo-50 px-3 py-1 rounded-full">
                    {selectedCategory}
                  </span>
                )}
              </div>

              {displayedFaqs.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl">
                  <p className="text-base text-gray-500 font-medium">
                    No matching questions found for "{searchQuery}".
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-3 text-sm font-semibold text-[#4b3df5] underline"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {displayedFaqs.map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border border-gray-200/90 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-gray-300 transition-all duration-200"
                    >
                      <AccordionTrigger className="text-left text-[15px] sm:text-[16px] font-bold text-[#1a1a3a] hover:no-underline px-6 py-5 group">
                        <span className="pr-4 leading-snug group-hover:text-[#4b3df5] transition-colors">
                          {f.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="bg-gray-50/70 border-t border-gray-100 px-6 py-4.5 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>

            {/* Below Questions on Separate FAQ Page: Contact Card + Trust Card Side-by-Side */}
            <div className="grid md:grid-cols-2 gap-8">
              <ContactCard />
              <TrustCard />
            </div>

          </div>
        ) : (
          /* HOME PAGE LAYOUT: 2-Column (Accordion Left + Stacked Sidebar Right) */
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: FAQ Card Container */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl shadow-indigo-900/5">
              
              {/* Showing Count Text */}
              <div className="mb-5">
                <span className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-gray-400">
                  SHOWING {displayedFaqs.length} {displayedFaqs.length === 1 ? "QUESTION" : "QUESTIONS"}
                </span>
              </div>

              {/* Empty State */}
              {displayedFaqs.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-2xl">
                  <p className="text-base text-gray-500 font-medium">
                    No matching questions found for "{searchQuery}".
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-3 text-sm font-semibold text-[#4b3df5] underline"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                /* Accordion List with Large Rounded Boxes */
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {displayedFaqs.map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="border border-gray-200/90 rounded-2xl bg-white overflow-hidden shadow-xs hover:border-gray-300 transition-all duration-200"
                    >
                      <AccordionTrigger className="text-left text-[15px] sm:text-[16px] font-bold text-[#1a1a3a] hover:no-underline px-6 py-5 group">
                        <span className="pr-4 leading-snug group-hover:text-[#4b3df5] transition-colors">
                          {f.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="bg-gray-50/70 border-t border-gray-100 px-6 py-4.5 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}

              {/* Bottom Footer inside Left Container */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[13.5px] sm:text-[14px] text-gray-500 font-medium">
                  Have more questions about staterooms, dining or dates?
                </p>
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#4b3df5] hover:bg-[#3b2de0] text-white text-[13.5px] sm:text-[14px] font-bold shadow-md shadow-indigo-500/25 transition-all hover:scale-105"
                >
                  View All FAQs →
                </Link>
              </div>
            </div>

            {/* Right Column: Stacked Sidebar Cards on Home Page */}
            <div className="lg:col-span-4 space-y-6">
              <ContactCard />
              <TrustCard />
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default FaqSection;
