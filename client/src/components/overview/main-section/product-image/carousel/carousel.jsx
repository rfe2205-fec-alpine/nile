import React from 'react';
import styled from 'styled-components';
import CarouselThumbnail from './carouselthumbnail.jsx';
import CarouselSelectedThumbnail from './carouselselectedthumbnail.jsx';
import NextButton from './nextbutton.jsx';

function Carousel({ thumbnails, selection, setSelection}) {
  const redBaron = thumbnails.map(function(thumbnail) {
    if (thumbnail.thumbnail_url === selection.thumbnail_url) {
      return <CarouselSelectedThumbnail imgUrl={thumbnail.thumbnail_url} />
    } else {
      return <CarouselThumbnail imgUrl={thumbnail.thumbnail_url} setSelection={() => setSelection(thumbnail)} />
    }
  });

  return (
    <CarouselContainer>
      {redBaron}
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 65px;
  height: 550px;
  margin: 35px;
`;

export default Carousel;
