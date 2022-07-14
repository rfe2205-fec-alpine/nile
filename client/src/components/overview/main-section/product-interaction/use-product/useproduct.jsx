import React, { useState } from 'react';
import styled from 'styled-components';
import SelectionRow from './selectionrow.jsx';
import AddToBag from './addtobag.jsx';
import AddToBagRow from './addtobagrow.jsx';

const ItemContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border: 1px solid black;
  background-color: #E4E4E4;
  margin: 25px;
`;

function getSizesInStock(stockItems) {
  let sizesInStock = [];

  for (const stockId in stockItems) {

    let stockItem = stockItems[stockId];
    let amountInStock = stockItem.quantity;
    let size = stockItem.size;

    if (amountInStock > 0) {
      sizesInStock.push({ id: stockId, size: size });
    }
  }

  return sizesInStock;
}

function UseProduct({ stock }) {
  const [[selectionId, sizeSelection], setSizeSelection] = useState([0, 'Select Size']);

  // console.log('new size selected is', sizeSelection);
  let sizesInStock = getSizesInStock(stock);
  // console.log('sizes in stock are', sizesInStock);

  return (
    <UseProductContainer>
      <SelectionRow container={ItemContainer} sizeSelected={{ id: selectionId, size: sizeSelection }}
      setSizeSelection={setSizeSelection} listOfSizes={sizesInStock} stock={stock} />
      <AddToBagRow container={ItemContainer} />
    </UseProductContainer>
  );
}

const UseProductContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export default UseProduct;
