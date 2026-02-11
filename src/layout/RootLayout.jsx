// src/layout/RootLayout.jsx
import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MouseFollower from "../components/MouseFollower";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content dark:bg-[#020b0b] dark:text-slate-100 transition-colors duration-300">
      <MouseFollower />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;