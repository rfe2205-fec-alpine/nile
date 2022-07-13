import React from 'react';
import styled from 'styled-components';

function Summary( {ratings, recommended} ) {
  /* Calculates the average score from all reviews for this product */
  const scores = Object.values(ratings);
  const scoresAdded = scores.map((item, index) => item *= (index + 1));
  const scoresReduced = scoresAdded.reduce((prev, current) => prev + current, 0);
  const amount = scores.reduce((prev, current) => parseInt(prev, 10) + parseInt(current, 10), 0);
  const averageRating = (scoresReduced / amount).toFixed(2);

  /* Calculates the percentage of recommended for this product */
  const totalRecommended = parseInt(recommended.false, 10) + parseInt(recommended.true, 10);
  const percentRecommended = ((parseInt(recommended.true, 10) / totalRecommended) * 100).toFixed();

  return (
    <SummaryWrapper>
      <h1>{averageRating}</h1>
      <h3>
        {percentRecommended}
        % of reviews recommend this product
      </h3>
    </SummaryWrapper>
  );
}

const SummaryWrapper = styled.div`
  border: 1px solid red;
  padding 5px;
  margin 5px;
`;

export default Summary;
