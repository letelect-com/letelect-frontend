import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ active, onClose, onSave, editData }) => {
  const [electionNo, setElectionNo] = useState(
    editData ? editData.electionNo : ""
  );
  const [name, setName] = useState(editData ? editData.name : "");
  const [description, setDescription] = useState(
    editData ? editData.description : ""
  );
  const [dateOfElection, setDateOfElection] = useState(
    editData ? editData.dateOfElection : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      electionNo,
      name,
      description,
      dateOfElection,
    });
  };

  return (
    <ModalOverlay active={active} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h3>{editData ? "Edit Election" : "Add New Election"}</h3>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="electionNo">Election No.</label>
              <input
                type="text"
                id="electionNo"
                value={electionNo}
                onChange={(e) => setElectionNo(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="dateOfElection">Date of Election</label>
              <input
                type="date"
                id="dateOfElection"
                value={dateOfElection}
                onChange={(e) => setDateOfElection(e.target.value)}
              />
            </FormGroup>
            <ModalFooter>
              <Button type="submit">Save</Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 99;
  transition: 1s ease-in;
  animation: display-modal 2s ease-in-out;
`;

const ModalContent = styled.div`
  background-color: var(--bg-white);
  width: 40%;
  max-width: 600px;
  border-radius: 4px;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e3ebf3;
  background: var(--bg-blue);
  & h3 {
    color: white;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  padding: 1rem;
`;

const Form = styled.form``;

const FormGroup = styled.div`
  margin-bottom: 1rem;

  & label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  & input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }
`;

const ModalFooter = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: ${({ red }) => (red ? "red" : "blue")};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export default Modal;
