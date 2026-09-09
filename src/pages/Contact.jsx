import React, { useEffect } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "../components/Layout";
import PageBanner from "../components/PageBanner";
import { contact } from "../mock";

const Contact = () => {
  useEffect(() => {
    const scriptId = "msgsndr-form-embed";
    let script = document.getElementById(scriptId);
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

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
          <div className="bg-[#f6f7fc] rounded-3xl p-4 sm:p-6 border border-gray-100 min-h-[640px] flex flex-col justify-center">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/8LYQHo3CuLbis8cNAyyD"
              style={{ width: "100%", height: "100%", minHeight: "622px", border: "none", borderRadius: "8px" }}
              id="inline-8LYQHo3CuLbis8cNAyyD"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact form new website"
              data-height="622"
              data-layout-iframe-id="inline-8LYQHo3CuLbis8cNAyyD"
              data-form-id="8LYQHo3CuLbis8cNAyyD"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="Contact form new website"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
