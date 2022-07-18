import React from 'react';
import styled from 'styled-components';
import ProductInfo from './product-info/productinfo.jsx';
import StyleSelector from './style-selector/styleselector.jsx';
import UseProduct from './use-product/useproduct.jsx';

function ProductInteraction({ data, selectedStyle, setSelection, height, selectedPhoto, colorScheme }) {
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
    <ProductInteractionContainer height={height} colorScheme={colorScheme}>
      <ProductInfo
        data={productInfoData}
        salePrice={selectedStyle.sale_price}
        selectedPhoto={selectedPhoto}
        selectedStyle={selectedStyle}
        colorScheme={colorScheme}
      />
      <StyleSelector
        styles={data.styles}
        selectedStyle={selectedStyle}
        setSelection={setSelection}
        colorScheme={colorScheme}
      />
      <UseProduct
        stock={selectedStyle.skus}
        selectedStyle={selectedStyle}
        nameOfProduct={productInfoData.name}
        colorScheme={colorScheme}
      />
    </ProductInteractionContainer>
  );
}

const ProductInteractionContainer = styled.div`
  display: grid;
  grid-template-rows: 243px, ${(props) => props.height}, 243px;
  background-color: ${(props) => props.colorScheme.background};
`;

export default ProductInteraction;
