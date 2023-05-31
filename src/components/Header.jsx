import React from "react";
import styled from "styled-components";
import { SearchBox } from "../components";
import Ellipse from "./../images/Ellipse 13.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <TopBar>
      <SearchBox />
      <div>
        <img src={Ellipse} />
        <p>Hello Gideon</p>
        <span>
          <AccountCircleIcon fontSize="large" />
        </span>
      </div>
    </TopBar>
  );
};

const TopBar = styled.header`
  flex: 10%;
  background: #f7fafd;
  color: var(--text-white);
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 3%;

  & div {
    color: black;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:nth-child(3) {
      cursor: pointer;
    }
  }
`;

export default Header;
