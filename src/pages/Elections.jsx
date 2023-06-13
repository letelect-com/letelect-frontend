import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header, Sidebar } from "../components";
import { Parent, Content, MainContent, View, Intro } from "./Dashboard";
import { Button } from "../components/Navbar";
import ElectionModal from "../components/ElectionModal";
import CircularProgress from "@mui/material/CircularProgress";

const Elections = () => {
  const [modalActive, setModalActive] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nextElectionId, setNextElectionId] = useState(0);

  const retrieveTableData = () => {
    const storedData = localStorage.getItem("tableData");
    if (storedData) {
      setTableData(JSON.parse(storedData));
      setNextElectionId(JSON.parse(storedData).length + 1);
    }
  };

  useEffect(() => {
    retrieveTableData();
  }, []);

  useEffect(() => {
    localStorage.setItem("tableData", JSON.stringify(tableData));
    setIsLoading(false);
  }, [tableData]);

  const handleOpenModal = () => {
    setModalActive(true);
    setEditData(null);
  };

  const handleCloseModal = () => {
    setModalActive(false);
  };

  const handleSaveData = (data) => {
    setIsLoading(true);
    const newData = {
      ...data,
      id: nextElectionId,
      active: false,
    };
    if (editData) {
      const updatedData = tableData.map((item) =>
        item === editData ? newData : item
      );
      setTableData(updatedData);
    } else {
      setTableData([...tableData, newData]);
      setNextElectionId(nextElectionId + 1);
    }
    handleCloseModal();
  };

  const handleEditData = (data) => {
    setEditData(data);
    setModalActive(true);
  };

  const handleDeleteData = (data) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this data?"
    );
    if (confirmDelete) {
      const updatedData = tableData.filter((item) => item !== data);
      setTableData(updatedData);
    }
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
                <h2>Elections</h2>
                <p>Quickly add elections</p>
              </div>
              <div>
                <Button dashboard onClick={handleOpenModal}>
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
      <ElectionModal
        active={modalActive}
        onClose={handleCloseModal}
        onSave={handleSaveData}
        editData={editData}
      />
    </Parent>
  );
};

export const Table = styled.table`
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
      padding-block: 0.5rem;
    }
  }
`;

export const LoadingAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 18px;
  font-weight: bold;
  color: #555;
`;

export const EditButton = styled.button`
  background-color: green;
`;

export const DeleteButton = styled.button`
  background-color: red;
`;

export default Elections;
