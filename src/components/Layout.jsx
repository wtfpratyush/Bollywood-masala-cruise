import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import BenefitsBar from "./BenefitsBar";
import Footer from "./Footer";
import ChatWidgets from "./ChatWidgets";

const Layout = ({ children, showBenefits = true }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#1a1a3a] focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      {showBenefits && <BenefitsBar />}
      <Footer />
      <ChatWidgets />
    </div>
  );
};

export default Layout;
