import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./../index.css";
import styled, { css } from "styled-components";
import "./../index.css";
import AuthContext from "../context/AuthProvider";

const Navbar = () => {
  const { auth } = useContext(AuthContext);
  return (
    <Navigation>
      <Link to="/">
        <h1>Letelect.</h1>
      </Link>
      <div>
        <NavLink to="/">Features</NavLink>
        <NavLink to="/">Pricing</NavLink>
        <NavLink to="/">Testimonials</NavLink>
        <NavLink to="/">Contact</NavLink>
      </div>
      <div>
        <Button onClick={() => (window.location.href = "/login")}>
          {auth ? "Logout" : "Login"}
        </Button>
        <Button white>Register</Button>
      </div>
    </Navigation>
  );
};

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: var(--inline);
  padding-block: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  margin-bottom: 10rem;
  background: #fbfaf2;
  box-shadow: 1.5px 1.5px 5px #d5d5ce, -1.5px -1.5px 5px #ffffff;
  & h1 {
    font-family: var(--font-dance);
    color: var(--bg-blue);
    font-weight: 700;
    font-size: 2.5rem;
  }
  & div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  background-color: var(--bg-blue);
  padding-block: 0.5rem;
  padding-inline: 1.7rem;
  border: 1px solid var(--bg-blue);
  color: var(--text-white);
  font-weight: 600;
  font-family: var(--open);
  border-radius: 0.3rem;
  ${(props) =>
    props.white &&
    css`
      background-color: var(----text-white);
      color: var(--bg-blue);
    `}
  ${(props) =>
    props.priceButton &&
    css`
      background-color: var(----text-white);
      color: var(--bg-blue);
      width: 100%;
    `}
    ${(props) =>
    props.dashboard &&
    css`
      padding-block: 0.8rem;
      font-size: 0.95rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `}
    ${(props) =>
    props.red &&
    css`
      background: red;
      padding-block: 0.6rem;
      padding-inline: 1.5rem;
      font-size: 0.95rem;
      border: 1px solid red;
    `}
`;

export default Navbar;
