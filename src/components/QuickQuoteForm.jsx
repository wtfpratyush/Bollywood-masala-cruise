import React, { useState, useRef } from "react";
import { Mail, ChevronDown, CheckCircle2, Loader2 } from "lucide-react";
import { contact } from "../mock";

const QuickQuoteForm = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "",
    country: "",
    trip: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const hiddenFormRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // 1. Submit directly to GoHighLevel via hidden form submission to GHL endpoint
    try {
      if (hiddenFormRef.current) {
        hiddenFormRef.current.submit();
      }
    } catch (err) {
      console.log("Hidden GHL submit error:", err);
    }

    // 2. Also send payload directly to LeadConnector / GHL API webhook
    try {
      await fetch("https://api.leadconnectorhq.com/widget/form/8LYQHo3CuLbis8cNAyyD", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          guests: formData.guests,
          country: formData.country,
          trip: formData.trip,
          formId: "8LYQHo3CuLbis8cNAyyD",
          formName: "Contact form new website",
          source: "Website 2-Column Quick Quote",
        }),
      });
    } catch (err) {
      console.log("GHL API submission:", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className={`w-full bg-white rounded-3xl shadow-2xl shadow-indigo-900/10 p-6 sm:p-8 border border-gray-100 text-center ${className}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-[24px] sm:text-[28px] font-extrabold text-[#1a1a3a] mb-2">
          Quote Request Received!
        </h3>
        <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-gray-900">{formData.fullName || "Friend"}</span>. Your details have been sent to our cruise specialists. We will reach out to you with custom pricing within 24 hours.
        </p>

        <div className="bg-[#f8f9ff] border border-indigo-100 rounded-2xl p-4 text-left mb-6 max-w-sm mx-auto text-[13px] text-gray-700 space-y-1">
          {formData.trip && <p><span className="font-semibold text-gray-900">Selected Trip:</span> {formData.trip}</p>}
          {formData.guests && <p><span className="font-semibold text-gray-900">Guests:</span> {formData.guests}</p>}
          <p><span className="font-semibold text-gray-900">Email:</span> {formData.email}</p>
          <p><span className="font-semibold text-gray-900">Phone:</span> {formData.phone}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${contact.whatsapp?.replace(/[^0-9]/g, '') || '16047235353'}?text=Hi!%20I%20just%20submitted%20a%20quote%20request%20for%20Bollywood%20Masala%20Cruise.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[14px] px-5 py-3 rounded-xl shadow-md transition-all"
          >
            💬 Chat on WhatsApp Now
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ fullName: "", email: "", phone: "", guests: "", country: "", trip: "" });
            }}
            className="inline-flex items-center justify-center text-[14px] font-semibold text-gray-600 hover:text-gray-900 px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full bg-white rounded-3xl shadow-2xl shadow-indigo-900/10 p-6 sm:p-8 border border-gray-100 ${className}`}>
      {/* Hidden iframe & Form to post directly to GoHighLevel */}
      <iframe name="ghl_submission_target" id="ghl_submission_target" style={{ display: "none" }} title="GHL Target" />
      <form
        ref={hiddenFormRef}
        action="https://services.leadconnectorhq.com/forms/submit"
        method="POST"
        target="ghl_submission_target"
        style={{ display: "none" }}
      >
        <input type="hidden" name="formId" value="8LYQHo3CuLbis8cNAyyD" />
        <input type="hidden" name="name" value={formData.fullName} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="phone" value={formData.phone} />
        <input type="hidden" name="number_of_guests" value={formData.guests} />
        <input type="hidden" name="country" value={formData.country} />
        <input type="hidden" name="select_trip" value={formData.trip} />
      </form>

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#1a1a3a] leading-tight tracking-tight">
          Get a <span className="text-[#4b3df5]">Quick Quote</span>
        </h2>
        <p className="italic text-gray-500 font-medium text-[13px] sm:text-[14px] mt-1">
          Set sail in less than 24h
        </p>
      </div>

      {/* 2-Column Form Fields */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-4 sm:gap-y-4">
          {/* Row 1, Col 1: Full name */}
          <div>
            <label className="block text-[13px] sm:text-[14px] font-semibold text-[#374151] mb-1.5">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-3.5 py-3 rounded-xl border border-gray-300 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b3df5]/30 focus:border-[#4b3df5] transition-all bg-white"
            />
          </div>

          {/* Row 1, Col 2: Email * */}
          <div>
            <label className="block text-[13px] sm:text-[14px] font-semibold text-[#374151] mb-1.5">
              Email <span className="text-gray-400">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <Mail size={16} />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full pl-9 pr-3.5 py-3 rounded-xl border text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all bg-white ${
                  errors.email
                    ? "border-red-400 focus:ring-red-300 focus:border-red-500"
                    : "border-gray-300 focus:ring-[#4b3df5]/30 focus:border-[#4b3df5]"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-[12px] text-red-500 font-medium mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Row 2, Col 1: Phone * */}
          <div>
            <label className="block text-[13px] sm:text-[14px] font-semibold text-[#374151] mb-1.5">
              Phone <span className="text-gray-400">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className={`w-full px-3.5 py-3 rounded-xl border text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all bg-white ${
                errors.phone
                  ? "border-red-400 focus:ring-red-300 focus:border-red-500"
                  : "border-gray-300 focus:ring-[#4b3df5]/30 focus:border-[#4b3df5]"
              }`}
            />
            {errors.phone && (
              <p className="text-[12px] text-red-500 font-medium mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Row 2, Col 2: No. of Guest in a room */}
          <div>
            <label className="block text-[13px] sm:text-[14px] font-semibold text-[#374151] mb-1.5">
              No. of Guest in a room
            </label>
            <input
              type="text"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-3.5 py-3 rounded-xl border border-gray-300 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b3df5]/30 focus:border-[#4b3df5] transition-all bg-white"
            />
          </div>

          {/* Row 3, Col 1: Country of Residence */}
          <div>
            <label className="block text-[13px] sm:text-[14px] font-semibold text-[#374151] mb-1.5">
              Country of Residence
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full px-3.5 py-3 rounded-xl border border-gray-300 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4b3df5]/30 focus:border-[#4b3df5] transition-all bg-white"
            />
          </div>

          {/* Row 3, Col 2: Select Trip */}
          <div>
            <label className="block text-[13px] sm:text-[14px] font-semibold text-[#374151] mb-1.5">
              Select Trip
            </label>
            <div className="relative">
              <select
                name="trip"
                value={formData.trip}
                onChange={handleChange}
                className="w-full appearance-none px-3.5 py-3 pr-9 rounded-xl border border-gray-300 text-[14px] text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#4b3df5]/30 focus:border-[#4b3df5] transition-all bg-white cursor-pointer"
              >
                <option value="" disabled className="text-gray-400">
                  Choose one or more options
                </option>
                <option value="Caribbean Cruise - Dec 2025">Caribbean Cruise (Dec 2025)</option>
                <option value="Holi Cruise Bahamas - Mar 2025">Holi Cruise Bahamas (Mar 2025)</option>
                <option value="Alaska Cruise - May 2026">Alaska Cruise (May 2026)</option>
                <option value="Dubai Cruise - Nov 2025">Dubai Cruise (Nov 2025)</option>
                <option value="Mexican Riviera - May 2025">Mexican Riviera (May 2025)</option>
                <option value="Custom Group / Corporate Cruise">Custom Group / Corporate Cruise</option>
              </select>
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <ChevronDown size={16} />
              </span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 py-3.5 px-6 bg-[#1b64f2] hover:bg-[#1455d0] text-white font-bold text-[16px] rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:shadow-blue-600/35 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Submitting to GoHighLevel...</span>
            </>
          ) : (
            <span>Get My Quote Now</span>
          )}
        </button>

        {/* Footer Subtext */}
        <p className="text-[12px] sm:text-[13px] text-gray-500 text-center mt-4 font-normal">
          No hidden charges. 100% secure.
        </p>
      </form>
    </div>
  );
};

export default QuickQuoteForm;
