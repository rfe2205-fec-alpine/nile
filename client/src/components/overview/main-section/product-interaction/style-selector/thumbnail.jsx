import React from 'react';
import styled from 'styled-components';

const minSize = '66px';

function Thumbnail({ size, imgUrl, setSelection }) {
  const selectedSize = size || minSize;
  return (
    <ThumbnailItemContainer imgUrl={imgUrl} size={selectedSize} onClick={setSelection} />
  );
}

const ThumbnailItemContainer = styled.div`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  margin-right: 29px;
  border: 1px solid black;
  margin-top: 14px;
  margin-bottom: 15px;
  border-radius: 100%;
  background-image: url("${(props) => props.imgUrl}");
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
`;

export default Thumbnail;
