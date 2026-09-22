import React, { useEffect } from "react";

const QuickQuoteForm = ({ className = "" }) => {
  useEffect(() => {
    // Ensure GoHighLevel form embed script is loaded
    const scriptId = "ghl-form-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-indigo-950/10 border border-gray-100 p-2 sm:p-4 overflow-hidden transition-all duration-300 ${className}`}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/8LYQHo3CuLbis8cNAyyD"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "626px",
          border: "none",
          borderRadius: "0px",
        }}
        id="inline-8LYQHo3CuLbis8cNAyyD"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact form new website"
        data-height="626"
        data-layout-iframe-id="inline-8LYQHo3CuLbis8cNAyyD"
        data-form-id="8LYQHo3CuLbis8cNAyyD"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Contact form new website"
      />
    </div>
  );
};

export default QuickQuoteForm;
