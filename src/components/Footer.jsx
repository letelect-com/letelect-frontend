import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContentLeft>
        <h1>Letelect.</h1>
        <p>
          Our mission is to make the voting process more accessible and
          convenient for everyone while maintaining the highest level of
          security and integrity. Join us in shaping the future of democracy by
          voting online with confidence and ease.
        </p>
      </FooterContentLeft>
      <FooterContentMiddle></FooterContentMiddle>
      <FooterContentRight></FooterContentRight>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--text-black);
`;

const FooterContentLeft = styled.div`
  & h1 {
    font-family: var(--font-dance);
    color: var(--text-white);
    font-weight: 700;
    font-size: 2.5rem;
  }
  & p {
    color: var(--text-white);
  }
`;

const FooterContentMiddle = styled.div``;
const FooterContentRight = styled.div``;
export default Footer;
