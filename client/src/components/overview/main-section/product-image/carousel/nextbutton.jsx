import React from 'react';
import styled from 'styled-components';

function NextButton() {
  return (
    <NextButtonContainer>
      <ActualNextButton>v</ActualNextButton>
    </NextButtonContainer>
  );
}

const ActualNextButton = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
`;

const NextButtonContainer = styled.div`
  &:hover ${ActualNextButton} {
    cursor: default;
  }
`;

export default NextButton;
