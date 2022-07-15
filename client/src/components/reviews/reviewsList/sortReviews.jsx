import React, { useState } from 'react';
import styled from 'styled-components';

function SortReviews({ change, reviewQuery }) {
  console.log('Should be state and setstate from parent: ', change, reviewQuery);
  return (
    <SortReviewsWrapper>
      <ReviewCount />
      <SortBar changeQuery={change} query={reviewQuery} />
    </SortReviewsWrapper>
  );
}

function ReviewCount({ amount }) {
  return (
    <h5>{amount}</h5>
  );
}

function SortBar({ changeQuery, query }) {
  console.log('changequery: ', changeQuery, 'query: ', query);
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
