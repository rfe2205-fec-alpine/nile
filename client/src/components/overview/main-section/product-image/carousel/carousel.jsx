import React from 'react';
import styled from 'styled-components';
import CarouselThumbnail from './carouselthumbnail.jsx';

function Carousel() {
  return (
    <CarouselContainer />
  );
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 65px;
  margin: 35px;
`;

export default Carousel;
