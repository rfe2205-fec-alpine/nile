import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from './carousel/carousel.jsx';
import PreviousImageButton from './previousimagebutton.jsx';
import NextImageButton from './nextimagebutton.jsx';

const swissAlpsUrl = "https://miro.medium.com/max/1400/1*yweiw7AyafIdk0YKt4G03Q.jpeg";
const imageUrl = "https://media.cntraveler.com/photos/5a009c8e25be133d871c008e/16:9/w_2560%2Cc_limit/Mountain-Travel_GettyImages-503689316.jpg";

const thumbnails = [
  { style_id: '1', imgUrl: imageUrl },
  { style_id: '2', imgUrl: swissAlpsUrl },
  { style_id: '3', imgUrl: swissAlpsUrl },
  { style_id: '4', imgUrl: swissAlpsUrl },
  { style_id: '5', imgUrl: swissAlpsUrl },
  { style_id: '6', imgUrl: swissAlpsUrl },
  { style_id: '7', imgUrl: swissAlpsUrl },
];

function ProductImage({ photos }) {
  const photoList = photos || [];
  const firstPhoto = photoList[0] || { thumbnail_url: '' };
  const [selection, setSelection] = useState(firstPhoto);

  return (
    <ProductImageContainer selectionImageUrl={selection.thumbnail_url}>
      <Carousel thumbnails={photoList} selection={selection} setSelection={setSelection} />
      <PreviousImageButton />
      <NextImageButton />
    </ProductImageContainer>
  );
}
// const imageHeight = '625px';

const ProductImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr 4fr 1fr;
  background-color: #5d6699;
  background-image: url("${(props) => props.selectionImageUrl}");
  background-size: cover;
  background-repeat: no-repeat;
`;

export default ProductImage;
