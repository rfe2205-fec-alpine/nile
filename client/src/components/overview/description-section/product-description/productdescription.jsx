import React from 'react';
import styled from 'styled-components';
import Slogan from './slogan.jsx';
import Description from './description.jsx';

function ProductDescription({ data, colorScheme }) {
  // console.log('data in product description section');
  // console.log(data);

  return (
    <ProductDescriptionContainer secondaryColor={colorScheme.secondaryColor}>
      <Slogan catchphrase={data.catchphrase} />
      <Description description={data.description} />
    </ProductDescriptionContainer>
  );
}

const ProductDescriptionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  background-color: ${(props) => props.secondaryColor};
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 60px;
  padding-left: 60px;
  padding-right: 50px;
`;

export default ProductDescription;
