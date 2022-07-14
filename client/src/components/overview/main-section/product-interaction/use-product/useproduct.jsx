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

    const stockItem = stockItems[stockId];
    const amountInStock = stockItem.quantity;
    const size = stockItem.size;

    if (amountInStock > 0) {
      sizesInStock.push({ id: stockId, size: size });
    }
  }

  return sizesInStock;
}

function UseProduct({ stock, selectedStyle }) {
  console.log('stock is', stock);

  const [[selectionId, sizeSelection], setSizeSelection] = useState([0, 'Select Size']);

  const sizeHasBeenSelected = selectionId !== 0;
  const defaultQtySelection = sizeHasBeenSelected ? 1 : '-';

  const newStylesLoaded = !stock[selectionId] && sizeHasBeenSelected;

  if (newStylesLoaded) {
    setSizeSelection([0, 'Select Size']);
  }

  const [qtySelected, setQtySelected] = useState(defaultQtySelection);
  // console.log('new size selected is', sizeSelection);

  const needsResetQuantity = selectionId === 0 && qtySelected !== '-';

  if (needsResetQuantity) {
    setQtySelected('-');
  } else if (sizeHasBeenSelected && qtySelected === '-') {
    setQtySelected(1);
  }

  const sizesInStock = getSizesInStock(stock);
  // console.log('sizes in stock are', sizesInStock);

  const qtyInStock = sizeSelection === 'Select Size' ? 0 : sizeSelection.quantity;

  return (
    <UseProductContainer>
      <SelectionRow
        container={ItemContainer}
        sizeSelected={{ id: selectionId, size: sizeSelection }}
        setSizeSelection={setSizeSelection}
        listOfSizes={sizesInStock}
        stock={stock}
        qtySelected={qtySelected}
        styQtySelected={setQtySelected}
        qtyInStock={qtyInStock}
      />
      <AddToBagRow container={ItemContainer} />
    </UseProductContainer>
  );
}

const UseProductContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export default UseProduct;
