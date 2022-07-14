import React from 'react';
import styled from 'styled-components';

import PreviousButton from './previousbutton.jsx';
import CarouselThumbnail from './carouselthumbnail.jsx';
import CarouselSelectedThumbnail from './carouselselectedthumbnail.jsx';
import NextButton from './nextbutton.jsx';

function Carousel({ thumbnails, selection, setSelection, canGoForward, canGoBack, allPhotos }) {
  let key = 100;

  const redBaron = thumbnails.map(function(thumbnail) {
    key++;
    if (thumbnail.thumbnail_url === selection.thumbnail_url) {
      return <CarouselSelectedThumbnail key={key} imgUrl={thumbnail.thumbnail_url} />
    } else {
      return <CarouselThumbnail key={key} imgUrl={thumbnail.thumbnail_url} setSelection={() => setSelection([thumbnail, thumbnail.index])} />
    }
  });

  const nextButtonIndex = selection.index + 7 >= allPhotos.length ? allPhotos.length - 1 : selection.index + 7;
  const previousButtonIndex = selection.index - 7 < 0 ? 0 : selection.index - 7;

  const nextButtonThumbnail = allPhotos[nextButtonIndex];
  const previousButtonThumbnail = allPhotos[previousButtonIndex];

  const previousButton = canGoBack ?
    <PreviousButton setSelection={() => setSelection([previousButtonThumbnail, previousButtonIndex])}/>
    : <div />;

  const nextButton = canGoForward ?
    <NextButton setSelection={() => setSelection([nextButtonThumbnail, nextButtonIndex])} />
    : <div />;

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
