import React from 'react';
import styled from 'styled-components';

function Thumbnail() {
  return (
    <ThumbnailItemContainer />
  );
}

const snowMobileUrl = 'https://blog.amsoil.com/wp-content/uploads/2018/10/EDIT-7130-scaled.jpg';

const ThumbnailItemContainer = styled.div`
  margin-right: 29px;
  border: 1px solid black;
  margin-bottom: 29px;
  border-radius: 100%;
  background-image: url("${snowMobileUrl}");
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
`;

export default Thumbnail;
