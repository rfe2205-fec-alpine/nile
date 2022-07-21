import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Summary from './summary.jsx';
import Breakdown from './breakdown.jsx';
import ProductBreakdown from './product-breakdown.jsx';
import { GITHUB_API_KEY } from '../../../../../config.js';
import ProductContext from '../../../ProductContext.jsx';
import ReviewAmountContext from '../reviewAmountContext.jsx';
import ReviewQualitiesContext from '../reviewQualities.jsx';

function RatingBreakdown({ reviewData, setReviewData }) {
  // const [productID] = useContext(ProductContext);
  // const [, changeReviewAmount] = useContext(ReviewAmountContext);
  // const [reviewData, setReviewData] = useState(null);
  const [, changeReviewQualities] = useContext(ReviewQualitiesContext);

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
