import React from 'react';
import styled from 'styled-components';

function StyleSelected() {
  return (
    <StyleSelectedContainer>
      <strong>Style {">"} </strong>
      Selected Style
    </StyleSelectedContainer>
  );
}

const StyleSelectedContainer = styled.div`
  font-size: 18px;
`;

export default StyleSelected;
