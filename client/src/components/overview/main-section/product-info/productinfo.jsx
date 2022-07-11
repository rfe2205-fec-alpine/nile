import React from 'react';
import styled from 'styled-components';
import ReviewSection from './reviewsection.jsx';
import Category from './category.jsx';
import ProductName from './productname.jsx';
import Price from './price.jsx';
import SocialMedia from './social-media/socialmedia.jsx';

function ProductInfo() {
  return (
    <Info>
      <ReviewSection />
      <Category />
      <ProductName />
      <Price />
      <SocialMedia />
    </Info>
  );
}

const Info = styled.div`
  padding: 35px;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr 1fr 1fr 3fr 3fr 1fr;
  background-color: #CCC;
`;

export default ProductInfo;
