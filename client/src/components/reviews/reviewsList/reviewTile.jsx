import React from 'react';
import styled from 'styled-components';

function ReviewTile() {
  return (
    <ReviewTileWrapper>
      <h4>Review Tile</h4>
    </ReviewTileWrapper>
  );
}

const ReviewTileWrapper = styled.div`
  border: 1px solid red;
  padding 20px;
  margin 5px;
`;

export default ReviewTile;
