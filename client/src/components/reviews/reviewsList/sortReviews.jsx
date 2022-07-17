import React, { useContext } from 'react';
import styled from 'styled-components';
import ReviewAmountContext from '../reviewAmountContext.jsx';

function SortReviews({ change, reviewQuery }) {
  return (
    <SortReviewsWrapper>
      <ReviewCount />
      <SortBar changeQuery={change} query={reviewQuery} />
    </SortReviewsWrapper>
  );
}

function ReviewCount({ amount }) {
  const [reviewAmount] = useContext(ReviewAmountContext);
  return (
    <h5>Total reviews: {reviewAmount}</h5>
  );
}

function SortBar({ changeQuery, query }) {
  const divWrapper = {
    position: 'relative',
    display: 'inline-block',
  };

  return (
    <div style={divWrapper}>
      <button type="submit">{query}</button>
      <div>
        <div value="Helpful" onClick={() => {changeQuery('helpful')}}>Helpful</div>
        <div value="Newest" onClick={() => {changeQuery('newest')}}> Newest </div>
        <div value="Relevant" onClick={() => {changeQuery('relevant')}}>Relevant</div>
      </div>
    </div>
  );
}

//onClick={changeQuery('helpful')}

const SortReviewsWrapper = styled.div`
  border: 1px solid red;
  padding 20px;
  margin 5px;
`;

export default SortReviews;
