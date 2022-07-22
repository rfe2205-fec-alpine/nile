import React from 'react';
import styled from 'styled-components';

function Value({ value, colorScheme }) {
  return (
    <ValueItem colorScheme={colorScheme}>
      {value}
    </ValueItem>
  );
}

const ValueItem = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bolder;
  padding-bottom: 10px;
  color: ${(props) => props.colorScheme.textColorForeground}
`;

export default Value;
