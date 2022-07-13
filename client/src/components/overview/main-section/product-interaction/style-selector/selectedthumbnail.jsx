import React from 'react';
import styled from 'styled-components';
import Thumbnail from './thumbnail.jsx';
import CheckMark from './checkmark.jsx';

const minSize = 66;

function SelectedThumbnail({ size, imgUrl }) {
  let selectedSize = size || minSize;
  return (
    <SelectedThumbnailContainer>
      <SelectedThumbnailItem size={selectedSize} imgUrl={imgUrl} />
      <CheckMark size={selectedSize / 4} />
    </SelectedThumbnailContainer>
  );
}

const ThumbnailItemContainer = styled.div`
  margin-right: 29px;
  border: 1px solid black;
  margin-top: 14px;
  margin-bottom: 15px;
  border-radius: 100%;
  background-image: url("${(props) => props.imgUrl}");
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
`;

const SelectedThumbnailContainer = styled.div`
  font-size: 15px;
`;

const SelectedThumbnailItem = styled(ThumbnailItemContainer)`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

`;

export default SelectedThumbnail;
