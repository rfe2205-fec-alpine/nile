import React from 'react';
import styled from 'styled-components';
import SortReviews from './sortReviews.jsx';
import ReviewTile from './reviewTile.jsx';

function ReviewsList() {
  return (
    <ReviewsListWrapper>
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
