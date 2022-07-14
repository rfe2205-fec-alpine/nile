import React from 'react';
import styled from 'styled-components';

function PreviousButton({ setSelection }) {
  return (
    <PreviousButtonContainer>
      <ActualPreviousButton onClick={setSelection}>
        ^
      </ActualPreviousButton>
    </PreviousButtonContainer>
  );
}

const ActualPreviousButton = styled.div`
  text-align: center;
  color: #5d6699;
  font-size: 32px;
  font-weight: bolder;
`;

const PreviousButtonContainer = styled.div`
  &:hover ${ActualPreviousButton} {
    cursor: default;
  }
`;

export default PreviousButton;
