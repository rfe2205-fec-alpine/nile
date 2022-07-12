import React from 'react';
import styled from 'styled-components';
import Thumbnail from './thumbnail.jsx';
import SelectedThumbnail from './selectedthumbnail.jsx';

function ThumbnailSelector({ thumbnails, setSelection, selectionId }) {
  let redBaron = thumbnails.map(function(thumbnail) {
    if (thumbnail.id === selectionId) {
      return <SelectedThumbnail imgUrl={thumbnail.imgUrl} />
    } else {
      return <Thumbnail imgUrl={thumbnail.imgUrl} setSelection={() => setSelection(thumbnail.id)} />
    }
  });

  return (
    <ThumbnailContainer>
      {redBaron}
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 100px;
  grid-template-columns: 100px 100px 100px 100px;
`;

export default ThumbnailSelector;
