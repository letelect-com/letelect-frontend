import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Header, Sidebar, BarChart } from "../components";
import { Parent, Content, MainContent, View, Intro } from "../pages/Dashboard";

const Verification = () => {
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

export default Verification;
