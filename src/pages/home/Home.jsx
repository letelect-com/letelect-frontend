import React from "react";
import { Navbar } from "../../components";
import hero from "../../images/hero.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="lg:grid grid-cols-2 gap-10 py-9 mt-16">
          <div className="py-12">
            <h1 className="my-6 font-poppins font-black lg:text-[3.7rem] leading-tight">
              Explore the power of{" "}
              <span className="text-primary">electronic voting</span>
            </h1>
            <p className="my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              ullam temporibus aperiam blanditiis deserunt eius totam.
              Doloremque, doloribus. Consectetur esse et officia illo eligendi,
              rerum odit in alias doloribus blanditiis?
            </p>
            <button className="bg-primary px-5 py-2 text-white font-bold rounded-md">
              Get Started
            </button>
          </div>
          <div>
            <img src={hero} alt="hero" className="w-full rounded-full" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
