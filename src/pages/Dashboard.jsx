import React from "react";
import styled from "styled-components";
import { Sidebar, Header } from "../components";

const Dashboard = () => {
  return (
    <Parent>
      <Header />
      <Content>
        <Sidebar />
        <div>hello</div>
      </Content>
    </Parent>
  );
};

const Parent = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
`;

export default Dashboard;
