import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import StarRating from '../starRating/starRating.jsx';
import GetStyles from './relatedImage.jsx';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../../config.js');

function RelatedCard({product}) {
  const [rating, useRating] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${product.id}`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    })
    .then((styles) => {
      useRating(styles.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  if (!rating) {
    return null;
  }
  return (
    <div>
      <Card>
        <StarButton><FaStar /></StarButton>
        <GetStyles product={product} />
        <ul>{product.category}</ul>
        <ul>{product.name}</ul>
        <ul>{product.default_price}</ul>
        <StarRating rating={rating} />
      </Card>
    </div>
  );
}

const Card = styled.div`
  border: 2px solid;
  width: 20%;
`;

// add click to StarButton
const StarButton = styled.div`
  color: #5d6699;
  float: right;
`;

export default RelatedCard;
