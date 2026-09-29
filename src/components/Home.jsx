import React, { Suspense, lazy } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

// Below-the-fold sections load as separate chunks so the hero (LCP) renders sooner
const Gallery = lazy(() => import("./Gallery"));
const PopularCruises = lazy(() => import("./PopularCruises"));
const OnboardExperience = lazy(() => import("./OnboardExperience"));
const PastCruises = lazy(() => import("./PastCruises"));
const FoodTestimonials = lazy(() => import("./FoodTestimonials"));
const BenefitsBar = lazy(() => import("./BenefitsBar"));
const FaqSection = lazy(() => import("./FaqSection"));
const ChatWidgets = lazy(() => import("./ChatWidgets"));

const Home = () => {
  return (
    <div className="bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[#1a1a3a] focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        {/* Tall blank fallback keeps the footer below the fold while section chunks load */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <Gallery />
          <PopularCruises />
          <OnboardExperience />
          <PastCruises />
          <FoodTestimonials />
          <BenefitsBar />
          <FaqSection />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidgets />
      </Suspense>
    </div>
  );
};

export default Home;
