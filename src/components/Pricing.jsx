import React from "react";
import { PropsSection } from "./Features";
import styled, { css } from "styled-components";
import "./../index.css";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      plan: "Free",
      price: 500,
      button: <button>Buy Now</button>,
      checkOne: "Up to 500 voters per election",
      checkTwo: "Customizable ballot options and voting rules",
      checkThree: "Real-time vote counting and results reporting",
      checkFour: "Automatic voter verification and authentication",
      checkFive: "Standard customer support",
    },
    {
      id: 2,
      plan: "Basic",
      price: 500,
      button: <button>Buy Now</button>,
      checkOne: "Up to 500 voters per election",
      checkTwo: "Customizable ballot options and voting rules",
      checkThree: "Real-time vote counting and results reporting",
      checkFour: "Automatic voter verification and authentication",
      checkFive: "Standard customer support",
    },
    {
      id: 3,
      plan: "Professional",
      price: 1000,
      button: <button>Buy Now</button>,
      checkOne: "Up to 2,500 voters per election",
      checkTwo: "Advanced security features for added protection",
      checkThree: "Customizable branding options for your organization",
      checkFour: "Dedicated account manager and technical support",
      checkFive: "Priority customer support",
    },
    {
      id: 4,
      plan: "Ultimate",
      price: 1500,
      button: <button>Buy Now</button>,
      checkOne: "Up to 10,000+ voters per election",
      checkTwo: "Customizable integrations with your existing systems",
      checkThree: "Advanced analytics and data visualization tools",
      checkFour: "Customizable API options for developers",
      checkFive: "24/7 customer support",
    },
  ];

  return (
    <PropsSection>
      <h1>Get More for Your Money: Explore Our Competitive Pricing</h1>
      <Control>
        <Splide
          options={{
            perPage: 3,
            gap: "1rem",
            pagination: false,
            arrows: true,
            drag: "free",
          }}
        >
          {pricingPlans &&
            pricingPlans.map((item, index) => {
              return (
                <SplideSlide key={index}>
                  <PricingItem
                    key={item.id}
                    isBlue={item.id === 3 || item.id == 1}
                  >
                    <h3>{item.plan}</h3>
                    <Price>
                      <span>Ghc </span>
                      <span>{item.price}</span>
                      <span> /mo</span>
                    </Price>
                    <PriceCheck>
                      <p>
                        <span>👉</span>
                        <span>{item.checkOne}</span>
                      </p>
                      <p>
                        <span>👉</span>
                        <span>{item.checkTwo}</span>
                      </p>
                      <p>
                        <span>👉</span>
                        <span>{item.checkThree}</span>
                      </p>
                      <p>
                        <span>👉</span>
                        <span>{item.checkFour}</span>
                      </p>
                      <p>
                        <span>👉</span>
                        <span>{item.checkFive}</span>
                      </p>
                    </PriceCheck>
                    <Link>{item.button}</Link>
                  </PricingItem>
                </SplideSlide>
              );
            })}
        </Splide>
      </Control>
    </PropsSection>
  );
};

const PricingItem = styled.div`
  background-color: ${({ isBlue }) =>
    isBlue ? "var(--bg-blue)" : "rgba(255, 255, 255, 0.2)"};
  color: ${({ isBlue }) =>
    isBlue ? "var(--text-white)" : "var(--text-black)"};
  padding-inline: 1.5rem;
  padding-block: 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.3rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  & h3 {
    text-align: center;
    padding-block: 0.5rem;
    font-family: var(--font-volkhov);
    font-size: 1.5rem;
  }
  & button {
    width: 100%;
    padding-block: 0.8rem;
    background: ${({ isBlue }) =>
      isBlue ? "var(--text-white)" : "var(--bg-blue)"};
    color: ${({ isBlue }) => (isBlue ? "var(--bg-blue)" : "var(--text-white)")};
    font-weight: bold;
    border: 1px solid var(--bg-blue);
    border-radius: 0.3rem;
    font-size: 1rem;
  }
`;
const Price = styled.p`
  text-align: center;
  & :nth-child(2) {
    font-size: 2.5rem;
  }
`;

const PriceCheck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding-block: 1rem;
  font-weight: 500;
  & p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Control = styled.div`
  padding-inline: 10%;
  ${(props) =>
    props.features &&
    css`
      padding-inline: 5%;
    `}
`;

export default Pricing;
