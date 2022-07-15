import React from 'react';
import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import StarRating from '../starRating/starRating.jsx';
import GetStyles from './relatedImage.jsx';
import ProductContext from '../../../ProductContext.jsx';
import Comparison from './comparison.jsx';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../../config.js');

function RelatedCard({product}) {
  const [rating, useRating] = useState(null);
  const [productId, setProductId] = useContext(ProductContext);
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
      <Comparison product={product.id} />
    <div onClick={() => setProductId(product.id)}>
      <Card>
        <GetStyles product={product} />
        <ul>{product.category}</ul>
        <ul>{product.name}</ul>
        <ul>{product.default_price}</ul>
        <StarRating rating={rating} />
      </Card>
    </div>
    </div>
  );
}

export default RelatedCard;

const Card = styled.div`
  background: #5d6699;
  padding: 0.25rem;
  width: 100%;
  height: 100;
`;
