import React from 'react';
import styled from 'styled-components';
import ProductImage from './productimage.jsx';
import ProductInfo from './product-info/productinfo.jsx';

function MainSection() {
  return (
    <Main>
      <ProductImage />
      <ProductInfo />
    </Main>
  )
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 3.32fr 2fr;
  height: 630px;
`

export default MainSection;