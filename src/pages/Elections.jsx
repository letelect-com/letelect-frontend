import React from "react";
import styled from "styled-components";
import { Sidebar } from "../components";
import { Parent, Content, MainContent } from "../pages/Dashboard";

const Dashboard = () => {
  return (
    <Parent>
      <Content>
        <Sidebar />
        <MainContent>Hello</MainContent>
      </Content>
    </Parent>
  );
};

export default Dashboard;
