import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Header, Sidebar, BarChart } from "../components";
import { Parent, Content, MainContent, View, Intro } from "../pages/Dashboard";
import { Button } from "../components/Navbar";

const Voters = () => {
  return (
    <Parent>
      <Content>
        <Sidebar />
        <MainContent>
          <Header />
          <View>
            <Intro>
              <div>
                <h2>Voters</h2>
                <p>Quickly add new voters</p>
              </div>
              <div>
                <Button dashboard>
                  <span>Add new voter</span>
                </Button>
              </div>
            </Intro>
          </View>
        </MainContent>
      </Content>
    </Parent>
  );
};

export default Voters;
