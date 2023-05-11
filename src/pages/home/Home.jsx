import React from "react";
import { Navbar } from "../../components";
import hero from "../../images/hero.jpg";
import security from "../../images/icons8-encryption-68.png";
import fast from "../../images/icons8-flash-48.png";
import customize from "../../images/icons8-settings-192.png";
import manage from "../../images/icons8-manage-48.png";

const Home = () => {
  const features = [
    {
      name: "Easy to manage and maintain",
      icon: manage,
      description: `Our user-friendly interface and streamlined processes make it easy
                    for you to manage your elections, even if you have little or no
                    technical experience.`,
    },
    {
      name: "Fast and efficient",
      icon: fast,
      description: `Our online voting system is designed to deliver quick and accurate
                    results, saving you time and effort.`,
    },
    {
      name: "Secure and reliable",
      icon: security,
      description: `Our online voting system is built with state-of-the-art security
                    features to ensure the integrity and confidentiality of your
                    elections.`,
    },
    {
      name: "Customizable ballot options",
      icon: customize,
      description: `You can tailor your ballot options to fit your unique needs and
                    requirements, ensuring a smooth and hassle-free voting experience.`,
    },
  ];

  const pricingPlans = [
    {
      id: 1,
      plan: "Basic",
      price: 300,
      checkOne: "Up to 500 voters per election",
      checkTwo: "Customizable ballot options and voting rules",
      checkThree: "Real-time vote counting and results reporting",
      checkFour: "Automatic voter verification and authentication",
      checkFive: "Standard customer support",
    },
    {
      id: 2,
      plan: "Professional",
      price: 500,
      checkOne: "Up to 2,500 voters per election",
      checkTwo: "Advanced security features for added protection",
      checkThree: "Customizable branding options for your organization",
      checkFour: "Dedicated account manager and technical support",
      checkFive: "Priority customer support",
    },
    {
      id: 3,
      plan: "Ultimate",
      price: 700,
      checkOne: "Up to 10,000+ voters per election",
      checkTwo: "Customizable integrations with your existing systems",
      checkThree: "Advanced analytics and data visualization tools",
      checkFour:
        "Customizable multi-factor authentication options for added security",
      checkFive: "24/7 customer support with guaranteed response times",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="px-[5%] lg:grid grid-cols-2 place-items-center gap-10 py-9 mt-6">
        <div className="py-12">
          <h1 className="my-6 font-open font-black lg:text-[3.8rem] leading-tight">
            Explore the power of{" "}
            <span className="text-primary">electronic voting</span>
          </h1>
          <p className="my-4">
            Vote from anywhere, anytime, with ease. Our online voting system
            ensures secure, hassle-free, and accessible elections for all. Join
            the thousands who have already trusted us to revolutionize the way
            they vote.
          </p>
          <button className="bg-primary px-5 py-2 text-white font-bold rounded-md">
            Get Started
          </button>
        </div>
        <div>
          <img src={hero} alt="hero" className="w-auto rounded-full" />
        </div>
      </section>
      <section className="px-[5%]">
        <h1 className="my-16 font-open font-black text-center text-[#1f456e] lg:text-2xl w-[50%] m-auto">
          Take Your Elections to the Next Level with These Game-Changing
          Features
        </h1>
        <div className="grid grid-cols-4 gap-4 text-center py-6">
          {features &&
            features.map((feature) => {
              return (
                <div
                  key={feature.name}
                  className="text-center px-2 py-10 rounded-md shadow-xl"
                >
                  <div className="flex justify-center items-center py-4">
                    <img
                      src={feature.icon}
                      alt={feature.name}
                      className="w-14 m-auto"
                    />
                  </div>
                  <h3 className="font-bold py-2">{feature.name}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
        </div>
      </section>
      <section className="px-[5%]">
        <h1 className="my-16 font-open font-black text-center text-[#1f456e] lg:text-2xl w-[50%] m-auto">
          Pricing that Works for You: Choose the Right Plan
        </h1>
        <div className="grid grid-cols-3 px-[5%]">
          {pricingPlans &&
            pricingPlans.map((pricingPlan) => {
              return (
                <div
                  key={pricingPlan.id}
                  className={
                    pricingPlan.id === 2
                      ? "bg-primary shadow-2xl text-white px-4 py-8"
                      : "bg-accent shadow-2xl text-dark px-4 py-8 rounded-2xl"
                  }
                >
                  <h1
                    className={
                      pricingPlan.id === 2
                        ? "text-center font-bold text-white text-xl"
                        : "text-primary font-bold text-center text-xl"
                    }
                  >
                    {pricingPlan.plan}
                  </h1>
                  <p className="text-center py-4">
                    <span>Ghc </span>
                    <span className="font-volkhov font-black text-5xl">
                      {pricingPlan.price}
                    </span>
                    <span> /mo</span>
                  </p>
                  <div className="flex flex-col items-start gap-3 font-medium">
                    <p className="flex items-center gap-2">
                      <span>👉</span>
                      <span>{pricingPlan.checkOne}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>👉</span>
                      <span>{pricingPlan.checkTwo}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>👉</span>
                      <span>{pricingPlan.checkThree}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>👉</span>
                      <span>{pricingPlan.checkFour}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>👉</span>
                      <span>{pricingPlan.checkFive}</span>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Home;
