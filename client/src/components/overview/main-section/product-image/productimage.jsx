import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from './carousel/carousel.jsx';
import PreviousImageButton from './previousimagebutton.jsx';
import NextImageButton from './nextimagebutton.jsx';

const swissAlpsUrl = "https://miro.medium.com/max/1400/1*yweiw7AyafIdk0YKt4G03Q.jpeg";

const thumbnails = [
  { id: '1', imgUrl: swissAlpsUrl },
  { id: '2', imgUrl: swissAlpsUrl },
  { id: '3', imgUrl: swissAlpsUrl },
  { id: '4', imgUrl: swissAlpsUrl },
  { id: '5', imgUrl: swissAlpsUrl },
  { id: '6', imgUrl: swissAlpsUrl },
  { id: '7', imgUrl: swissAlpsUrl },
];

function ProductImage() {
  const [selectionId, setSelection] = useState('1');
  return (
    <ProductImageContainer>
      <Carousel thumbnails={thumbnails} selectionId={selectionId} setSelection={setSelection} />
      <PreviousImageButton />
      <NextImageButton />
    </ProductImageContainer>
  );
}

const imageUrl = "https://media.cntraveler.com/photos/5a009c8e25be133d871c008e/16:9/w_2560%2Cc_limit/Mountain-Travel_GettyImages-503689316.jpg";
// const imageHeight = '625px';

const ProductImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr 4fr 1fr;
  background-color: #5d6699;
  background-image: url(${imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

export default ProductImage;
