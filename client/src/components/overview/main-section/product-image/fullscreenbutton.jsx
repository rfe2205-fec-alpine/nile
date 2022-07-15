import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

function FullScreenButton({ setFullScreen }) {
  return (
    <FullScreenExitButtonContainer>
      <FullScreenButtonContainer onClick={setFullScreen}>
        <AiOutlineClose />
      </FullScreenButtonContainer>
    </FullScreenExitButtonContainer>
  );
}

const FullScreenButtonContainer = styled.div`
  position: absolute;
  right: 35px;
  top: 35px;
  font-size: 32px;
  font-weight: bolder;
`;

const FullScreenExitButtonContainer = styled.div`
  &:hover ${FullScreenButtonContainer} {
    cursor: default;
  }
`;

export default FullScreenButton;
