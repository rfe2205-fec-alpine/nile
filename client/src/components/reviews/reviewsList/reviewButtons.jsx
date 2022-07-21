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
  padding: 15px;
  margin: 5px;
  align-content: left;
  display: flex;
  align-content: center;
  justify-content: right;
`;

export default ReviewButtons;
