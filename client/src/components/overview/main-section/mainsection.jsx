import React from 'react';
import styled from 'styled-components';
import ProductImage from './product-image/productimage.jsx';
import ProductInteraction from './product-interaction/productinteraction.jsx';

function MainSection() {
  return (
    <Main>
      <ProductImage />
      <ProductInteraction />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 3.32fr 2fr;
  height: 730px;
`;

export default MainSection;
