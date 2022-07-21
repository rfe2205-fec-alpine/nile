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

  // useEffect(() => {
  //   Axios({
  //     method: 'get',
  //     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta',
  //     headers: {
  //       Authorization: GITHUB_API_KEY,
  //     },
  //     params: {
  //       product_id: productID,
  //     },
  //   }).then((res) => {
  //     setReviewData(res.data);
  //     changeReviewAmount(parseInt(res.data.recommended.true, 10) + parseInt(res.data.recommended.false, 10));
  //     changeReviewQualities(res.data.characteristics);
  //   }).catch((err) => { console.log(err); });
  // }, [productID]);

  // if (!reviewData) {
  //   return null;
  // }

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
