import React from 'react';
import styled from 'styled-components';

function StyleSelected({ name }) {
  return (
    <StyleSelectedContainer>
      <strong>Style {">"} </strong>
      {name}
    </StyleSelectedContainer>
  );
}

const StyleSelectedContainer = styled.div`
  font-size: 18px;
`;

export default StyleSelected;
