import React from 'react';
import styled from 'styled-components';
import Thumbnail from './thumbnail.jsx';
import SelectedThumbnail from './selectedthumbnail.jsx';

function ThumbnailSelector({ styles, selectionId, setSelection, height, colorScheme }) {
  let styleList = styles || [];

  // console.log('style list is', styleList);

  let key = 400;

  let redBaron = styleList.map(function(style) {
    key++;
    let imgUrl = style.photos[0].thumbnail_url;
    if (style.style_id === selectionId) {
      return <SelectedThumbnail key={key} imgUrl={imgUrl} colorScheme={colorScheme}/>
    } else {
      return <Thumbnail key={key} imgUrl={imgUrl} colorScheme={colorScheme} setSelection={() => setSelection(style)} />
    }
  });

  let numberOfRows = redBaron.length / 4;
  let remainingColumns = styleList.length % 4;
  let fillerDivs = [];

  for (let currentIndex = 0; currentIndex < remainingColumns; currentIndex++) {
    key++;
    fillerDivs.push(<div key={key} />);
  }

  // console.log(redBaron.length);
  return (
    <ThumbnailContainer height={height} numberOfRows={numberOfRows}>
      {redBaron}
      {fillerDivs}
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
