import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from './carousel/carousel.jsx';
import PreviousImageButton from './previousimagebutton.jsx';
import NextImageButton from './nextimagebutton.jsx';

function setInitialProductImage(photo, setSelection) {
  setSelection(photo);
}

function ProductImage({ photos }) {
  const photoList = photos || [];
  const firstPhoto = photoList[0] || { thumbnail_url: '' };
  const [selection, setSelection] = useState(firstPhoto);

  console.log('first photo', firstPhoto);

  const needsInitialProductImage = firstPhoto.thumbnail_url !== '' && selection.thumbnail_url === '';

  if (needsInitialProductImage) {
    console.log('AAAAAARGGGGGGH');
    setInitialProductImage(photoList[0], setSelection);
  }

  return (
    <ProductImageContainer selectionImageUrl={selection.thumbnail_url}>
      <Carousel thumbnails={photoList} selection={selection} setSelection={setSelection} />
      <PreviousImageButton />
      <NextImageButton />
    </ProductImageContainer>
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
  background-repeat: no-repeat;
`;

export default ProductImage;
