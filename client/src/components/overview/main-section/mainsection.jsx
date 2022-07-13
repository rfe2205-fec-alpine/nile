import React from 'react';
import styled from 'styled-components';
import ProductImage from './product-image/productimage.jsx';
import ProductInteraction from './product-interaction/productinteraction.jsx';

function MainSection({ data }) {
  // console.log('data in main is');
  // console.log(data);
  return (
    <Main>
      <ProductImage />
      <ProductInteraction data={data} />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 3.32fr 2fr;
  background-color: #CCC;
  height: 730px;
`;

export default MainSection;
