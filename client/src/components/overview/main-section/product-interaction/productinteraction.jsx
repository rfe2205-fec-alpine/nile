import React from 'react';
import styled from 'styled-components';
import ProductInfo from './product-info/productinfo.jsx';
import StyleSelector from './style-selector/styleselector.jsx';
import UseProduct from './use-product/useproduct.jsx';

function ProductInteraction({ data, selectedStyle, setSelection, height, selectedPhoto }) {
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
    <ProductInteractionContainer height={height}>
      <ProductInfo
        data={productInfoData}
        salePrice={selectedStyle.sale_price}
        selectedPhoto={selectedPhoto}
      />
      <StyleSelector styles={data.styles} selectedStyle={selectedStyle} setSelection={setSelection} />
      <UseProduct stock={selectedStyle.skus} selectedStyle={selectedStyle} nameOfProduct={productInfoData.name}/>
    </ProductInteractionContainer>
  );
}

const ProductInteractionContainer = styled.div`
  display: grid;
  grid-template-rows: 243px, ${(props) => props.height}, 243px;
  background-color: #CCC;
`;

export default ProductInteraction;
