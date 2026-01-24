import React from "react";
import Hero from "./Hero";
import HowItWorks from "./HowitWork";
import Features from "./Features";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import ScanShowcase from "./ScanShowcase";
import WhyChooseSection from "./WhyChooseSection";
import MarqueeSection from "./MarqueeSection";
import IngredientsCompareSection from "./IngredientsCompareSection";
import MissionSection from "./MissionSection";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <main className="bg-transparent text-inherit">
        <HowItWorks />
        <ScanShowcase /> {/* Swiper slider section */}
        <Features />
        <Pricing />
        <IngredientsCompareSection></IngredientsCompareSection>
        <MarqueeSection></MarqueeSection>
        <FAQ />
        <MissionSection></MissionSection>
        <WhyChooseUs></WhyChooseUs>
        <WhyChooseSection></WhyChooseSection>
      </main>
    </div>
  );
};

export default Home;
