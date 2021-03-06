import React from 'react';
import styled from 'styled-components';
import ThemeContext from '../../../../../ThemeContext.jsx';

const swissAlpsUrl = "https://miro.medium.com/max/1400/1*yweiw7AyafIdk0YKt4G03Q.jpeg";

function CarouselSelectedThumbnail({ imgUrl, isFullScreen }) {
  const [colorScheme] = React.useContext(ThemeContext);

  if (isFullScreen) {
    return (
      <FullScreenThumbnailContainer>
        <CarouselThumbnailContainer imgUrl={imgUrl} />
      </FullScreenThumbnailContainer>
    );
  }
  return (
    <SelectedThumbnailContainer>
      <CarouselThumbnailContainer imgUrl={imgUrl} />
      <IsSelectedBar colorScheme={colorScheme} />
    </SelectedThumbnailContainer>
  );
}

const CarouselThumbnailContainer = styled.div`
  width: 65px;
  height: 60px;
  border: 1px solid black;
  background-image: url("${(props) => props.imgUrl}");
  background-size: cover;
`;

const SelectedThumbnailContainer = styled.div`
  display: grid;
  grid-template-rows: 65px 1px 5px;
  &:hover ${CarouselThumbnailContainer} {
    cursor: default;
  }
`;

const FullScreenThumbnailContainer = styled.div`
  &:hover ${CarouselThumbnailContainer} {
    cursor: default;
  }
  margin-bottom: 20px;
`;

const IsSelectedBar = styled.div`
  grid-row-start: 3;
  grid-row-end: row-end;
  width: 65px;
  height: 5px;
  background-color: ${(props) => props.colorScheme.foreground};
`;

export default CarouselSelectedThumbnail;
