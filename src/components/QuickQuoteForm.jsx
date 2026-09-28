import React, { useEffect } from "react";

const DEFAULT_FORM_ID = "8LYQHo3CuLbis8cNAyyD";

const QuickQuoteForm = ({ className = "", formId = DEFAULT_FORM_ID }) => {
  const activeFormId =
    !formId || formId === "HERO_FORM_ID_PLACEHOLDER"
      ? DEFAULT_FORM_ID
      : formId;

  useEffect(() => {
    // Ensure GoHighLevel form embed script is loaded
    const scriptId = "ghl-form-embed-script";
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [activeFormId]);

  return (
    <div
      className={`bg-white rounded-2xl shadow-xl shadow-indigo-950/10 border border-gray-100 p-1 sm:p-2 overflow-hidden transition-all duration-300 ${className}`}
    >
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${activeFormId}`}
        style={{
          width: "100%",
          height: "560px",
          border: "none",
          display: "block",
          borderRadius: "0px",
        }}
        id={`inline-${activeFormId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact form new website"
        data-height="560"
        data-layout-iframe-id={`inline-${activeFormId}`}
        data-form-id={activeFormId}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Contact form new website"
      />
    </div>
  );
};

export default QuickQuoteForm;
