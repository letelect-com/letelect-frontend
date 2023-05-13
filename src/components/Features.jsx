import React from "react";
import { styled, css } from "styled-components";
import security from "./../images/icons8-encryption-68.png";
import fast from "./../images/icons8-flash-48.png";
import customize from "./../images/icons8-settings-192.png";
import manage from "./../images/icons8-manage-48.png";

const Features = () => {
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
  return (
    <PropsSection>
      <h1>
        Take Your Elections to the Next Level with These Game-Changing Features
      </h1>
      <FeatureContainer>
        {features &&
          features.map((item) => {
            return (
              <FeatureItem key={item.name}>
                <div>
                  <img src={item.icon} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </FeatureItem>
            );
          })}
      </FeatureContainer>
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
    margin-bottom: 2rem;
  }
`;
export const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-inline: var(--inline);
  ${(props) =>
    props.pricing &&
    css`
      display: block;
      padding-inline: 10%;
    `}
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
  transition: 0.5s ease-in-out;
  margin-block: 1rem;

  &:hover {
    background-color: var(--bg-blue);
    color: white;

    & h3 {
      color: var(--text-white);
      transition: 0.5s ease-in-out;
    }
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
