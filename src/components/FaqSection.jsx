import React from "react";
import { Link } from "react-router-dom";
import { faqs } from "../mock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FaqSection = ({ showAll = false }) => {
  const list = showAll ? faqs : faqs;
  return (
    <section id="faq" className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <p className="text-[13px] font-bold tracking-[0.12em] text-[#4b3df5] mb-4">FREQUENTLY ASKED QUESTIONS</p>
          <Accordion type="single" collapsible className="w-full">
            {list.map((f, i) => (
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
          {!showAll && (
            <Link to="/faq" className="inline-block mt-5 text-[14px] font-semibold text-[#4b3df5] underline underline-offset-4">
              View All FAQs
            </Link>
          )}
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
  );
};

export default FaqSection;
