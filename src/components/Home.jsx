import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Gallery from "./Gallery";
import PopularCruises from "./PopularCruises";
import OnboardExperience from "./OnboardExperience";
import PastCruises from "./PastCruises";
import FoodTestimonials from "./FoodTestimonials";
import BenefitsBar from "./BenefitsBar";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import ChatWidgets from "./ChatWidgets";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <PopularCruises />
        <OnboardExperience />
        <PastCruises />
        <FoodTestimonials />
        <BenefitsBar />
        <FaqSection />
      </main>
      <Footer />
      <ChatWidgets />
    </div>
  );
};

export default Home;
