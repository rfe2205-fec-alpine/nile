import React from 'react';
import styled from 'styled-components';
import Carousel from './carousel/carousel.jsx';
import PreviousImageButton from './previousimagebutton.jsx';
import NextImageButton from './nextimagebutton.jsx';

function ProductImage() {
  return (
    <ProductImageContainer>
      <Carousel />
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
