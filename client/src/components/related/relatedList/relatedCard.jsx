import React from 'react';
import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import QuarterStars from '../../../starRatingFunction.jsx';
import GetImage from './relatedImage.jsx';
import ProductContext from '../../../ProductContext.jsx';
import Comparison from './comparison.jsx';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../../config.js');

function RelatedCard({product, defaultData, setIndex }) {
  const [productId, setProductId] = useContext(ProductContext);
  const [rating, setRating] = useState(null);
  const [show, setShow] = useState(false);
  const [productImage, useProductImage] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${product.id}`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    })
      .then((ratingData) => {
        let total = 0;
        ratingData.data.results.forEach((eachRating) => {
          total += eachRating.rating;
        });
        setRating(total / ratingData.data.results.length);
      })
      .then(() => axios({
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.id}/styles`,
        headers: {
          Authorization: GITHUB_API_KEY,
        },
      }))
      .then((data) => {
        useProductImage(() => (data.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!rating || !productImage) {
    return null;
  }

  return (
    <div>
      <Card>
        <div>
          <StarButton onClick={() => { setShow(!show); }}>Comparison</StarButton>
          <Comparison product={product} defaultData={defaultData} show={show} setShow={setShow} />
        </div>
      <div onClick={() => { setProductId(product.id)
        setIndex(0)}}>
        <GetImage productImage={productImage} />
        <ul>{product.category}</ul>
        <ul>{product.name}</ul>
        <ul>{product.default_price}</ul>
        <QuarterStars rating={Number.parseFloat(rating).toFixed(2)} />
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

const StarButton = styled(FaStar)`
  color: #CCC;
  font-size: 25px;
  float: right;
`;
