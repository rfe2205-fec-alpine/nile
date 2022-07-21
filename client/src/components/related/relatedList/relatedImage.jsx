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
    <div>
      <img
        src={image}
        style={{
          display: 'block',
          height: '300px',
          objectFit: 'cover',
          overflow: 'hidden',
          width: '100%',
          aspectRation: '16 / 9',
        }}
        alt="product"
      />
    </div>
  );
}
export default GetImage;
