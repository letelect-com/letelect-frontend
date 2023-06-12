import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Header, Sidebar, BarChart } from "../components";
import { Parent, Content, MainContent, View, Intro } from "../pages/Dashboard";
import { Button } from "../components/Navbar";

const Verification = () => {
  return (
    <Parent>
      <Content>
        <Sidebar />
        <MainContent>
          <Header />
          <View>
            <Intro>
              <div>
                <h2>Verification</h2>
                <p>Quickly check if a voter is verified.</p>
              </div>
              <div>
                <Button dashboard>
                  <span>Add new election</span>
                </Button>
              </div>
            </Intro>
          </View>
        </MainContent>
      </Content>
    </Parent>
  );
};

export default Verification;
