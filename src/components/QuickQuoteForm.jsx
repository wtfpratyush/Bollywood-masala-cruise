import React, { useEffect, useState } from "react";

const DEFAULT_FORM_ID = "8LYQHo3CuLbis8cNAyyD";

const QuickQuoteForm = ({ className = "", formId = DEFAULT_FORM_ID }) => {
  const activeFormId =
    !formId || formId === "HERO_FORM_ID_PLACEHOLDER"
      ? DEFAULT_FORM_ID
      : formId;

  const [iframeHeight, setIframeHeight] = useState("580px");

  useEffect(() => {
    // Ensure GoHighLevel form embed script is loaded
    const scriptId = "ghl-form-embed-script";
    const loadScript = () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(loadScript, { timeout: 1500 });
      return () => window.cancelIdleCallback && window.cancelIdleCallback(idleId);
    }
    const timeoutId = setTimeout(loadScript, 100);
    return () => clearTimeout(timeoutId);
  }, [activeFormId]);

  useEffect(() => {
    // Listen for iframe height messages from GHL embed
    const handleMessage = (event) => {
      try {
        if (typeof event.data === "string" && event.data.includes("height")) {
          const data = JSON.parse(event.data);
          if (data && data.height && typeof data.height === "number") {
            setIframeHeight(`${data.height}px`);
          }
        } else if (event.data && typeof event.data === "object" && event.data.height) {
          setIframeHeight(`${event.data.height}px`);
        }
      } catch (e) {
        // Ignore non-JSON postMessages
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div
      className={`w-full bg-white rounded-2xl shadow-xl shadow-indigo-950/10 border border-gray-100 overflow-hidden transition-all duration-300 relative self-center p-2 sm:p-4 ${className}`}
    >
      <div className="w-full">
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${activeFormId}`}
          style={{
            width: "100%",
            height: iframeHeight || "580px",
            minHeight: "560px",
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
          data-height="580"
          data-layout-iframe-id={`inline-${activeFormId}`}
          data-form-id={activeFormId}
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="Contact form new website"
        />
      </div>
    </div>
  );
};

export default QuickQuoteForm;
