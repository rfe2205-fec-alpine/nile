import React from 'react';
import placeholder from './placeholder.jpg';

function GetImage({ productImage }) {
  let image;
  if (productImage.length > 0) {
    image = productImage[0].thumbnail_url;
  } else {
    image = productImage;
  }

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
