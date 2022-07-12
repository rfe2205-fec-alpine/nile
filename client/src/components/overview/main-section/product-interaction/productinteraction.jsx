import React from 'react';
import styled from 'styled-components';
import ProductInfo from './product-info/productinfo.jsx';
import StyleSelector from './style-selector/styleselector.jsx';
import UseProduct from './use-product/useproduct.jsx';

function ProductInteraction() {
  return (
    <ProductInteractionContainer>
      <ProductInfo />
      <StyleSelector />
      <UseProduct />
    </ProductInteractionContainer>
  );
}

const ProductInteractionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: #CCC;
`;

export default ProductInteraction;
