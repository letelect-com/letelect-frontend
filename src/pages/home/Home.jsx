import React from "react";
import { Navbar } from "../../components";
import hero from "../../images/hero.jpg";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import SettingsIcon from "@mui/icons-material/Settings";

const Home = () => {
  const features = [
    {
      name: "Easy to manage and maintain",
      icon: <BusinessCenterIcon />,
      description: `Our user-friendly interface and streamlined processes make it easy
                    for you to manage your elections, even if you have little or no
                    technical experience.`,
    },
    {
      name: "Fast and efficient",
      icon: <ElectricBoltIcon />,
      description: `Our online voting system is designed to deliver quick and accurate
                    results, saving you time and effort.`,
    },
    {
      name: "Secure and reliable",
      icon: <EnhancedEncryptionIcon />,
      description: `Our online voting system is built with state-of-the-art security
                    features to ensure the integrity and confidentiality of your
                    elections.`,
    },
    {
      name: "Customizable ballot options",
      icon: <SettingsIcon />,
      description: `You can tailor your ballot options to fit your unique needs and
                    requirements, ensuring a smooth and hassle-free voting experience.`,
    },
  ];
  return (
    <>
      <Navbar />
      <section className="lg:grid grid-cols-2 place-items-center gap-10 py-9 mt-6">
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
      <section>
        <h1 className="my-6 font-open font-black text-center lg:text-2xl w-[50%] m-auto">
          Take Your Elections to the Next Level with These Game-Changing
          Features
        </h1>
        <div className="grid grid-cols-4 gap-4 text-center">
          {features &&
            features.map((feature) => {
              return (
                <div key={feature.name}>
                  <div>{feature.icon}</div>
                  <h3>{feature.name}</h3>
                  <p>{feature.description}</p>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Home;
