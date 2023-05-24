import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <TopBar>
      <div>
        <h1>Letelect</h1>
        <MenuIcon fontSize="large" />
      </div>
      <h2>Dashboard</h2>
      <div>
        <NotificationsActiveIcon />
        <AccountCircleIcon />
      </div>
    </TopBar>
  );
};

const TopBar = styled.header`
  background: #fbfaf2;
  box-shadow: 2.5px 2.5px 5px #d5d5ce, -2.5px -2.5px 5px #ffffff;
  margin-bottom: 0.25rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;

  & :nth-child(1) {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--blue-shade);
    & :nth-child(2) {
      cursor: pointer;
    }
  }
  & :nth-child(2) {
    flex: 3;
    text-align: center;
  }
  & :nth-child(3) {
    flex: 1;
    display: flex;
    float: right;
  }
  & h1 {
    font-family: var(--font-dance);
    color: var(--blue-shade);
    font-weight: 700;
    font-size: 2rem;
    padding-block: 0.5rem;
  }
`;

export default Header;
