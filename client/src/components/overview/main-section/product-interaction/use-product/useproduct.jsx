import React, { useState } from 'react';
import styled from 'styled-components';
import SelectionRow from './selectionrow.jsx';
import AddToBag from './addtobag.jsx';
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
  const [sizeSelection, setSizeSelection] = useState('Select Size');

  console.log('new size selected is', sizeSelection);

  return (
    <UseProductContainer>
      <SelectionRow container={ItemContainer} sizeSelected={sizeSelection} setSizeSelection={setSizeSelection} />
      <AddToBagRow container={ItemContainer} />
    </UseProductContainer>
  );
}

const UseProductContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export default UseProduct;
