import React from 'react';
import styled from 'styled-components';
import ThemeContext from '../../../ThemeContext.jsx';
import Themes from '../../../themes.js';

function changeTheme(newThemeName, colorScheme, setColorScheme) {
  const prefix = newThemeName;
  const suffix = colorScheme.name.substring(colorScheme.name.length - 5) === 'light' ? 'light' : 'dark';
  const name = `${prefix} ${suffix}`;
  console.log('new theme name is', name);

  let newColorScheme = Themes.nile.light;

  switch (name) {
    case 'nile light':
      newColorScheme = Themes.nile.light;
      break;
    case 'nile dark':
      newColorScheme = Themes.nile.dark;
      break;
    case 'modern light':
      newColorScheme = Themes.modern.light;
      break;
    case 'modern dark':
      newColorScheme = Themes.modern.dark;
      break;
    case 'forest light':
      newColorScheme = Themes.forest.light;
      break;
    case 'forest dark':
      newColorScheme = Themes.forest.dark;
      break;
    case 'sky light':
      newColorScheme = Themes.sky.light;
      break;
    case 'sky dark':
      newColorScheme = Themes.sky.dark;
    default:
      newColorScheme = Themes.nile.light;
  }

  // console.log('new color scheme is', newColorScheme);
  // console.log('new body color is', newColorScheme.bodyColor);

  // document.getElementById('theme').style.backgroundColor = newColorScheme.bodyColor;

  setColorScheme(newColorScheme);
}

function changeDropdown(event) {
  changeTheme(event.target.value);
}

function NewThemeDropdown() {
  const [colorScheme, setColorScheme] = React.useContext(ThemeContext);

  const lastFiveLetters = colorScheme.name.substring(colorScheme.name.length - 5);

  let name;
  if (lastFiveLetters === 'light') {
    name = colorScheme.name.substring(0, colorScheme.name.length - 6);
  } else {
    name = colorScheme.name.substring(0, colorScheme.name.length - 5);
  }

  return (
      <NewTheme onChange={(event) => changeTheme(event.target.value, colorScheme, setColorScheme)}>
        <option selected value={name} hidden>{name}</option>
        <option value={'nile'}>nile</option>
        <option value={'modern'}>modern</option>
        <option value={'forest'}>forest</option>
        <option value={'sky'}>sky</option>
      </NewTheme>
  );
}

const NewTheme = styled.select`
  display: flex;
  padding: 5px;
  align-items: center;
  border: 1px solid black;
  background-color: #E4E4E4;
`;

export default NewThemeDropdown;
