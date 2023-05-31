import React from "react";
import { SidebarData } from "../data/SidebarData";
import { styled } from "styled-components";
import Quill from "../images/Quill With Ink.png";

const Sidebar = () => {
  return (
    <Container>
      <Logo>
        <div>
          <img src={Quill} alt="logo" />
        </div>
        <h1>Letelect</h1>
      </Logo>
      <Links>
        {SidebarData.map((item) => {
          return (
            <SideLink
              style={{
                background:
                  window.location.pathname === item.link
                    ? "var(--bg-white)"
                    : "",
                color:
                  window.location.pathname === item.link
                    ? "var(--bg-blue)"
                    : "",
              }}
              key={item.id}
              onClick={() => (window.location.pathname = item.link)}
            >
              <span>{item.icon}</span>
              <Title>{item.name}</Title>
            </SideLink>
          );
        })}
      </Links>
    </Container>
  );
};
const Logo = styled.div`
  background-color: #1d242e;
  color: var(--text-white);
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 0.7rem;

  & img {
    width: 2rem;
  }
  & h1 {
    font-size: 2rem;
    font-family: var(--font-dance);
  }
`;
const SideLink = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-block: 0.8rem;
  font-weight: 700;
  transition: 0.25s ease-out;
  border: 0.5px solid var(--bg-blue);
  :nth-child(1) {
    flex: 20%;
    display: grid;
    place-items: center;
  }
  display: flex;
  align-items: center;

  &:hover {
    background: var(--bg-white);
    color: var(--bg-blue);
    cursor: pointer;
  }
`;
const Links = styled.ul`
  display: flex;
  flex-direction: column;
  color: var(--text-white);
`;

const Title = styled.span`
  flex: 80%;
`;
const Container = styled.div`
  background-color: var(--bg-blue);
  flex: 20%;
  width: inherit;
  height: 100vh;
`;

export default Sidebar;
