import React from "react";
import Header from "../components/Header";
import NavComponent from "../components/NavComponent";
import Section from "../components/Section";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Profession from "../components/Profession";
function Home() {
  return (
    <div>
      <NavComponent />
      <Header />
      <Section />
      <Features />
      <Profession />
      <Footer />
    </div>
  );
}

export default Home;
