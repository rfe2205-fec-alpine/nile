import React from 'react';
import styled from 'styled-components';
import ReviewSection from './reviewsection.jsx';
import Category from './category.jsx';
import ProductName from './productname.jsx';
import Price from './price.jsx';
import SocialMedia from './social-media/socialmedia.jsx';

function ProductInfo({ data, salePrice, selectedPhoto, selectedStyle}) {
  // console.log('data inside product info is');
  // console.log(data);

  let numberOfReviews = data.numberOfReviews || 0;
  let reviewSection;

  if (numberOfReviews === 0) {
    reviewSection = <div />;
  } else {
    reviewSection = <ReviewSection reviewScore={data.averageReview} numberOfReviews={data.numberOfReviews} />;
  }

  return (
    <Info>
      {reviewSection}
      <Category category={data.category} />
      <ProductName name={data.name} />
      <Price price={data.price} salePrice={salePrice} />
      <SocialMedia
        selectedPhoto={selectedPhoto}
        selectedStyle={selectedStyle}
        productName={data.name}
      />
    </Info>
  );
}

const Info = styled.div`
  padding: 35px;
  display: grid;
  grid-template-rows: 1fr 1fr 1.5fr 1fr 1fr;
`;

export default ProductInfo;
