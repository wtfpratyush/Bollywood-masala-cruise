import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const DEFAULT_FORM_ID = "8LYQHo3CuLbis8cNAyyD";

const QuickQuoteForm = ({ className = "", formId = DEFAULT_FORM_ID }) => {
  const activeFormId =
    !formId || formId === "HERO_FORM_ID_PLACEHOLDER"
      ? DEFAULT_FORM_ID
      : formId;

  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ensure GoHighLevel form embed script is loaded (deferred so it doesn't
    // compete with critical rendering work; the iframe itself loads immediately)
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
      const idleId = window.requestIdleCallback(loadScript, { timeout: 2000 });
      return () => window.cancelIdleCallback && window.cancelIdleCallback(idleId);
    }
    const timeoutId = setTimeout(loadScript, 200);
    return () => clearTimeout(timeoutId);
  }, [activeFormId]);

  // Layout effect so the first paint already uses the right mobile/desktop sizing (avoids layout shift)
  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const innerWidth = containerWidth - 28; // account for card padding

      // On small mobile screens (< 480px), use responsive single column
      if (window.innerWidth < 480 || containerWidth < 360) {
        setIsMobile(true);
        setScale(1);
      } else {
        setIsMobile(false);
        // Base width for GHL 2-column mode is 680px for optimal density and crisp spacing
        const baseWidth = 680;
        const newScale = Math.min(1, Math.max(0.4, innerWidth / baseWidth));
        setScale(newScale);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      observer.disconnect();
    };
  }, []);

  // Internal height of GHL 2-column layout (Header + 3 rows + submit button + subtext + margins)
  const baseHeight = 560;
  const scaledHeight = isMobile
    ? "auto"
    : `${Math.round(baseHeight * scale) + 26}px`;

  return (
    <div
      ref={containerRef}
      className={`w-full bg-white rounded-2xl shadow-xl shadow-indigo-950/10 border border-gray-100 overflow-hidden transition-all duration-300 relative self-center p-3.5 ${className}`}
      style={{
        height: isMobile ? "auto" : scaledHeight,
        minHeight: isMobile ? "580px" : "auto",
      }}
    >
      <div
        style={{
          width: isMobile ? "100%" : "680px",
          transform: isMobile ? "none" : `scale(${scale})`,
          transformOrigin: "top left",
          height: isMobile ? "100%" : `${baseHeight}px`,
        }}
      >
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${activeFormId}`}
          style={{
            width: "100%",
            height: isMobile ? "580px" : `${baseHeight}px`,
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
          data-height={isMobile ? "580" : `${baseHeight}`}
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
