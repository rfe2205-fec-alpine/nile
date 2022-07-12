import React from 'react';
import styled from 'styled-components';

const swissAlpsUrl = "https://miro.medium.com/max/1400/1*yweiw7AyafIdk0YKt4G03Q.jpeg";

function CarouselThumbnail({ setSelection }) {
  return (
    <CarouselThumbnailContainer onClick={setSelection} />
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
  grid-template-rows: 65px 5px 5px;
`;

const IsSelectedBar = styled.div`
  width: 65px;
  height: 5px;
  background-color: grey;
`;

export default CarouselThumbnail;
