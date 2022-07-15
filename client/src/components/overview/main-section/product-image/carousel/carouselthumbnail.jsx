import React from 'react';
import styled from 'styled-components';

function CarouselThumbnail({ imgUrl, setSelection, isFullScreen }) {
  let height;
  let width;

  if (isFullScreen) {
    width = 22;
    height = 20;
  } else {
    width = 65;
    height = 60;
  }

  return (
    <OverallContainer>
      <CarouselThumbnailContainer
        onClick={setSelection}
        imgUrl={imgUrl}
        width={width}
        height={height}
      />
    </OverallContainer>
  );
}

const CarouselThumbnailContainer = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
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
