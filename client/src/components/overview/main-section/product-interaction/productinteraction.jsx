import React from 'react';
import styled from 'styled-components';
import ProductInfo from './product-info/productinfo.jsx';

function ProductInteraction() {
  return (
    <ProductInteractionContainer>
      <ProductInfo />
    </ProductInteractionContainer>
  );
}

const ProductInteractionContainer = styled.div`
  display: grid;
`;

export default ProductInteraction;
