import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { GITHUB_API_KEY } from '../../../../config.js';
import RatingBreakdown from './ratingBreakdown/ratingBreakdown.jsx';
import ReviewsList from './reviewsList/reviewsList.jsx';
import ReviewButtons from './reviewsList/reviewButtons.jsx';
import ReviewAmountContext from './reviewAmountContext.jsx';
import ReviewQualitiesContext from './reviewQualities.jsx';
import SelectRatingsContext from './selectedRatingsContext.jsx';
import CountContext from './countContext.jsx';
import ProductContext from '../../ProductContext.jsx';

function Reviews() {
  const [reviewAmount, changeReviewAmount] = useState(null);
  const [reviewQualities, changeReviewQualities] = useState(null);
  const [count, changeCount] = useState(2);
  const [productId, setProductId] = useContext(ProductContext);
  const [reviews, setReviews] = useState(null);
  const [reviewData, setReviewData] = useState(null);
  const [memoizedRelevant, changeMemoizedRel] = useState();
  const [selectedRatings, addSelectedRatings] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
    nonToggled: true,
  });

  useEffect(() => {
    Axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta',
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      params: {
        product_id: productId,
      },
    }).then((res) => {
      const countVar = (parseInt(res.data.recommended.true, 10) + parseInt(res.data.recommended.false, 10));
      setReviewData(res.data);
      changeReviewAmount(countVar);
      changeReviewQualities(res.data.characteristics);
      Axios({
        method: 'get',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
        headers: {
          Authorization: GITHUB_API_KEY,
        },
        params: {
          product_id: productId,
          count: countVar,
        },
      }).then((response) => {
        setReviews(response.data.results);
      }).catch((err) => console.log(err));
    }).catch((err) => {
      console.log('There was an error sending your request. Sorry!', err);
    });
  }, [productId]);

  return (
    <ReviewAmountContext.Provider value={[reviewAmount, changeReviewAmount]}>
      <ReviewQualitiesContext.Provider value={[reviewQualities, changeReviewQualities]}>
        <SelectRatingsContext.Provider value={[selectedRatings, addSelectedRatings]}>
          <CountContext.Provider value={[count, changeCount]}>
            <ReviewsWrapper id="allReviews">
              <RatingBreakdownWrapper>
                <RatingBreakdown reviewData={reviewData} setReviewData={setReviewData} />
              </RatingBreakdownWrapper>
              <ReviewsListWrapper>
                <ReviewsList mem={memoizedRelevant} reviews={reviews} setReviews={setReviews} />
                <ReviewButtons />
              </ReviewsListWrapper>
            </ReviewsWrapper>
          </CountContext.Provider>
        </SelectRatingsContext.Provider>
      </ReviewQualitiesContext.Provider>
    </ReviewAmountContext.Provider>
  );
}

const ReviewsWrapper = styled.div`
  display: grid;
  margin-top: 30px;
  grid-template-columns: 1fr 2fr;
`;

const RatingBreakdownWrapper = styled.div`
  grid-column-start: 1fr;
  background-color: #5D6699;
  border-radius: 10px;
`;

const ReviewsListWrapper = styled.div`
  grid-column-start: 2fr;
`;

export default Reviews;
