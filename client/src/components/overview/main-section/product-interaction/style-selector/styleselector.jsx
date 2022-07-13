import React, { useState } from 'react';
import styled from 'styled-components';
import StyleSelected from './styleselected.jsx';
import ThumbnailSelector from './thumbnailselector.jsx';

function setInitialStyleSelection(styleList, setSelection) {
  const initialStyle = styleList[0];
  const initialName = initialStyle.name;
  const initialSelectionId = initialStyle.style_id;

  setSelection([initialStyle, initialSelectionId, initialName]);
}

function StyleSelector({ styles }) {
  const styleList = styles || [];
  const selectedStyle = styleList[0] || {};
  const selectedName = selectedStyle.name || '';
  const selectedId = selectedStyle.style_id || 0;

  const [[styleSelected, selectionId, selectionName], setSelection] = useState([selectedStyle, selectedId, selectedName]);

  const needsInitialStyleSelection = styleList.length !== 0 && Object.keys(styleSelected).length === 0;

  if (needsInitialStyleSelection) {
    console.log('entered');
    setInitialStyleSelection(styleList, setSelection);
  }

  const numberOfStyles = styleList.length;
  const heightOfStyleList = ((numberOfStyles / 4) + 1) * (66 + 29);

  return (
    <StyleSelectorContainer height={heightOfStyleList}>
      <StyleSelected name={selectionName} />
      <ThumbnailSelector styles={styles} selectionId={selectionId}
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
