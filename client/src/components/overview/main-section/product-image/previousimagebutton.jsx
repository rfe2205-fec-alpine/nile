import React from 'react';
import styled from 'styled-components';

function PreviousImageButton({ currentIndex, setSelection }) {
  return (
    <PreviousImageButtonContainer onClick={() => setSelection([false, currentIndex - 1])}>{'<-'}</PreviousImageButtonContainer>
  );
}

const PreviousImageButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: 2;
  grid-column-end: 3;
  font-size: 32px;
  font-weight: bolder;
  color: #CCC;
`;

export default PreviousImageButton;
