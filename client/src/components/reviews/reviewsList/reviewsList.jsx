import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import SortReviews from './sortReviews.jsx';
import ReviewTile from './reviewTile.jsx';
import ProductContext from '../../../ProductContext.jsx';
import { GITHUB_API_KEY } from '../../../../../config.js';
import SelectRatingsContext from '../selectedRatingsContext.jsx';
import CountContext from '../countContext.jsx';


function ReviewsList() {
  const [productID] = useContext(ProductContext);
  const [reviews, setReviews] = useState(null);
  const [query, changeQuery] = useState('relevant');
  const [selectedRatings, addSelectedRatings] = useContext(SelectRatingsContext);
  const [count, changeCount] = useContext(CountContext);
  const [relevantSaved, changeRelevantSaved] = useState(null);


  useEffect(() => {
    console.log('useEffect was invoked...');
    Axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews',
      headers: {
        Authorization: GITHUB_API_KEY,
      },
      params: {
        product_id: productID,
        // sort: query,
        count: 100,
      },
    }).then((res) => {
      setReviews(res.data.results);
      // changeRelevantSaved(res.data.results);
    }).catch((err) => { console.log(err); });
  }, [productID]);

  useEffect(() => {
    console.log('USe Effetc:', query);
    if (query === 'helpful') {
      console.log('helpful was selected');
      setReviews((current) => current.sort((a, b) => a.helpfulness - b.helpfulness));
    } else if (query === 'relevant') {
      console.log('relevant was selected');
    } else if (query === 'newest') {
      console.log('hello, newest was selected');
      setReviews(reviews.sort((a, b) => new Date(a.date) - new Date(b.date)));
    } else {
      console.log('There was an error with sorting reviews...');
    }
  }, [query]);

  if (!reviews) {
    return null;
  }

  if (selectedRatings.nonToggled) {
    return (
      <>
        <SortReviews change={changeQuery} reviewQuery={query} />
        <ReviewsListWrapper>
          {reviews.map((review) => {
            return <ReviewTile key={review.review_id} reviewData={review} /> })}
        </ReviewsListWrapper>
      </>
    );
  }
  return (
    <ReviewsListWrapper>
      <SortReviews change={changeQuery} reviewQuery={query} />
      {reviews.map((review) => {
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
