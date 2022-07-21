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
  const amountStyle = {
    padding: '5px',
  };
  return (
    <h5 style={amountStyle}>Total reviews: {reviewAmount}</h5>
  );
}

function SortBar({ changeQuery, query }) {
  const dropDown = {
    position: 'relative',
    display: 'inline-block',
    borderBottom: '2px solid black',
    padding: '5px',
  };

  const dropdownContent = {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
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
    <select style={dropDown} onChange={((e) => { changeQuery(e.target.value); })}>
      <option value="relevant">Relevant</option>
      <option value="helpful">Helpful</option>
      <option value="newest"> Newest</option>
    </select>
  );
}

const SortReviewsWrapper = styled.div`
  padding 20px;
  margin 5px;
  background: white;
  display: flex;
  align-content: right;
  justify-content: right;
`;

export default SortReviews;
