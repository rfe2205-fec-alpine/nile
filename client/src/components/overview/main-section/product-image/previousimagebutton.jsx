import React from 'react';
import styled from 'styled-components';

function PreviousImageButton({ currentIndex, setSelection }) {
  return (
    <PreviousImageButtonContainer onClick={() => setSelection([false, currentIndex - 1])}>
      <PreviousImageActualButton>{'<-'}</PreviousImageActualButton>
    </PreviousImageButtonContainer>
  );
}

const PreviousImageActualButton = styled.div`
  font-size: 32px;
  font-weight: bolder;
  color: #CCC;
`;

const PreviousImageButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: 2;
  grid-column-end: 3;
  &:hover ${PreviousImageActualButton} {
    cursor: default;
  }
`;

export default PreviousImageButton;
