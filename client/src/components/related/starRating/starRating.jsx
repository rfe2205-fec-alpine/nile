import React from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating() {
  return (
    <div>
      {[...Array(5)].map(() => {
        return <FaStar />
      })}
    </div>

  );
}

export default StarRating;
