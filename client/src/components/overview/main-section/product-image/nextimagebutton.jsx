import React from 'react';
import styled from 'styled-components';

function NextImageButton() {
  return (
    <NextImageButtonContainer>{'->'}</NextImageButtonContainer>
  );
}

const NextImageButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: 4;
  grid-column-end: 5;
  font-size: 32px;
  font-weight: bolder;
`;

export default NextImageButton;
