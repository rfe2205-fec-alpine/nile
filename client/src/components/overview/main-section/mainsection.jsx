import React, { useState } from 'react';
import styled from 'styled-components';
import ProductImage from './product-image/productimage.jsx';
import ProductInteraction from './product-interaction/productinteraction.jsx';

function setInitialStyleSelection(styleList, setSelection) {
  const initialStyle = styleList[0];
  setSelection(initialStyle);
}

function MainSection({ data }) {
  const styles = data.styles || [];
  const numberOfStyles = styles.length;
  const heightOfStyleList = (((numberOfStyles / 4) + 2) * (66 + 29));
  const heightOfMain = 286 + 50 + heightOfStyleList;
  // console.log('data in main is');
  // console.log(data);

  // console.log('styles list is', styles);

  const selectedStyle = styles[0] || {
    name: '',
    style_id: 0,
    photos: [''],
  };

  const [styleSelected, setSelection] = useState(selectedStyle);

  const selectedStyleIsEmpty = styleSelected.name === '' && styleSelected.style_id === 0;

  const needsInitialStyleSelection = styles.length !== 0 && selectedStyleIsEmpty;

  if (needsInitialStyleSelection) {
    setInitialStyleSelection(styles, setSelection);
  }

  return (
    <Main height={heightOfMain}>
      <ProductImage photos={styleSelected.photos} />
      <ProductInteraction data={data} selectedStyle={styleSelected} setSelection={setSelection} />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 3.32fr 2fr;
  background-color: #CCC;
  height: ${(props) => props.height}px;
`;

export default MainSection;
