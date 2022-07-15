import React, { useState } from 'react';
import styled from 'styled-components';
import ProductContext from '../../../ProductContext.jsx';
import ProductImage from './product-image/productimage.jsx';
import ProductInteraction from './product-interaction/productinteraction.jsx';

let firstStyle = { style_id: -1 };

function setInitialStyleSelection(styleList, setSelection) {
  // console.log('entering set initial style selection');
  const initialStyle = styleList[0];
  firstStyle = initialStyle;
  setSelection(initialStyle);
}

function MainSection({ data, height, colorScheme }) {
  const styles = data.styles || [];
  const numberOfStyles = styles.length;
  const heightOfStyleList = (((numberOfStyles / 4) + 2) * (66 + 29));
  console.log('data in main is');
  console.log(data);

  // console.log('styles list is', styles);

  const selectedStyle = styles[0] || {
    name: '',
    style_id: 0,
    photos: [''],
  };

  // console.log('selectedStyle is', selectedStyle);

  const [styleSelected, setSelection] = useState(selectedStyle);

  // console.log('styleSelected is', styleSelected);
  // console.log('name is', styleSelected.name);

  const selectedStyleIsEmpty = styleSelected.name === '' && styleSelected.style_id === 0;
  const productHasChanged = styles[0].style_id !== firstStyle.style_id;

  const needsInitialStyleSelection = (styles.length !== 0 && selectedStyleIsEmpty) || productHasChanged;

  if (needsInitialStyleSelection) {
    setInitialStyleSelection(styles, setSelection);
  }

  return (
    <Main height={height} colorScheme={colorScheme}>
      <ProductImage photos={styleSelected.photos} />
      <ProductInteraction data={data} selectedStyle={styleSelected} setSelection={setSelection} height={heightOfStyleList} />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 3.32fr 2fr;
  background-color: ${(props) => props.colorScheme.secondaryColor};
  height: ${(props) => props.height}px;
`;

export default MainSection;
