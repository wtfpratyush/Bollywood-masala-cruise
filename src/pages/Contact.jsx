import React from "react";
import { Phone, Mail, Clock } from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { contact } from "../mock";
import QuickQuoteForm from "../components/QuickQuoteForm";

const Contact = () => {
  const info = [
    { icon: Phone, label: "Call Us", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: Mail, label: "Email Us", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Clock, label: "Working Hours", value: "Mon – Sat, 9:00 AM – 8:00 PM", href: "#" },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Info - appears below form on mobile, on left on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="text-[13px] font-bold tracking-[0.15em] text-[#4b3df5] mb-3">GET IN TOUCH</p>
            <h2 className="text-[30px] sm:text-[36px] font-extrabold text-[#1a1a3a] leading-tight">We'd Love to Hear From You</h2>
            <p className="mt-4 text-[16px] text-gray-600 leading-relaxed">
              Reach out for pricing, custom itineraries, group bookings or anything else. We usually respond within a few hours.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {info.map((it) => {
                const isLink = it.href && it.href !== "#";
                const Component = isLink ? "a" : "div";
                return (
                  <Component
                    key={it.label}
                    href={isLink ? it.href : undefined}
                    className={`flex items-center gap-4 rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-5 transition-all bg-white ${
                      isLink ? "hover:shadow-md hover:border-gray-200" : ""
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#eeeafe] text-[#4b3df5] flex items-center justify-center shrink-0">
                      <it.icon size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-semibold text-gray-400">{it.label}</p>
                      <p className="text-[15px] sm:text-[16px] font-medium text-[#1a1a3a] break-all sm:break-words">
                        {it.value}
                      </p>
                    </div>
                  </Component>
                );
              })}
            </div>
          </div>

          {/* Form - appears above info on mobile, on right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex lg:justify-end">
            <div className="w-full max-w-[620px]">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
