import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Summary from './summary.jsx';
import Breakdown from './breakdown.jsx';
import ProductBreakdown from './product-breakdown.jsx';
import { GITHUB_API_KEY } from '../../../../../config.js';
import ProductContext from '../../../ProductContext.jsx';

function RatingBreakdown() {
  const [productID] = useContext(ProductContext);
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    Axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta',
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      params: {
        product_id: productID,
      },
    }).then((res) => {
      setReviewData(res.data);
    }).catch((err) => { console.log(err); });
  }, [productID]);

  if (!reviewData) {
    return null;
  }

  return (
    <RatingBreakdownWrapper>
      <Summary ratings={reviewData.ratings} />
      <Breakdown />
      <ProductBreakdown />
    </RatingBreakdownWrapper>
  );
}

const RatingBreakdownWrapper = styled.div`
  border: 1px solid red;
  padding 20px;
  margin 5px;
`;

export default RatingBreakdown;
