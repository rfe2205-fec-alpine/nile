import React from 'react';
import styled from 'styled-components';
import Thumbnail from './thumbnail.jsx';
import SelectedThumbnail from './selectedthumbnail.jsx';

function ThumbnailSelector() {
  return (
    <ThumbnailContainer>
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <SelectedThumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 100px;
  grid-template-columns: 100px 100px 100px 100px;
`;

export default ThumbnailSelector;
