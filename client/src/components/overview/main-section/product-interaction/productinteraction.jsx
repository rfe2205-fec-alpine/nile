import React from 'react';
import styled from 'styled-components';
import ProductInfo from './product-info/productinfo.jsx';
import StyleSelector from './style-selector/styleselector.jsx';

function ProductInteraction() {
  return (
    <ProductInteractionContainer>
      <ProductInfo />
      <StyleSelector />
    </ProductInteractionContainer>
  );
}

const ProductInteractionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  background-color: #CCC;
`;

export default ProductInteraction;
