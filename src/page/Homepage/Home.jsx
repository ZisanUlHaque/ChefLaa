import React from "react";
import Hero from "./Hero";
import HowItWorks from "./HowitWork";
import Features from "./Features";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import ScanShowcase from "./ScanShowcase";
import TechStackSection from "./TechStackSection";
import WhyChooseSection from "./WhyChooseSection";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
<main className="bg-transparent text-inherit">
        <HowItWorks />
        <ScanShowcase /> {/* Swiper slider section */}
        <Features />
        <Pricing />
        <TechStackSection></TechStackSection>
        <FAQ />
        <WhyChooseSection></WhyChooseSection>
      </main>
    </div>
  );
};

export default Home;
