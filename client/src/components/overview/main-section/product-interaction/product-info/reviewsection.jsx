import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import QuarterStars from '../../../../../starRatingFunction.jsx';

function ReviewSection({ reviewScore, numberOfReviews }) {
  let rating = ratingInStars(reviewScore);
  return (
    <div>
      {rating}
      &emsp;
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Read all {numberOfReviews} reviews
      </a>
    </div>
  );
}

function ratingInStars(reviewScore) {
  let remainingScore = reviewScore;
  let redBaron = [];
  let key = 200;

  for (let currentIndex = 0; currentIndex < 5; currentIndex++) {
    key++;

    if (remainingScore < 0.5) {
      redBaron.push(<BsStar key={key} />);
    } else if (remainingScore < 1) {
      redBaron.push(<BsStarHalf key={key} />);
      remainingScore -= 0.5;
    } else {
      redBaron.push(<BsStarFill key={key} />);
      remainingScore -= 1;
    }
  }

  return redBaron;
}

export default ReviewSection;
