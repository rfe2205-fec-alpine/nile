import React from 'react';
import styled from 'styled-components';
import SelectSize from './selectsize.jsx';
import Qty from './qty.jsx';

function SelectionRow({ container, sizeSelected, setSizeSelection }) {
  return (
    <SelectionRowContainer>
      <SelectSize container={container} sizeSelected={sizeSelected} setSizeSelection={setSizeSelection} />
      <Qty container={container} />
    </SelectionRowContainer>
  );
}

const SelectionRowContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
`;

export default SelectionRow;
