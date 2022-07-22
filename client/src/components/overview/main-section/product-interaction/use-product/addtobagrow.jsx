import React from 'react';
import styled from 'styled-components';
import AddToBag from './addtobag.jsx';
// import Favorite from './favorite.jsx';

function AddToBagRow({ container, sizesInStock, sizeSelected, qtySelected, selectedStyle, nameOfProduct, colorScheme, setSizeSelection }) {
  let outOfStock = sizesInStock.length === 0;

  if (outOfStock) {
    return <div />;
  }

  return (
    <AddToBagRowContainer>
      <AddToBag
        container={container}
        sizeSelected={sizeSelected}
        setSizeSelection={setSizeSelection}
        qtySelected={qtySelected}
        selectedStyle={selectedStyle}
        nameOfProduct={nameOfProduct}
        colorScheme={colorScheme}
      />
    </AddToBagRowContainer>
  );
}

const AddToBagRowContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export default AddToBagRow;
