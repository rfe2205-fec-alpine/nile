import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from './carousel/carousel.jsx';
import PreviousImageButton from './previousimagebutton.jsx';
import NextImageButton from './nextimagebutton.jsx';

let firstThumbnailOfCurrentList = '';

function setInitialProductImage(photo, setSelection) {
  firstThumbnailOfCurrentList = photo.thumbnail_url;
  setSelection(photo);
}

function ProductImage({ photos }) {
  const photoList = photos || [];
  const firstPhoto = photoList[0] || { thumbnail_url: '' };
  const [selection, setSelection] = useState(firstPhoto);

  console.log('first photo', firstPhoto);

  const hasNoInitialImage = firstPhoto.thumbnail_url !== '' && selection.thumbnail_url === '';
  const newStyleListHasLoaded = firstPhoto.thumbnail_url !== firstThumbnailOfCurrentList && firstThumbnailOfCurrentList !== '';

  const needsInitialProductImage = hasNoInitialImage || newStyleListHasLoaded;

  if (needsInitialProductImage) {
    console.log('AAAAAARGGGGGGH');
    setInitialProductImage(photoList[0], setSelection);
  }

  return (
    <DivContainer>
      <ProductImageContainer selectionImageUrl={selection.thumbnail_url}>
        <Carousel thumbnails={photoList} selection={selection} setSelection={setSelection} />
        <PreviousImageButton />
        <NextImageButton />
      </ProductImageContainer>
    </DivContainer>
  );
}
// const imageHeight = '625px';

const ProductImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr 4fr 1fr;
  background-color: #5d6699;
  background-image: url("${(props) => props.selectionImageUrl}");
  background-size: cover;
  height: 625px;
  background-repeat: no-repeat;
`;

const DivContainer = styled.div`
  background-color: #5d6699;
`;

export default ProductImage;
