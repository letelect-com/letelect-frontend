import React from "react";
import { styled, css } from "styled-components";
import security from "./../images/icons8-encryption-68.png";
import fast from "./../images/icons8-flash-48.png";
import customize from "./../images/icons8-settings-192.png";
import manage from "./../images/icons8-manage-48.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Control } from "./Pricing";
import "@splidejs/splide/dist/css/splide.min.css";

const Features = () => {
  const features = [
    {
      id: 1,
      name: "Easy to manage and maintain",
      icon: manage,
      description: `Our user-friendly interface and streamlined processes make it easy
                    for you to manage your elections, even if you have little or no
                    technical experience.`,
    },
    {
      id: 2,
      name: "Fast and efficient",
      icon: fast,
      description: `Our online voting system is designed to deliver quick and accurate
                    results, saving you time and effort.`,
    },
    {
      id: 3,
      name: "Secure and reliable",
      icon: security,
      description: `Our online voting system is built with state-of-the-art security
                    features to ensure the integrity and confidentiality of your
                    elections.`,
    },
    {
      id: 4,
      name: "Customizable ballot options",
      icon: customize,
      description: `You can tailor your ballot options to fit your unique needs and
                    requirements, ensuring a smooth and hassle-free voting experience.`,
    },
    {
      id: 5,
      name: "Multiple voting methods",
      icon: manage,
      description: `You can offer voters multiple ways to cast their ballots, 
                    including online, phone, and SMS, making it easy for everyone to participate.`,
    },
    {
      id: 6,
      name: "Automatic voter verification and authentication",
      icon: fast,
      description: `Our system uses advanced technology to verify and authenticate voters, 
                    ensuring that each vote is legitimate.`,
    },
  ];
  return (
    <PropsSection>
      <h1>
        Take Your Elections to the Next Level with These Game-Changing Features
      </h1>
      <Control features>
        <Splide
          options={{
            perPage: 4,
            gap: "1rem",
            pagination: false,
            arrows: true,
            drag: "free",
            perMove: 1,
          }}
        >
          {features &&
            features.map((item, index) => {
              return (
                <SplideSlide key={index}>
                  <FeatureItem key={item.id}>
                    <div>
                      <img src={item.icon} alt={item.name} />
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </FeatureItem>
                </SplideSlide>
              );
            })}
        </Splide>
      </Control>
    </PropsSection>
  );
};

export const PropsSection = styled.div`
  margin-block: 2rem;
  & h1 {
    color: var(--bg-blue);
    width: 35%;
    text-align: center;
    margin: 0 auto;
    font-size: 1.25rem;
    margin-block: 4rem;
  }
`;

const FeatureItem = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding-inline: 1rem;
  padding-block: 1.5rem;
  text-align: center;
  transition: 0.15s ease-in-out;
  margin-block: 1rem;
  height: 20rem;

  &:hover {
    transform: translateY(-10px);
  }

  & img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 100%;
    padding: 0.5rem;
    margin: auto;
  }

  & h3 {
    font-size: 1rem;
    padding-block: 0.5rem;
    color: var(--blue-shade);
  }
`;

export default Features;
