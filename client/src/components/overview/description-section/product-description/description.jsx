import React from 'react';
import styled from 'styled-components';

function Description({ description }) {
  return (
    <DescriptionContainer>
      {description}
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.div`
  font-size: 16px;
`;

export default Description;
