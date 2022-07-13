import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from './carousel/carousel.jsx';
import PreviousImageButton from './previousimagebutton.jsx';
import NextImageButton from './nextimagebutton.jsx';

let firstThumbnailOfCurrentList = '';

function setInitialProductImage(photo, setSelection) {
  firstThumbnailOfCurrentList = photo.thumbnail_url;
  setSelection([photo, 0]);
}

function ProductImage({ photos }) {
  const photoList = photos || [];
  const firstPhoto = photoList[0] || { thumbnail_url: '' };
  const [[selection, selectionIndex], setSelection] = useState([firstPhoto, 0]);

  const hasNoInitialImage = firstPhoto.thumbnail_url !== '' && selection.thumbnail_url === '';
  const newStyleListHasLoaded = firstPhoto.thumbnail_url !== firstThumbnailOfCurrentList && firstThumbnailOfCurrentList !== '';

  const needsInitialProductImage = hasNoInitialImage || newStyleListHasLoaded;

  if (needsInitialProductImage) {
    // console.log('AAAAAARGGGGGGH');
    setInitialProductImage(photoList[0], setSelection);
  }

  const finalSelection = selection || photos[selectionIndex];

  const previousButton = selectionIndex === 0 ? <div /> : <PreviousImageButton currentIndex={selectionIndex} setSelection={setSelection} />;
  const nextButton = selectionIndex === photoList.length - 1 ? <div /> : <NextImageButton currentIndex={selectionIndex} setSelection={setSelection} />;

  return (
    <DivContainer>
      <ProductImageContainer selectionImageUrl={finalSelection.thumbnail_url}>
        <Carousel thumbnails={photoList} selection={finalSelection} setSelection={setSelection} />
        {previousButton}
        {nextButton}
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
