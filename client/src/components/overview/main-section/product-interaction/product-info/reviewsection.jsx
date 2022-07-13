import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

function ReviewSection({ reviewScore }) {
  let rating = ratingInStars(reviewScore);
  return (
    <div>
      {rating}
      &emsp;
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Read all reviews</a>
    </div>
  );
}

function ratingInStars(reviewScore) {
  let remainingScore = reviewScore;
  let redBaron = [];
  for (let currentIndex = 0; currentIndex < 5; currentIndex++) {
    if (remainingScore < 0.5) {
      redBaron.push(<BsStar />);
    } else if (remainingScore < 1) {
      redBaron.push(<BsStarHalf />);
      remainingScore -= 0.5;
    } else {
      redBaron.push(<BsStarFill />);
      remainingScore -= 1;
    }
  }

  return redBaron;
}

export default ReviewSection;
