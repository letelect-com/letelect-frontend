import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "styled-components";
import "./../index.css";

const SearchBox = () => {
  const [searchKey, setSearchKey] = useState("");
  return (
    <SearchField>
      <label htmlFor="search"></label>
      <input
        type="text"
        placeholder="Search for anything..."
        value={searchKey}
        name="search"
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <SearchIcon color="var(--text-black)" />
    </SearchField>
  );
};

const SearchField = styled.div`
  display: flex;
  align-items: center;
  background: #e3ebf3;
  width: 40%;
  padding-right: 0.5rem;
  border-radius: .3rem;

  & input {
    flex: 90%;
    border: none;
    background: #e3ebf3;
    padding-block: 0.6rem;
    outline: none;
    padding-left: 0.5rem;
    border-radius: .3rem;
  }
  &:nth-child(2) {
    flex: 10%;
  }
`;

export default SearchBox;
