import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Header, Sidebar, BarChart } from "../components";
import { Button } from "../components/Navbar";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { UserData } from "../data/Data";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Accepted Votes",
        data: UserData.map((data) => data.accepted),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
    },
  };
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
            <div>
              <BarChart chartData={userData} options={options} />
            </div>
          </View>
        </MainContent>
      </Content>
    </Parent>
  );
};

export const Parent = styled.main`
  width: 100dvw;
  height: 100dvh;
  overflow-x: hidden;
`;

export const Content = styled.div`
  display: flex;
`;

export const MainContent = styled.div`
  flex: 80%;
  display: flex;
  flex-direction: column;
`;

export const View = styled.div`
  flex: 90%;
  padding-inline: 3%;
  overflow-y: visible;
`;

export const Intro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;
`;

const ChartBox = styled.div``;


export default Dashboard;
