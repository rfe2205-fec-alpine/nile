import React from 'react';
import styled from 'styled-components';

function NextButton({ setSelection }) {
  return (
    <NextButtonContainer>
      <ActualNextButton onClick={setSelection}>v</ActualNextButton>
    </NextButtonContainer>
  );
}

const ActualNextButton = styled.div`
  text-align: center;
  color: #5d6699;
  font-size: 32px;
  font-weight: bolder;
`;

const NextButtonContainer = styled.div`
  &:hover ${ActualNextButton} {
    cursor: default;
  }
`;

export default NextButton;
