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
  const dropDown = {
    position: 'relative',
    display: 'inline-block',
  };

  const dropdownContent = {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',
  };

  const dropButton = {
    backgroundColor: 'white',
    color: 'black',
    padding: '16px',
    fontSize: '16px',
    borderBottom: '5px solid black',
    cursor: 'pointer',
    onHover: dropdownContent.display = 'block',
  };

  return (
    <div style={dropDown}>
      <button style={dropButton} type="submit">
        {query}
      </button>
      <div style={dropdownContent}>
        <div value="Helpful" onClick={() => {changeQuery('helpful')}}>Helpful</div>
        <div value="Newest" onClick={() => {changeQuery('newest')}}> Newest </div>
        <div value="Relevant" onClick={() => {changeQuery('relevant')}}>Relevant</div>
      </div>
    </div>
  );
}

const SortReviewsWrapper = styled.div`
  border: 1px solid red;
  padding 20px;
  margin 5px;
  background: white;
`;

export default SortReviews;
