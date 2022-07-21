import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
  width: 100%;
`;

function SearchQuestions({ searchString, setSearchString }) {
  return (
    <SearchBar
      type="text"
      value={searchString}
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
      onChange={(e) => {
        setSearchString(e.currentTarget.value);
      }}
    />
  );
}

export default SearchQuestions;
