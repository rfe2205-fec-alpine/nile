import React, { useState } from 'react';
import styled from 'styled-components';
import RatingBreakdown from './ratingBreakdown/ratingBreakdown.jsx';
import ReviewsList from './reviewsList/reviewsList.jsx';
import ReviewButtons from './reviewsList/reviewButtons.jsx';
import ReviewAmountContext from './reviewAmountContext.jsx';

function Reviews() {
  const [reviewAmount, changeReviewAmount] = useState(null);

  return (
    <ReviewAmountContext.Provider value={[reviewAmount, changeReviewAmount]}>
      <ReviewsWrapper id="allReviews">
        <RatingBreakdownWrapper>
          <RatingBreakdown />
        </RatingBreakdownWrapper>
        <ReviewsListWrapper>
          <ReviewsList />
          <ReviewButtons />
        </ReviewsListWrapper>
      </ReviewsWrapper>
    </ReviewAmountContext.Provider>
  );
}

const ReviewsWrapper = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 1fr 2fr;
`;

const RatingBreakdownWrapper = styled.div`
  grid-column-start: 1fr;
`;

const ReviewsListWrapper = styled.div`
  grid-column-start: 2fr;
`;

export default Reviews;
