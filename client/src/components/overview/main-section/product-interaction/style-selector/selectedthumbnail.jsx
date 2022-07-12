import React from 'react';
import styled from 'styled-components';
import Thumbnail from './thumbnail.jsx';
import CheckMark from './checkmark.jsx';

function SelectedThumbnail() {
  return (
    <SelectedThumbnailContainer>
      <SelectedThumbnailItem />
      <CheckMark />
    </SelectedThumbnailContainer>
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

const SelectedThumbnailContainer = styled.div`
  font-size: 15px;
`;

const SelectedThumbnailItem = styled(ThumbnailItemContainer)`
  position: absolute;
  width: 70px;
  height: 70px;
`;

export default SelectedThumbnail;
