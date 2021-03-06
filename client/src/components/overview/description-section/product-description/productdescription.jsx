import React from 'react';
import styled from 'styled-components';
import Slogan from './slogan.jsx';
import Description from './description.jsx';

function ProductDescription({ data, colorScheme }) {
  // console.log('data in product description section');
  // console.log(data);

  return (
    <ProductDescriptionContainer background={colorScheme.background}>
      <Slogan catchphrase={data.catchphrase} colorScheme={colorScheme} />
      <Description description={data.description} colorScheme={colorScheme} />
    </ProductDescriptionContainer>
  );
}

const ProductDescriptionContainer = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  background-color: ${(props) => props.background};
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 60px;
  padding-left: 60px;
  padding-right: 50px;
`;

export default ProductDescription;
