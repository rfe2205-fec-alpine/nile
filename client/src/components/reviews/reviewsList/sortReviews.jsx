import React from 'react';
import styled from 'styled-components';

function SortReviews() {
  return (
    <SortReviewsWrapper>
      <h4>Sort Bar</h4>
    </SortReviewsWrapper>
  );
}

const SortReviewsWrapper = styled.div`
  border: 1px solid red;
  padding 20px;
  margin 5px;
`;

export default SortReviews;
