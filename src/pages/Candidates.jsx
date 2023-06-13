import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Header, Sidebar, BarChart } from "../components";
import { Parent, Content, MainContent, View, Intro } from "../pages/Dashboard";
import { Button } from "../components/Navbar";
import { LoadingAnimation, Table } from "./Elections";
import { CircularProgress } from "@mui/material";

const Candidates = () => {
  const [modalActive, setModalActive] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Parent>
      <Content>
        <Sidebar />
        <MainContent>
          <Header />
          <View>
            <Intro>
              <div>
                <h2>Candidates</h2>
                <p>Add new candidates</p>
              </div>
              <div>
                <Button dashboard>
                  <span>Add new candidate</span>
                </Button>
              </div>
            </Intro>
            <div>
              <Table>
                <thead>
                  <tr>
                    <th>Ballot No.</th>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Nickname</th>
                    <th>Position</th>
                    <th>Vote Count</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>{item.dateOfElection}</td>
                      <td>{item.active.toString()}</td>
                      <td>
                        <EditButton onClick={() => handleEditData(item)}>
                          Edit
                        </EditButton>
                        <DeleteButton onClick={() => handleDeleteData(item)}>
                          Delete
                        </DeleteButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {isLoading && (
                <LoadingAnimation>
                  <CircularProgress />
                </LoadingAnimation>
              )}
            </div>
          </View>
        </MainContent>
      </Content>
    </Parent>
  );
};

export default Candidates;
