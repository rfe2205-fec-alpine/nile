import React from 'react';
import styled from 'styled-components';
import ProductInfo from './product-info/productinfo.jsx';
import StyleSelector from './style-selector/styleselector.jsx';
import UseProduct from './use-product/useproduct.jsx';

function ProductInteraction({ data }) {
  // console.log('data inside product interaction is');
  // console.log(data);

  const productInfoData = {
    name: data.name,
    category: data.category,
    price: data.price,
    averageReview: data.averageReview,
    numberOfReviews: data.numberOfReviews,
  };

  return (
    <ProductInteractionContainer>
      <ProductInfo data={productInfoData} />
      <StyleSelector styles={data.styles} />
      <UseProduct />
    </ProductInteractionContainer>
  );
}

const ProductInteractionContainer = styled.div`
  display: grid;
  grid-template-rows: 243px, 243px, 243px;
  background-color: #CCC;
`;

export default ProductInteraction;
