import React from 'react';
import styled from 'styled-components';
import MoreReviewsButton from './morereviews.jsx';
import AddReviewButton from './addreviews.jsx';

function ReviewButtons() {
  return (
    <ReviewButtonsWrapper>
      <MoreReviewsButton />
      <AddReviewButton />
    </ReviewButtonsWrapper>
  );
}

const ReviewButtonsWrapper = styled.div`
  border: 1px solid red;
  padding 2px;
  margin 5px;
`;

export default ReviewButtons;
