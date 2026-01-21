import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import MouseFollower from '../components/MouseFollower';

const RootLayout = () => {
    return (
    <div className="min-h-screen bg-base-100 text-base-content dark:bg-[#020b0b] dark:text-slate-100 transition-colors duration-300">            <MouseFollower></MouseFollower>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;