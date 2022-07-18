import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import SortReviews from './sortReviews.jsx';
import ReviewTile from './reviewTile.jsx';
import ProductContext from '../../../ProductContext.jsx';
import { GITHUB_API_KEY } from '../../../../../config.js';
import SelectRatingsContext from '../selectedRatingsContext.jsx';
import CountContext from '../countContext.jsx';
// import SelectRatingsContext from '../selectedRatingContext.jsx';

function ReviewsList() {
  const [productID] = useContext(ProductContext);
  const [reviews, setReviews] = useState(null);
  const [query, changeQuery] = useState('relevant');
  const [selectedRatings, addSelectedRatings] = useContext(SelectRatingsContext);
  const [count, changeCount] = useContext(CountContext);

  useEffect(() => {
    Axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      params: {
        product_id: productID,
        sort: query,
        count: count,
      },
    }).then((res) => {
      setReviews(res.data);
    }).catch((err) => { console.log(err); });
  }, [productID, query, count, selectedRatings]);

  if (!reviews) {
    return null;
  }

  if (selectedRatings.nonToggled) {
    return (
      <>
        <SortReviews change={changeQuery} reviewQuery={query} />
        <ReviewsListWrapper>
          {reviews.results.map((review) => {
            return <ReviewTile key={review.review_id} reviewData={review} /> })}
        </ReviewsListWrapper>
      </>
    );
  }
  return (
      <ReviewsListWrapper>
        <SortReviews change={changeQuery} reviewQuery={query} />
        {reviews.results.map((review) => {
          if (selectedRatings[review.rating]) {
            return <ReviewTile key={review.review_id} reviewData={review} />;
          }})}
      </ReviewsListWrapper>
  );
}

const ReviewsListWrapper = styled.div`
  border: 1px solid blue;
  padding 2px;
  margin 5px;
  height: 800px;
  overflow-y: auto;
  border-radius: 10px;
`;

const ReviewsListWrapperOver = styled.div`
  border: 1px solid red;
  padding 2px;
  margin 5px;
  height: auto;
  overflow-y: 750px;
`;

export default ReviewsList;
