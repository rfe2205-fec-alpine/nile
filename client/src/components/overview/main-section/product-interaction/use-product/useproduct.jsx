import React from 'react';
import styled from 'styled-components';
import SelectionRow from './selectionrow.jsx';
import AddToBagRow from './addtobagrow.jsx';

const ItemContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border: 1px solid black;
  background-color: #E4E4E4;
  margin: 25px;
`;

function UseProduct() {
  return (
    <UseProductContainer>
      <SelectionRow container={ItemContainer} />
      <AddToBagRow container={ItemContainer} />
    </UseProductContainer>
  );
}

const UseProductContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export default UseProduct;
