import React, { useState } from 'react';
import styled from 'styled-components';
import StyleSelected from './styleselected.jsx';
import ThumbnailSelector from './thumbnailselector.jsx';

const snowMobileUrl = 'https://blog.amsoil.com/wp-content/uploads/2018/10/EDIT-7130-scaled.jpg';
const thumbnails = [
  { id: '1', imgUrl: snowMobileUrl },
  { id: '2', imgUrl: snowMobileUrl },
  { id: '3', imgUrl: snowMobileUrl },
  { id: '4', imgUrl: snowMobileUrl },
  { id: '5', imgUrl: snowMobileUrl },
  { id: '6', imgUrl: snowMobileUrl },
  { id: '7', imgUrl: snowMobileUrl },
  { id: '8', imgUrl: snowMobileUrl },
];

function StyleSelector() {
  const [selectionId, setSelection] = useState('3');

  return (
    <StyleSelectorContainer>
      <StyleSelected />
      <ThumbnailSelector thumbnails={thumbnails} selectionId={selectionId}
        setSelection={setSelection} />
    </StyleSelectorContainer>
  );
}

const StyleSelectorContainer = styled.div`
  padding-left: 35px;
  display: grid;
  grid-template-rows: 2fr 9fr;
`;

export default StyleSelector;
