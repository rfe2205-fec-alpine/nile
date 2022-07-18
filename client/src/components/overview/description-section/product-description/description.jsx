import React from 'react';
import styled from 'styled-components';

function Description({ description, colorScheme }) {
  return (
    <DescriptionContainer colorScheme={colorScheme}>
      {description}
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.div`
  font-size: 16px;
  color: ${(props) => props.colorScheme.textColorBackground}
`;

export default Description;
