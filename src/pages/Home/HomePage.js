import React from "react";
import { Footer, Demo, Featured, HeroSection, Navbar } from "../../components";
import "./homepage.css";
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
