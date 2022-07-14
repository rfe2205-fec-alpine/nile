import React from 'react';
import styled from 'styled-components';

import PreviousButton from './previousbutton.jsx';
import CarouselThumbnail from './carouselthumbnail.jsx';
import CarouselSelectedThumbnail from './carouselselectedthumbnail.jsx';
import NextButton from './nextbutton.jsx';

function Carousel({ thumbnails, selection, setSelection, canGoForward, canGoBack }) {
  const redBaron = thumbnails.map(function(thumbnail) {
    if (thumbnail.thumbnail_url === selection.thumbnail_url) {
      return <CarouselSelectedThumbnail imgUrl={thumbnail.thumbnail_url} />
    } else {
      return <CarouselThumbnail imgUrl={thumbnail.thumbnail_url} setSelection={() => setSelection([thumbnail, thumbnail.index])} />
    }
  });

  const previousButton = canGoBack ? <PreviousButton /> : <div />;
  const nextButton = canGoForward ? <NextButton /> : <div />;

  return (
    <CarouselContainer>
      {previousButton}
      <CarouselItems>
        {redBaron}
      </CarouselItems>
      {nextButton}
    </CarouselContainer>
  );
}

const CarouselItems = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  width: 65px;
  height: 550px;
`;

const CarouselContainer = styled.div`
  display: grid;
  grid-template-rows: 20px, 1fr, 20px;
  width: 65px;
  height: 590px;
  margin: 35px;
`;

export default Carousel;
