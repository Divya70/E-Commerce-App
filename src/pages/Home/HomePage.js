import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Demo } from "../../components/Home/Demo";
import { Featured } from "../../components/Home/Featured";
import { HeroSection } from "../../components/Home/HeroSection";
import { Navbar } from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="brand-container">
        <Navbar />
        <HeroSection />
        <Featured />
        <Demo />
        <Footer />
      </div>
    </>
  );
};
export { HomePage };
