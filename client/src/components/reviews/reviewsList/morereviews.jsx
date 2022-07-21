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

  // if (reviewAmount <= count) {
  //   return <> </>;
  // }

  const buttonStyle = {
    padding: '12px',
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid black',
    margin: '15px',
  };

  return (
    <div>
      {reviewAmount <= count ? <> </>
        : <button style={buttonStyle} type="submit" onClick={() => clickHandler()}>Show More Reviews</button>}
    </div>
  );
}

export default MoreReviewsButton;
