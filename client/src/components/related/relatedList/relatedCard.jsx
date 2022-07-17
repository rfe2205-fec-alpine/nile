import React from 'react';
import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import QuarterStars from '../../../starRatingFunction.jsx';
import GetStyles from './relatedImage.jsx';
import ProductContext from '../../../ProductContext.jsx';
import Comparison from './comparison.jsx';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../../config.js');

function RelatedCard({product, defaultData}) {
  const [productId, setProductId] = useContext(ProductContext);
  const [rating, setRating] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${product.id}`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    })
    .then((styles) => {
      setRating(() => (styles.data.results));
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  if (!rating) {
    return null;
  }

  let count = rating.length;
  let sum = 0;
  for (let eachRating of rating) {
    sum += eachRating.rating;
  }
  let totalRating = sum / count;

  return (
    <div>
      <Card>
        <div>
          <StarButton onClick={() => { setShow(!show); }}>Comparison</StarButton>
          <Comparison product={product} defaultData={defaultData} show={show} setShow={setShow} />
        </div>
      <div onClick={() => setProductId(product.id)}>
        <GetStyles product={product} />
        <ul>{product.category}</ul>
        <ul>{product.name}</ul>
        <ul>{product.default_price}</ul>
        <QuarterStars rating={Number.parseFloat(totalRating).toFixed(2)} />
      </div>
      </Card>
    </div>
  );
}

export default RelatedCard;

const Card = styled.div`
  background: #5d6699;
  padding: 0.25rem;
  width: 300px;
  height: 450px;
`;

// add click to StarButton
const StarButton = styled(FaStar)`
  color: #5d6699;
  font-size: 25px;
  float: right;
`;
