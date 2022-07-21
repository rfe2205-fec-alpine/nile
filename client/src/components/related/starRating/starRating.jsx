import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function StarRating({ rating }) {
  let count = rating.length;
  let sum = 0;
  for (let eachRating of rating) {
    sum += eachRating.rating;
  }
  let totalRating = sum / count;
  function getStar(value) {
    switch (value) {
      case 0:
        return <FaStar color="grey" />;
      case 5:
        return <FaStarHalfAlt color="yellow" />;
      case 10:
        return <FaStar color="yellow" />;
      default:
        console.log("error");
    }
  }
  function getStars(value) {
    switch (parseFloat(value)) {
      case 0.0:
        return [];
      case 0.5:
      case 0.6:
      case 0.7:
      case 0.8:
      case 0.9:
        return [5, 0, 0, 0, 0];
      case 1.0:
      case 1.1:
      case 1.2:
      case 1.3:
      case 1.4:
        return [10, 0, 0, 0, 0];
      case 1.5:
      case 1.6:
      case 1.7:
      case 1.8:
      case 1.9:
        return [10, 5, 0, 0, 0];
      case 2.0:
      case 2.1:
      case 2.2:
      case 2.3:
      case 2.4:
        return [10, 10, 0, 0, 0];
      case 2.5:
      case 2.6:
      case 2.7:
      case 2.8:
      case 2.9:
        return [10, 10, 5, 0, 0];
      case 3.0:
      case 3.1:
      case 3.2:
      case 3.3:
      case 3.4:
        return [10, 10, 10, 0, 0];
      case 3.5:
      case 3.6:
      case 3.7:
      case 3.8:
      case 3.9:
        return [10, 10, 10, 5, 0];
      case 4.0:
      case 4.1:
      case 4.2:
      case 4.3:
      case 4.4:
        return [10, 10, 10, 10, 0];
      case 4.5:
      case 4.6:
      case 4.7:
      case 4.8:
      case 4.9:
        return [10, 10, 10, 10, 5];
      case 5.0:
        return [10, 10, 10, 10, 10];
      default:
        console.log("No matches", value);
    }
  }
  if (getStars(totalRating)) {
    return <div>{getStars(totalRating).map((star) => getStar(star))}</div>;
  } else {
    return <div>Be the first to review this product</div>;
  }
}

export default StarRating;
