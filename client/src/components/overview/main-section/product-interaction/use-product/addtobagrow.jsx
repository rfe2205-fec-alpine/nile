import React from 'react';
import styled from 'styled-components';
import AddToBag from './addtobag.jsx';
import Favorite from './favorite.jsx';

function AddToBagRow({ container }) {
  return (
    <AddToBagRowContainer>
      <AddToBag container={container} />
    </AddToBagRowContainer>
  );
}

const AddToBagRowContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export default AddToBagRow;
