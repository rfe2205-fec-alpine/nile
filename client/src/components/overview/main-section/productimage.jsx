import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.jpg';

function ProductImage() {
  return <ProductImageContainer></ProductImageContainer>
}

const imageUrl = "https://media.cntraveler.com/photos/5a009c8e25be133d871c008e/16:9/w_2560%2Cc_limit/Mountain-Travel_GettyImages-503689316.jpg";

const ProductImageContainer = styled.div`
  display: flex;
  background-color: #5d6699;
  background-image: url(${imageUrl});
  background-size: contain;
  background-repeat: no-repeat;
`


export default ProductImage;