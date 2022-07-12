import React from 'react';
import styled from 'styled-components';

const swissAlpsUrl = "https://miro.medium.com/max/1400/1*yweiw7AyafIdk0YKt4G03Q.jpeg";

function CarouselSelectedThumbnail() {
  return (
    <SelectedThumbnailContainer>
      <CarouselThumbnailContainer />
      <IsSelectedBar />
    </SelectedThumbnailContainer>
  );
}

const CarouselThumbnailContainer = styled.div`
  width: 65px;
  height: 60px;
  border: 1px solid black;
  background-image: url("${swissAlpsUrl}");
  background-size: cover;
`;

const SelectedThumbnailContainer = styled.div`
  display: grid;
  grid-template-rows: 65px 1px 5px;
`;

const IsSelectedBar = styled.div`
  grid-row-start: 3;
  grid-row-end: row-end;
  width: 65px;
  background-color: black;
`;

export default CarouselSelectedThumbnail;