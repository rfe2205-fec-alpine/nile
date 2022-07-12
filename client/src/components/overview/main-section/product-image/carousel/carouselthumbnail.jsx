import React from 'react';
import styled from 'styled-components';

function CarouselThumbnail() {
  return (
    <CarouselThumbnailContainer />
  );
}
const swissAlpsUrl = "https://miro.medium.com/max/1400/1*yweiw7AyafIdk0YKt4G03Q.jpeg";

const CarouselThumbnailContainer = styled.div`
  width: 35px;
  height: 35px;
  background-image: url("${swissAlpsUrl});
  background-size: cover;

`;

export default CarouselThumbnail;
