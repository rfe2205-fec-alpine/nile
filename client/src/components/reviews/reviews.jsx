import React from 'react';
import styled from 'styled-components';
import RatingBreakdown from './ratingBreakdown/ratingBreakdown.jsx';
import ReviewsList from './reviewsList/reviewsList.jsx';
import ReviewButtons from './reviewsList/reviewButtons.jsx';

function Reviews() {
  return (
    <ReviewsWrapper>
      <RatingBreakdownWrapper>
        <RatingBreakdown />
      </RatingBreakdownWrapper>
      <ReviewsListWrapper>
        <ReviewsList />
        <ReviewButtons />
      </ReviewsListWrapper>
    </ReviewsWrapper>
  );
}

const ReviewsWrapper = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 1fr 2fr;
  border: 1px solid red;
`;

const RatingBreakdownWrapper = styled.div`
  grid-column-start: 1fr;
  border: 1px solid red;
`;

const ReviewsListWrapper = styled.div`
  grid-column-start: 2fr;
  border: 1px solid red;
`;

export default Reviews;
