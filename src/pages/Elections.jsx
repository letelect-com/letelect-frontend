import React from "react";
import styled from "styled-components";
import { Header, Sidebar } from "../components";
import { Parent, Content, MainContent, View, Intro } from "../pages/Dashboard";
import { Button } from "../components/Navbar";

const Elections = () => {
  return (
    <Parent>
      <Content>
        <Sidebar />
        <MainContent>
          <Header />
          <View>
            <Intro>
              <div>
                <h2>Elections</h2>
                <p>Quickly add elections</p>
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

export default Elections;
