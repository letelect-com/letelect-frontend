import React from "react";
import styled from "styled-components";
import { Sidebar, Header } from "../components";

const Dashboard = () => {
  return (
    <Parent>
      <Header />
      <Content>
        <Sidebar />
        <MainContent>Hello</MainContent>
      </Content>
    </Parent>
  );
};

const Parent = styled.main`
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  margin-top: 4.5rem;
`;

const MainContent = styled.div`
  flex: 80%;
`;

export default Dashboard;
