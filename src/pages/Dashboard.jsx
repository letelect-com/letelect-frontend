import React from "react";
import styled from "styled-components";
import { Sidebar } from "../components";

const Dashboard = () => {
  return (
    <Parent>
      <Content>
        <Sidebar />
        <MainContent>
          <TopBar>Top Bar</TopBar>
          <View>
            Hello
          </View>
        </MainContent>
      </Content>
    </Parent>
  );
};

export const Parent = styled.main`
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  flex: 80%;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.header`
  flex: 10%;
  background: var(--text-black);
  color: var(--text-white);
`;
const View = styled.div`
  flex: 90%;
`;

export default Dashboard;
