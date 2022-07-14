import React from 'react';
import styled from 'styled-components';
import SelectSize from './selectsize.jsx';
import Qty from './qty.jsx';

function SelectionRow({ container, sizeSelected, setSizeSelection, listOfSizes, stock }) {
  return (
    <SelectionRowContainer>
      <SelectSize container={container} sizeSelected={sizeSelected}
      setSizeSelection={setSizeSelection} listOfSizes={listOfSizes} stock={stock} />
      <Qty container={container} />
    </SelectionRowContainer>
  );
}

const SelectionRowContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
`;

export default SelectionRow;
