import React from 'react';
import styled from 'styled-components';

function Summary( {ratings} ) {
  const scores = Object.values(ratings);
  const scoresAdded = scores.map((item, index) => item *= (index + 1));
  const scoresReduced = scoresAdded.reduce((prev, current) => prev + current, 0);
  const scoresAmount = scores.reduce((prev, current) => parseInt(prev) + parseInt(current), 0);
  const averageRating = (scoresReduced / scoresAmount).toFixed(2);

  return (
    <SummaryWrapper>
      <h1>{averageRating}</h1>
    </SummaryWrapper>
  );
}

const SummaryWrapper = styled.div`
  border: 1px solid red;
  padding 5px;
  margin 5px;
`;

export default Summary;
