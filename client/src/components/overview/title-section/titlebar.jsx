import React from 'react';
import styled from 'styled-components';
import logoNileLight from '../img/logo_#5d6699.jpg';
import logoNileDark from '../img/logo_#949494.jpg';
import logoForestLight from '../img/logo_#014421.jpg';
import logoSkyLight from '../img/logo_#87CEEB.jpg';
import logoWhite from '../img/logo_white.jpg';
import logoBlack from '../img/logo_black.jpg';
// import SearchBar from './searchbar.jsx';

function chooseLogo(colorScheme) {
  switch(colorScheme.foreground) {
    case '#5d6699':
      return logoNileLight;
      break;
    case '#949494':
      return logoNileDark;
      break;
    case '#014421':
      return logoForestLight;
      break;
    case 'black':
      return logoBlack;
      break;
    case '#87CEEB':
      return logoSkyLight;
      break;
    default:
      return logoWhite;
  }
}

function TitleBar({ colorScheme }) {
  // console.log('color scheme is', colorScheme);
  const logo = chooseLogo(colorScheme);
  return (
    <TitleContainer bgColor={colorScheme.foreground}>
      <div></div>
      <img src={logo} height="75" />
      <Title colorScheme={colorScheme}>Nile</Title>
      <Team colorScheme={colorScheme}>A Team Alpine product</Team>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 25px 5.6fr 4.5fr 2.5fr;
  background-color: ${(props) => props.bgColor};
  align-self: stretch;
`;

const Title = styled.div`
  color: ${(props) => props.colorScheme.textColorTitle};
  font-size: 64px;
`;

const Team = styled.div`
  display: flex;
  align-items: center;
  grid-column-start: 4;
  grid-column-end: 5;
  color: ${(props) => props.colorScheme.textColorTitle};
  font-size: 24px;
`

export default TitleBar;
