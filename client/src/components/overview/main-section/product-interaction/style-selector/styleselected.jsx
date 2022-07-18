import React from 'react';
import styled from 'styled-components';

function StyleSelected({ name, colorScheme }) {
  return (
    <StyleSelectedContainer colorScheme={colorScheme}>
      <StyleTitle colorScheme={colorScheme}>Style {">"} </StyleTitle>
      <StyleSelectedText colorScheme={colorScheme}>{name}</StyleSelectedText>
    </StyleSelectedContainer>
  );
}

const StyleTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.colorScheme.textColorBackground}
`;

const StyleSelectedText = styled.span`
  font-size: 18px;
  color: ${(props) => props.colorScheme.textColorBackground}
`;

const StyleSelectedContainer = styled.div`
  color: ${(props) => props.colorScheme.textColorBackground}
  font-size: 18px;
`;

export default StyleSelected;
