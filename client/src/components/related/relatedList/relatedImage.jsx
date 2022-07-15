import React from 'react';
import { useEffect, useState } from 'react';
import placeholder from './placeholder.jpg';

const axios = require('axios');
const { GITHUB_API_KEY } = require('../../../../../config.js');

function GetStyles({product}) {
  const [productImage, useProductImage] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${product.id}/styles`,
      headers: {
        Authorization: GITHUB_API_KEY,
      },
    })
      .then((data) => {
        useProductImage(data.data.results);
      })
      .catch();
  }, []);

  if (!productImage) {
    return null;
  }
  let image = productImage[0].photos[0].thumbnail_url;
  if (image === null) {
    image = placeholder;
  }
  return (
    <ul>
      <img src={image} width="250" height="250" alt="product image"></img>
    </ul>
  );
}
export default GetStyles;
