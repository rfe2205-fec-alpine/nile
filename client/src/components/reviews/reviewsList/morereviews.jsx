import React, { useContext } from 'react';
// import styled from 'styled-components';
import CountContext from '../countContext.jsx';
import ReviewAmountContext from '../reviewAmountContext.jsx';

function MoreReviewsButton() {
  const [count, changeCount] = useContext(CountContext);
  const [reviewAmount] = useContext(ReviewAmountContext);

  function clickHandler() {
    const updatedCount = count + 2;
    changeCount(updatedCount);
  }

  if (reviewAmount <= count) {
    return <> </>;
  }
  return (
    <button type="submit" onClick={() => clickHandler()}>Show More Reviews</button>
  );
}

export default MoreReviewsButton;
