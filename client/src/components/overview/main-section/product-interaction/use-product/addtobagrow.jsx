import React from 'react';
import styled from 'styled-components';
import AddToBag from './addtobag.jsx';
// import Favorite from './favorite.jsx';

function AddToBagRow({ container, sizesInStock, sizeSelected, qtySelected }) {
  let outOfStock = sizesInStock.length === 0;

  if (outOfStock) {
    return <div />;
  }

  return (
    <AddToBagRowContainer>
      <AddToBag
        container={container}
        sizeSelected={sizeSelected}
        qtySelected={qtySelected}
      />
    </AddToBagRowContainer>
  );
}

const AddToBagRowContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export default AddToBagRow;
