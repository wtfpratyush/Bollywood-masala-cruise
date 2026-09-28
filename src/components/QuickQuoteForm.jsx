import React, { useEffect } from "react";

const FORM_ID = "8LYQHo3CuLbis8cNAyyD";
const SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

const QuickQuoteForm = ({ className = "" }) => {
  useEffect(() => {
    const old = document.getElementById("ghl-form-embed-script");
    if (old) old.remove();

    const script = document.createElement("script");
    script.id = "ghl-form-embed-script";
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className={`w-full bg-white rounded-2xl shadow-xl shadow-indigo-950/10 border border-gray-100 p-1 sm:p-2 overflow-hidden ${className}`}
    >
      <iframe
        src={"https://api.leadconnectorhq.com/widget/form/" + FORM_ID}
        style={{
          width: "100%",
          minHeight: "820px",
          border: "none",
          borderRadius: "0px",
          display: "block",
        }}
        id={"inline-" + FORM_ID}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact form new website"
        data-height="820"
        data-layout-iframe-id={"inline-" + FORM_ID}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Contact form new website"
      />
    </div>
  );
};

export default QuickQuoteForm;