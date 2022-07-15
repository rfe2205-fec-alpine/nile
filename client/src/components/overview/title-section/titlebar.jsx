import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.jpg';
// import SearchBar from './searchbar.jsx';

function TitleBar({ colorScheme }) {
  console.log('color scheme is', colorScheme);
  return (
    <TitleContainer bgColor={colorScheme.primaryColor}>
      <div></div>
      <img src={logo} height="75" />
      <Title>Nile</Title>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 25px 5.6fr 5fr 2fr;
  background-color: ${(props) => props.bgColor};
  align-self: stretch;
`;

const Title = styled.div`
  color: #fff;
  font-size: 64px;
`;

export default TitleBar;
