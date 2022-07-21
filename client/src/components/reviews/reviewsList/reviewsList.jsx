import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import SortReviews from './sortReviews.jsx';
import ReviewTile from './reviewTile.jsx';
import ProductContext from '../../../ProductContext.jsx';
import { GITHUB_API_KEY } from '../../../../../config.js';
import SelectRatingsContext from '../selectedRatingsContext.jsx';
import CountContext from '../countContext.jsx';

function ReviewsList({ reviews, setReviews }) {
  // const [productID] = useContext(ProductContext);
  // const [reviews, setReviews] = useState(null);
  const [query, changeQuery] = useState('relevant');
  const [selectedRatings, addSelectedRatings] = useContext(SelectRatingsContext);
  const [count, changeCount] = useContext(CountContext);
  const [, triggerRender] = useState();

  useEffect(() => {
    if (query === 'helpful') {
      setReviews((current) => current.sort((a, b) => b.helpfulness - a.helpfulness));
      triggerRender('yo');
    } else if (query === 'relevant') {
      setReviews(mem);
      triggerRender('yoo');
    } else if (query === 'newest') {
      setReviews(reviews.sort((a, b) => new Date(b.date) - new Date(a.date)));
      triggerRender('yooo');
    } else {
      console.log('There was an error with sorting reviews...');
    }
  }, [query]);

  if (!reviews) {
    return null;
  }

  return (
    <>
      <div>
        {selectedRatings.nonToggled ? (
          <>
            <SortReviews change={changeQuery} reviewQuery={query} />
            <ReviewsListWrapper>
              {reviews.slice(0, count).map((review) => <ReviewTile key={review.review_id} reviewData={review} /> )}
            </ReviewsListWrapper>
          </>
          ):(
            <ReviewsListWrapper>
          <SortReviews change={changeQuery} reviewQuery={query} />
          {reviews.slice(0, count).map((review) => {
            if (selectedRatings[review.rating]) {
              return <ReviewTile key={review.review_id} reviewData={review} />;
            }})}
          </ReviewsListWrapper>)
          }
      </div>
    </>
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
