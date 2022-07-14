import React from 'react';
import styled from 'styled-components';
import SortReviews from './sortReviews.jsx';
import ReviewTile from './reviewTile.jsx';
import ProductContext from '../../../ProductContext.jsx';

function ReviewsList() {
  const [productID] = React.useContext(ProductContext);
  return (
    <ReviewsListWrapper>
      <h4>{productID}</h4>
      <SortReviews />
      <ReviewTile />
    </ReviewsListWrapper>
  );
}

const ReviewsListWrapper = styled.div`
  border: 1px solid red;
  padding 2px;
  margin 5px;
`;

export default ReviewsList;
