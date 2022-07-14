import React from 'react';
import styled from 'styled-components';

function NextImageButton({ currentIndex, setSelection }) {
  return (
    <NextImageButtonContainer onClick={() => setSelection([false, currentIndex + 1])}>{'->'}</NextImageButtonContainer>
  );
}

const NextImageButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column-start: 4;
  grid-column-end: 5;
  font-size: 32px;
  font-weight: bolder;
  color: #CCC;
`;

export default NextImageButton;
