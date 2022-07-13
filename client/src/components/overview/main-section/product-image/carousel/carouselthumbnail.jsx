import React from 'react';
import styled from 'styled-components';

function CarouselThumbnail({ imgUrl, setSelection }) {
  return (
    <CarouselThumbnailContainer onClick={setSelection} imgUrl={imgUrl} />
  );
}

const CarouselThumbnailContainer = styled.div`
  width: 65px;
  height: 60px;
  border: 1px solid black;
  background-image: url("${(props) => props.imgUrl}");
  background-size: cover;
`;

export default CarouselThumbnail;
