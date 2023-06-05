import React from "react";
import styled from "styled-components";
import { Header, Sidebar } from "../components";
import { Parent, Content, MainContent, View } from "../pages/Dashboard";

const Elections = () => {
  return (
    <Parent>
      <Content>
        <Sidebar />
        <MainContent>
          <Header />
          <View></View>
        </MainContent>
      </Content>
    </Parent>
  );
};

export default Elections;
