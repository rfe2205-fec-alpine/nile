import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Summary from './summary.jsx';
import Breakdown from './breakdown.jsx';
import ProductBreakdown from './product-breakdown.jsx';

function RatingBreakdown({ reviewData }) {
  return (
    <RatingBreakdownWrapper>
      {reviewData ? (
        <>
          <h3>RATINGS AND REVIEWS</h3>
          <Summary ratings={reviewData.ratings} recommended={reviewData.recommended} />
          <ProductBreakdown ratings={reviewData.ratings} />
          <Breakdown characteristics={reviewData.characteristics} />
        </>
      ) : <>Loading...</>}
    </RatingBreakdownWrapper>
  );
}

const RatingBreakdownWrapper = styled.div`
  padding 20px;
  margin 5px;
`;

export default RatingBreakdown;
