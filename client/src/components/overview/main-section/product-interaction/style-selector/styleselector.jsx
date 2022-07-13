import React, { useState } from 'react';
import styled from 'styled-components';
import StyleSelected from './styleselected.jsx';
import ThumbnailSelector from './thumbnailselector.jsx';

function StyleSelector({ styles, selectedStyle, setSelection }) {
  const styleList = styles || [];
  // console.log('style list in style selector is', styleList);
  const numberOfStyles = styleList.length;
  const heightOfStyleList = ((numberOfStyles / 4) + 1) * (66 + 29);
  const styleSelected = selectedStyle || {
    name: '',
    style_id: 0,
  };

  return (
    <StyleSelectorContainer height={heightOfStyleList}>
      <StyleSelected name={styleSelected.name} />
      <ThumbnailSelector styles={styles} selectionId={styleSelected.style_id}
        setSelection={setSelection} height={heightOfStyleList}/>
    </StyleSelectorContainer>
  );
}

const StyleSelectorContainer = styled.div`
  width: 400px;
  padding-left: 35px;
  display: grid;
  grid-template-rows: 50px, ${(props) => props.height};
`;

export default StyleSelector;
