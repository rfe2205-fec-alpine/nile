import React from 'react';
import styled from 'styled-components';
import Slogan from './slogan.jsx';

function ProductDescription() {
  return (
    <ProductDescriptionContainer>
      <Slogan />
    </ProductDescriptionContainer>
  );
}

const dudeImage = 'https://wegotthiscovered.com/wp-content/uploads/2021/08/free-guy-dude-1200x675.jpg';

const ProductDescriptionContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  background-color: green;
  background-image: url("${dudeImage}");
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 60px;
  padding-left: 140px;
`;

export default ProductDescription;
