import React, { useState } from 'react';
import styled from 'styled-components';
import RatingBreakdown from './ratingBreakdown/ratingBreakdown.jsx';
import ReviewsList from './reviewsList/reviewsList.jsx';
import ReviewButtons from './reviewsList/reviewButtons.jsx';
import ReviewAmountContext from './reviewAmountContext.jsx';
import ReviewQualitiesContext from './reviewQualities.jsx';
import SelectRatingsContext from './selectedRatingsContext.jsx';
import CountContext from './countContext.jsx';

function Reviews() {
  const [reviewAmount, changeReviewAmount] = useState(null);
  const [reviewQualities, changeReviewQualities] = useState(null);
  const [count, changeCount] = useState(2);
  const [selectedRatings, addSelectedRatings] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
    nonToggled: true,
  });

  return (
    <ReviewAmountContext.Provider value={[reviewAmount, changeReviewAmount]}>
      <ReviewQualitiesContext.Provider value={[reviewQualities, changeReviewQualities]}>
        <SelectRatingsContext.Provider value={[selectedRatings, addSelectedRatings]}>
          <CountContext.Provider value={[count, changeCount]}>
            <ReviewsWrapper id="allReviews">
              <RatingBreakdownWrapper>
                <RatingBreakdown />
              </RatingBreakdownWrapper>
              <ReviewsListWrapper>
                <ReviewsList />
                <ReviewButtons />
              </ReviewsListWrapper>
            </ReviewsWrapper>
          </CountContext.Provider>
        </SelectRatingsContext.Provider>
      </ReviewQualitiesContext.Provider>
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
  background-color: #5D6699;
  border-radius: 10px;
`;

const ReviewsListWrapper = styled.div`
  grid-column-start: 2fr;
`;

export default Reviews;
