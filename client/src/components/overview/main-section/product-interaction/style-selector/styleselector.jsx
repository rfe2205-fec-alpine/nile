import React from 'react';
import styled from 'styled-components';
import StyleSelected from './styleselected.jsx';
import ThumbnailSelector from './thumbnailselector.jsx';

function StyleSelector() {
  return (
    <StyleSelectorContainer>
      <StyleSelected />
      <ThumbnailSelector />
    </StyleSelectorContainer>
  );
}

const StyleSelectorContainer = styled.div`
  padding-left: 35px;
  display: grid;
  grid-template-rows: 1fr 9fr;
`;

export default StyleSelector;
