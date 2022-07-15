import React from "react";
import styled from "styled-components";

const SearchBar = styled.input`
  width: 100%;
`;

function SearchQuestions() {
  return (
    <SearchBar
      type="text"
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
    />
  );
}

export default SearchQuestions;
