import React from 'react';
import styled from 'styled-components';
import CarouselThumbnail from './carouselthumbnail.jsx';
import CarouselSelectedThumbnail from './carouselselectedthumbnail.jsx';
import NextButton from './nextbutton.jsx';

function Carousel({ thumbnails, selectionId, setSelection}) {
  const redBaron = thumbnails.map(function(thumbnail) {
    if (thumbnail.id === selectionId) {
      return <CarouselSelectedThumbnail imgUrl={thumbnail.imgUrl} />
    } else {
      return <CarouselThumbnail imgUrl={thumbnail.imgUrl} setSelection={() => setSelection(thumbnail.id)} />
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
