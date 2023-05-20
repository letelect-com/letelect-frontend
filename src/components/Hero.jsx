import React from "react";
import hero from "./../images/hero-new.jpg";
import { styled } from "styled-components";
import { Button } from "./Navbar";
import "./../index.css";

const Hero = () => {
  return (
    <HeroContainer>
      <TextBox>
        <h1>
          Explore the power of <span>electronic voting</span>
        </h1>
        <p>
          Vote from anywhere, anytime, with ease. Our online voting system
          ensures secure, hassle-free, and accessible elections for all. Join
          the thousands who have already trusted us to revolutionize the way
          they vote.
        </p>
        <Button>Get Started</Button>
      </TextBox>
      <HeroBox>
        <img src={hero} alt="hero" />
      </HeroBox>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding-inline: var(--inline);
  margin-block: 4rem;
  padding-top: 2rem;
  gap: 2rem;
`;

const TextBox = styled.div`
  & h1 {
    font-size: 4rem;
    font-family: var(--font-open);
    margin-bottom: 1rem;
  }
  & span {
    color: var(--bg-blue);
    font-family: var(--font-open);
  }
  & p {
    margin-bottom: 1rem;
    color: var(--gray-shade);
  }
`;

const HeroBox = styled.div`
  width: 100%;
  & img {
    width: 100%;
    border-radius: 10%;
    mix-blend-mode: darken;
  }
`;

export default Hero;
