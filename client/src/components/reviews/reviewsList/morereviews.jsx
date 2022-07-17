import React, { useContext } from 'react';
// import styled from 'styled-components';
import CountContext from '../countContext.jsx';

function MoreReviewsButton() {
  const [count, changeCount] = useContext(CountContext);

  function clickHandler() {
    const updatedCount = count + 2;
    changeCount(updatedCount);
  }

  return (
    <button type="submit" onClick={() => clickHandler()}>Show More Reviews</button>
  );
}

export default MoreReviewsButton;
