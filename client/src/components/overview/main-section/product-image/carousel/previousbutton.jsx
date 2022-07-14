import React from 'react';
import styled from 'styled-components';
import { AiOutlineUp } from 'react-icons/ai';

function PreviousButton({ setSelection }) {
  return (
    <PreviousButtonContainer>
      <ActualPreviousButton onClick={setSelection}>
        <AiOutlineUp color="#5d6699" />
      </ActualPreviousButton>
    </PreviousButtonContainer>
  );
}

const ActualPreviousButton = styled.div`
  text-align: center;
  color: #5d6699;
  font-size: 24px;
  font-weight: bolder;
`;

const PreviousButtonContainer = styled.div`
  &:hover ${ActualPreviousButton} {
    cursor: default;
  }
`;

export default PreviousButton;
