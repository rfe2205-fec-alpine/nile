import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function PreviousImageButton({ currentIndex, setSelection }) {
  return (
    <PreviousImageButtonContainer>
      <PreviousImageActualButton>
        <AiOutlineArrowLeft onClick={() => setSelection([false, currentIndex - 1])} />
      </PreviousImageActualButton>
    </PreviousImageButtonContainer>
  );
}

const PreviousImageActualButton = styled.div`
  font-size: 32px;
  font-weight: bolder;
  color: #CCC;
  width: 32px;
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
