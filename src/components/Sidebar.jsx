import React from "react";
import { SidebarData } from "../data/SidebarData";
import { styled } from "styled-components";

const Sidebar = () => {
  return (
    <Container>
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

const SideLink = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-block: 1rem;
  font-weight: 700;
  transition: 0.25s ease-out;
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
  width: 20%;
  height: 100vh;
  border: 1px solid var(--bg-blue);
  position: fixed;
`;

export default Sidebar;
