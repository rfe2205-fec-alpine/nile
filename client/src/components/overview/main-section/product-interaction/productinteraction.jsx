import React from 'react';
import styled from 'styled-components';
import ProductInfo from './product-info/productinfo.jsx';
import StyleSelector from './style-selector/styleselector.jsx';
import UseProduct from './use-product/useproduct.jsx';

function ProductInteraction({ data }) {
  console.log('data inside product interaction is');
  console.log(data);

  const productInfoData = {
    name: data.name,
    category: data.category,
    price: data.price,
  };

  return (
    <ProductInteractionContainer>
      <ProductInfo data={productInfoData} />
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
