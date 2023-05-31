import React from "react";
import styled from "styled-components";
import { Header, Sidebar } from "../components";
import { Button } from "../components/Navbar";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Dashboard = () => {
  return (
    <Parent>
      <Content>
        <Sidebar />
        <MainContent>
          <Header />
          <View>
            <Intro>
              <div>
                <h2>Dashboard</h2>
                <p>Breakdown of the current election.</p>
              </div>
              <div>
                <Button dashboard>
                  <CloudDownloadIcon />
                  <span>Download Results</span>
                </Button>
              </div>
            </Intro>
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

const View = styled.div`
  flex: 90%;
  padding-inline: 3%;
`;

const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5rem;
`;

export default Dashboard;
