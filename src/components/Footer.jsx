import React from "react";
import { styled } from "styled-components";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsMessenger,
} from "react-icons/bs";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <h1>Letelect.</h1>
        <p>
          Our mission is to make the voting process more accessible and
          convenient for everyone while maintaining the highest level of
          security and integrity. Join us in shaping the future of democracy by
          voting online with confidence and ease.
        </p>
        <Social className="cinder__footer-links_icons">
          <BsInstagram size={30} color="var(--bg-blue)" />
          <BsTwitter size={30} color="var(--bg-blue)" />
          <BsFacebook size={30} color="var(--bg-blue)" />
          <BsMessenger size={30} color="var(--bg-blue)" />
        </Social>
        <Copyright className="cinder__footer-copyright">
          <span>COPYRIGHT © 2023 </span>
          <span className="cinder__footer-copyright-cinder">Letelect</span>
          <span> ALL RIGHTS RESERVED.</span>
        </Copyright>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background: var(--text-black);
`;

const FooterContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 1.5rem;
  & h1 {
    font-family: var(--font-dance);
    color: var(--text-white);
    font-weight: 700;
    font-size: 2.5rem;
  }
  & p {
    color: var(--text-white);
    width: 60%;
    text-align: center;
    padding-block: 0.5rem;
  }
`;

const Social = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-block: 1rem;
`;
const Copyright = styled.div`
  font-weight: bold;
  color: var(--text-white);
  text-align: center;
  margin-top: 1rem;
  & :nth-child(2) {
    color: var(--bg-blue);
    font-size: 1rem;
  }
`;
export default Footer;
