import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./../index.css";
import styled, { css } from "styled-components";
import "./../index.css";

const Navbar = () => {
  return (
    <Navigation>
      <Link>
        <h1>Letelect.</h1>
      </Link>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Features</NavLink>
        <NavLink to="/">Pricing</NavLink>
        <NavLink to="/">Contact</NavLink>
      </div>
      <div>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/register">
          <Button white>Register</Button>
        </Link>
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
  box-shadow: 2.5px 2.5px 5px #d5d5ce, -2.5px -2.5px 5px #ffffff;
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
`;

export default Navbar;
