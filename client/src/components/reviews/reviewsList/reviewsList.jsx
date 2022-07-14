import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import SortReviews from './sortReviews.jsx';
import ReviewTile from './reviewTile.jsx';
import ProductContext from '../../../ProductContext.jsx';
import { GITHUB_API_KEY } from '../../../../../config.js';

function ReviewsList() {
  const [productID] = useContext(ProductContext);
  const [reviews, setReviews] = useState(null);
  const [query, changeQuery] = useState('newest');

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
        count: 2,
      },
    }).then((res) => {
      setReviews(res.data);
    }).catch((err) => { console.log(err); });
  }, [productID, query]);

  if (!reviews) {
    return null;
  }

  return (
    <ReviewsListWrapper>
      <SortReviews change={changeQuery} reviewQuery={query} />
      {reviews.results.map((review) => {
        return <ReviewTile key={review.review_id} reviewData ={review} />
      })}
    </ReviewsListWrapper>
  );
}

const ReviewsListWrapper = styled.div`
  border: 1px solid red;
  padding 2px;
  margin 5px;
`;

export default ReviewsList;
