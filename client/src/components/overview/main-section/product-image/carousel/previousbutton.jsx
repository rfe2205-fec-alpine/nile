import React from 'react';
import styled from 'styled-components';

function PreviousButton() {
  return (
    <PreviousButtonContainer>v</PreviousButtonContainer>
  );
}

const PreviousButtonContainer = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: bolder;
`;

export default PreviousButton;
