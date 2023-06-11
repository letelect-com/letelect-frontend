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
            <div>
              <Table>
                <thead>
                  <tr>
                    <th>Election No.</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date of Election</th>
                    <th>Active</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </View>
        </MainContent>
      </Content>
    </Parent>
  );
};

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;

  & thead,
  tbody {
    background-color: #e3ebf3;
    border-bottom: 1px solid var(--gray-shade);
    padding-block: 0.5rem;
    & th {
      font-weight: 600;
    }
    & td {
    }
  }
`;

export default Elections;
