import React from 'react';
import styled from 'styled-components';
import ProductImage from './product-image/productimage.jsx';
import ProductInteraction from './product-interaction/productinteraction.jsx';

function MainSection({ data }) {
  const styles = data.styles || [];
  const numberOfStyles = styles.length;
  const heightOfStyleList = (((numberOfStyles / 4) + 2) * (66 + 29));
  const heightOfMain = 286 + 50 + heightOfStyleList;
  // console.log('data in main is');
  // console.log(data);
  return (
    <Main height={heightOfMain}>
      <ProductImage />
      <ProductInteraction data={data} />
    </Main>
  );
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 3.32fr 2fr;
  background-color: #CCC;
  height: ${(props) => props.height}px;
`;

export default MainSection;
