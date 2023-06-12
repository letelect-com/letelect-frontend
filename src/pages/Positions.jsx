import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Header, Sidebar, BarChart } from "../components";
import { Parent, Content, MainContent, View, Intro } from "../pages/Dashboard";
import { Button } from "../components/Navbar";

const Positions = () => {
  return (
    <Parent>
      <Content>
        <Sidebar />
        <MainContent>
          <Header />
          <View>
            <Intro>
              <div>
                <h2>Positions</h2>
                <p>Quickly add new positions</p>
              </div>
              <div>
                <Button dashboard>
                  <span>Add new position</span>
                </Button>
              </div>
            </Intro>
          </View>
        </MainContent>
      </Content>
    </Parent>
  );
};

export default Positions;
