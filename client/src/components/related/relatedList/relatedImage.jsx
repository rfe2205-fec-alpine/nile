import React from 'react';
import placeholder from './placeholder.jpg';

function GetImage({ productImage }) {
  let image = productImage[0].photos[0].thumbnail_url;

  if (image === null) {
    image = placeholder;
  }
  return (
    <ul>
      <img src={image} width="250" height="250" alt="product" />
    </ul>
  );
}
export default GetImage;
