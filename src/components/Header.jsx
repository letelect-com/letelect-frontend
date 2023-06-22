import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SearchBox } from "../components";
import Ellipse from "./../images/Ellipse 13.png";
import { Button } from "./Navbar";
import AuthContext from "../context/AuthProvider";

const Header = () => {
  const { handleLogout } = useContext(AuthContext);
  const [clickedLoggedOut, setClickedLoggedOut] = useState(false);
  const callLogoutFunction = () => {
    setClickedLoggedOut(true);
    handleLogout();
  };

  return (
    <TopBar>
      <SearchBox />
      <div>
        <img src={Ellipse} />
        <p>Hello Okantey!</p>
        <Button red onClick={callLogoutFunction}>
          {clickedLoggedOut ? "Please wait.." : "Logout"}
        </Button>
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
  padding-block: 0.6rem;
  overflow: hidden;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

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
