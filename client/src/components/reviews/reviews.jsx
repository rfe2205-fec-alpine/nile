import React from 'react';
import styled from 'styled-components';

function Reviews() {
  return (
    <ReviewsWrapper>
      <p>Here is a test for reviews</p>
    </ReviewsWrapper>
  );
}

const ReviewsWrapper = styled.div`
  box-shadow: 2px 1px 35px;
  margin: 40px;
  background: white;
`;

export default Reviews;
