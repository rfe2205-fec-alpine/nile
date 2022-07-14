import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from './carousel/carousel.jsx';
import PreviousImageButton from './previousimagebutton.jsx';
import NextImageButton from './nextimagebutton.jsx';

function setInitialProductImage(photo, selectionIndex, setSelection) {
  setSelection([photo, selectionIndex]);
}

function addIndexesToPhotos(photos) {
  // console.log(photos);
  for (let currentIndex = 0; currentIndex < photos.length; currentIndex++) {
    if (photos[currentIndex] !== '') {
      photos[currentIndex].index = currentIndex;
    }
  }
}

function ProductImage({ photos }) {
  addIndexesToPhotos(photos);
  // console.log('indexed photos', photoList);

  const firstPhoto = photos[0] || { thumbnail_url: '' };
  const [[selection, selectionIndex], setSelection] = useState([firstPhoto, 0]);

  const needsInitialProductImage = selection.thumbnail_url !== photos[selectionIndex].thumbnail_url;

  if (needsInitialProductImage) {
    // console.log('Style change imminent: selection index is', selectionIndex);
    if (selectionIndex >= photos.length) {
      setInitialProductImage(photos[0], 0, setSelection);
    } else {
      setInitialProductImage(photos[selectionIndex], selectionIndex, setSelection);
    }
  }

  const carouselIndexStart = (Math.floor(selectionIndex / 7)) * 7;
  const carouselIndexEnd = carouselIndexStart + 7 >= photos.length ? photos.length - 1 : carouselIndexStart + 7;

  console.log('carousel start', carouselIndexStart);
  console.log('carousel end', carouselIndexEnd);

  const canGoForward = carouselIndexEnd < photos.length;
  const canGoBack = carouselIndexStart >= 7;

  const photoList = photos.slice(carouselIndexStart, carouselIndexEnd);

  const finalSelection = selection || photos[selectionIndex];

  const previousButton = selectionIndex === 0 ? <div /> : <PreviousImageButton currentIndex={selectionIndex} setSelection={setSelection} />;
  const nextButton = selectionIndex === photos.length - 1 ? <div /> : <NextImageButton currentIndex={selectionIndex} setSelection={setSelection} />;

  return (
    <DivContainer>
      <ProductImageContainer selectionImageUrl={finalSelection.thumbnail_url}>
        <Carousel thumbnails={photoList} selection={finalSelection} setSelection={setSelection}
        canGoForward={canGoForward} canGoBack={canGoBack} />
        {previousButton}
        {nextButton}
      </ProductImageContainer>
    </DivContainer>
  );
}

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
  &:hover ${ProductImageContainer} {
    cursor: zoom-in;
  }
`;

export default ProductImage;
