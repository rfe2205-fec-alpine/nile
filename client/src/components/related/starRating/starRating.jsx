import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function StarRating() {
  const rating = 4;
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
        return [5, 0, 0, 0, 0];
      case 1.0:
        return [10, 0, 0, 0, 0];
      case 1.5:
        return [10, 5, 0, 0, 0];
      case 2.0:
        return [10, 10, 0, 0, 0];
      case 2.5:
        return [10, 10, 5, 0, 0];
      case 3.0:
        return [10, 10, 10, 0, 0];
      case 3.5:
        return [10, 10, 10, 5, 0];
      case 4.0:
        return [10, 10, 10, 10, 0];
      case 4.5:
        return [10, 10, 10, 10, 5];
      case 5.0:
        return [10, 10, 10, 10, 10];
      default:
    }
  }
  if (getStars(rating).length) {
    return (
      <div>
        {getStars(rating).map((star) => getStar(star))}
      </div>
    );
  } else {
    return <div>Be the first to review this product</div>;
  }
}

export default StarRating;
