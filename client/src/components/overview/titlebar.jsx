import React from 'react';
import styled from 'styled-components';

function TitleBar() {
  return (
    <Title>
      <img src="img/logo.jpg"></img>
      Title Bar rendering! Yay!
    </Title>
  );
}

const Title = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr 2fr;
  background-color: #5d6699;
  align-self: stretch;
`;

export default TitleBar;