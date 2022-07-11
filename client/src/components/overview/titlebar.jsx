import React from 'react';
import styled from 'styled-components';
import logo from './img/logo.jpg';

function TitleBar() {
  return (
    <Title>
      <img src={logo}/>
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