import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <TopBar>
      <Link>
        <h1>Letelect</h1>
      </Link>
    </TopBar>
  );
};

const TopBar = styled.header`
  background: #fbfaf2;
  box-shadow: 2.5px 2.5px 5px #d5d5ce, -2.5px -2.5px 5px #ffffff;
  text-align: center;
  & h1 {
    font-family: var(--font-dance);
    color: var(--bg-blue);
    font-weight: 700;
    font-size: 2rem;
    padding-block: 0.5rem;
  }
`;

export default Header;
