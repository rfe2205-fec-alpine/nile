import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';

function NextImageButton({ currentIndex, setSelection }) {
  return (
    <NextImageButtonContainer onClick={() => setSelection([false, currentIndex + 1])}>
      <NextImageActualButton>
        <AiOutlineArrowRight />
      </NextImageActualButton>
    </NextImageButtonContainer>
  );
}

const NextImageActualButton = styled.div`
  font-size: 32px;
  font-weight: bolder;
  color: #5d6699;
`;

const NextImageButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: 4;
  grid-column-end: 5;
  &:hover ${NextImageActualButton} {
    cursor: default;
  }
`;

export default NextImageButton;
