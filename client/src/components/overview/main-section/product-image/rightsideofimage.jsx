import React from 'react';
import styled from 'styled-components';
import FullScreenButton from './fullscreenbutton.jsx';
import NextImageButton from './nextimagebutton.jsx';

function RightSideOfImage() {
  return (
    <RightSideOfImageContainer>
      <FullScreenButton />
      <NextImageButton />
    </RightSideOfImageContainer>
  );
}

const RightSideOfImageContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-start: 4;
  grid-column-end: 4;
`;

export default RightSideOfImage;
