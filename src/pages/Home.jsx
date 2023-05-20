import React from "react";
import {
  Navbar,
  Hero,
  Features,
  Pricing,
  Contact,
  Footer,
} from "../components/";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
