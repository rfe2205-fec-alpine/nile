import React from 'react';
import styled from 'styled-components';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import QuarterStars from '../../../../../starRatingFunction.jsx';

function readReviews() {
  const element = document.getElementById('allReviews');
  const rectangle = element.getBoundingClientRect();
  const newYPosition = rectangle.y;

  window.scrollTo(0, newYPosition);
}

function ReviewSection({ reviewScore, numberOfReviews, colorScheme }) {
  let rating = ratingInStars(reviewScore);
  return (
    <span>
      {rating}
      &emsp;
      <ReadAllReviews onClick={readReviews} primaryColor={colorScheme.primaryColor}>
        Read all {numberOfReviews} reviews
      </ReadAllReviews>
    </span>
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

const ReadAllReviews = styled.span`
&:hover {
  color: ${(props) => props.primaryColor};
  cursor: default;
}
  color: black;
  text-decoration: underline;
`;

const StarRating = styled(QuarterStars)`
  background-color: ${(props) => props.colorScheme.secondaryColor}
`;

export default ReviewSection;
