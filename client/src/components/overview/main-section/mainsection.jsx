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
  // console.log('data in main is');
  // console.log(data);

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

  const firstPhoto = styleSelected.photos[0] || { thumbnail_url: '' };

  const [[selection, selectionIndex], setSelectionPhoto] = useState([firstPhoto, 0]);

  const selectedPhoto = styleSelected.photos[selectionIndex] || styleSelected.photos[0];

  return (
    <Main height={height} colorScheme={colorScheme}>
      <ProductImage
        photos={styleSelected.photos}
        selectionIndex={selectionIndex}
        selection={selection}
        setSelection={setSelectionPhoto}
        colorScheme={colorScheme}
      />
      <ProductInteraction
        data={data}
        selectedStyle={styleSelected}
        setSelection={setSelection}
        height={heightOfStyleList}
        selectedPhoto={selectedPhoto}
        colorScheme={colorScheme}
      />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 3.32fr 2fr;
  background-color: ${(props) => props.colorScheme.background};
  height: ${(props) => props.height}px;
`;

export default MainSection;
