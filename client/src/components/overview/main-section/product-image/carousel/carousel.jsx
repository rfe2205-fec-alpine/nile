import React from 'react';
import styled from 'styled-components';
import CarouselThumbnail from './carouselthumbnail.jsx';
import CarouselSelectedThumbnail from './carouselselectedthumbnail.jsx';
import NextButton from './nextbutton.jsx';

function Carousel() {
  return (
    <CarouselContainer>
      <CarouselSelectedThumbnail />
      <CarouselThumbnail />
      <CarouselThumbnail />
      <CarouselThumbnail />
      <CarouselThumbnail />
      <NextButton />
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 65px;
  height: 400px;
  margin: 35px;
`;

export default Carousel;
