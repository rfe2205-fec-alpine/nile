import React from 'react';
import styled from 'styled-components';
import SelectSize from './selectsize.jsx';
import Qty from './qty.jsx';

function SelectionRow(props) {
  return (
    <SelectionRowContainer>
      <SelectSize container={props.container} />
      <Qty container={props.container} />
    </SelectionRowContainer>
  );
}

const SelectionRowContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
`;

export default SelectionRow;
