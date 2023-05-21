import React from "react";
import styled from "styled-components";
import { Sidebar } from "../components";

const Dashboard = () => {
  return (
    <Parent>
      <Header></Header>
      <Content>
        <Sidebar />
        <div></div>
      </Content>
    </Parent>
  );
};

const Parent = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div``;

const Content = styled.div``;

export default Dashboard;
