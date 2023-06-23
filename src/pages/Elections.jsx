import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Header, Sidebar } from "../components";
import { Parent, Content, MainContent, View, Intro } from "./Dashboard";
import { Button } from "../components/Navbar";
import ElectionModal from "../components/ElectionModal";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "./../api/axios";
import AuthContext from "./../context/AuthProvider";

const Elections = () => {
  const ELECTIONS_URL = "/elections/";
  const [modalActive, setModalActive] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nextElectionId, setNextElectionId] = useState(0);
  const [loadingElections, setLoadingElections] = useState(true);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const getElectionData = async () => {
      setLoadingElections(true);
      try {
        const response = await axios.get(ELECTIONS_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const elections = response.data;
        console.log(elections);
        setTableData(elections);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoadingElections(false);
      }
    };
    getElectionData();
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
                {loadingElections ? (
                  <LoadingAnimation>
                    <CircularProgress
                      style={{
                        textAlign: "center",
                      }}
                    />
                  </LoadingAnimation>
                ) : (
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
                )}
              </Table>
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
  width: 100%;
  text-align: center;
`;

export const EditButton = styled.button`
  background-color: green;
`;

export const DeleteButton = styled.button`
  background-color: red;
`;

export default Elections;
