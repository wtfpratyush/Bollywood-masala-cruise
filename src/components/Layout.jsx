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
      <Header />
      <main className="flex-1">{children}</main>
      {showBenefits && <BenefitsBar />}
      <Footer />
      <ChatWidgets />
    </div>
  );
};

export default Layout;
