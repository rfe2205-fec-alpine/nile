import React from 'react';
import styled from 'styled-components';
import AddToBag from './addtobag.jsx';
import Favorite from './favorite.jsx';

function AddToBagRow(props) {
  return (
    <AddToBagRowContainer>
      <AddToBag container={props.container} />
      <Favorite container={props.container} />
    </AddToBagRowContainer>
  );
}

const AddToBagRowContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
`;

export default AddToBagRow;
