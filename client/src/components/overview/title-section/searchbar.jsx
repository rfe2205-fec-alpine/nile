import React from 'react';
import styled from 'styled-components';

function SearchBar() {
  return (
    <Search />
  )
}

function SearchBeforeStyling() {
  return (
    <input type='search'></input>
  );
}
const Search = styled(SearchBeforeStyling)`
  grid-column-start: 4;
  grid-column-end: 5;
  height: 25px;
`;

export default SearchBar;