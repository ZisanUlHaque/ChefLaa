import React from 'react';
import Hero from './Hero';
import HowItWorks from './HowitWork';
import Features from './Features';
import Pricing from './Pricing';
import FAQ from './FAQ';
import ScanShowcase from './ScanShowcase';

const Home = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
            <ScanShowcase></ScanShowcase>
            <Features></Features>
            <Pricing></Pricing>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;