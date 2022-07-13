import React from 'react';
import styled from 'styled-components';
import Thumbnail from './thumbnail.jsx';
import SelectedThumbnail from './selectedthumbnail.jsx';

function ThumbnailSelector({ styles, setSelection, selectionId, height }) {
  let styleList = styles || [];

  let numberOfRows = styleList.length / 4;

  let redBaron = styleList.map(function(style) {
    let imgUrl = style.photos[0].thumbnail_url;
    if (style.style_id === selectionId) {
      return <SelectedThumbnail imgUrl={imgUrl} />
    } else {
      return <Thumbnail imgUrl={imgUrl} setSelection={() => setSelection(style.style_id)} />
    }
  });

  // console.log(redBaron.length);
  return (
    <ThumbnailContainer height={height} numberOfRows={numberOfRows}>
      {redBaron}
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  display: grid;
  height: ${(props) => props.height}px;
  grid-template-rows: repeat(${(props) => props.numberOfRows}, 1fr);
  grid-template-columns: repeat(4, 1fr);
`;

export default ThumbnailSelector;
