import React from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';

function NextButton({ setSelection }) {
  return (
    <NextButtonContainer>
      <ActualNextButton onClick={setSelection}>
        <AiOutlineDown color="#5d6699" />
      </ActualNextButton>
    </NextButtonContainer>
  );
}

const ActualNextButton = styled.div`
  text-align: center;
  color: #5d6699;
  font-size: 24px;
  font-weight: bolder;
`;

const NextButtonContainer = styled.div`
  &:hover ${ActualNextButton} {
    cursor: default;
  }
`;

export default NextButton;
