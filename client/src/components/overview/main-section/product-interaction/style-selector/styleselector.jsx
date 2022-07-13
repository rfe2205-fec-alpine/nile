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

function StyleSelector({ styles }) {
  const [selectionId, setSelection] = useState(221014);

  const stylesList = styles || [];
  const numberOfStyles = stylesList.length;
  const heightOfStyleList = ((numberOfStyles / 4) + 1) * (66 + 29);

  console.log('height of list', heightOfStyleList);
  return (
    <StyleSelectorContainer height={heightOfStyleList}>
      <StyleSelected />
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
