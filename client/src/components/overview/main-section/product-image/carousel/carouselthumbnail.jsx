import React from 'react';
import styled from 'styled-components';

function CarouselThumbnail({ imgUrl, setSelection }) {
  return (
    <OverallContainer>
      <CarouselThumbnailContainer onClick={setSelection} imgUrl={imgUrl} />
    </OverallContainer>
  );
}

const CarouselThumbnailContainer = styled.div`
  width: 65px;
  height: 60px;
  border: 1px solid black;
  background-image: url("${(props) => props.imgUrl}");
  background-size: cover;
`;

const OverallContainer = styled.div`
  &:hover ${CarouselThumbnailContainer} {
    cursor: default;
  }
`;

export default CarouselThumbnail;
