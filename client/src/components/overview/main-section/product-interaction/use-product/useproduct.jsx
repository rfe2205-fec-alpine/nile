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

function sizeIsInNewStock(itemsInStock, sizeSelected) {
  // console.log('items in stock are', itemsInStock);
  // console.log('size selected is', sizeSelected);
  for (const item of itemsInStock) {
    console.log('item size is', item.size);
    if (item.size === sizeSelected.size) {
      return true;
    }
  }

  return false;
}

function UseProduct({ stock }) {
  // console.log('stock is', stock);

  const sizesInStock = getSizesInStock(stock);
  // console.log('sizes in stock are', sizesInStock);

  const [[selectionId, sizeSelection], setSizeSelection] = useState([0, 'Select Size']);

  const sizeHasBeenSelected = selectionId !== 0;
  const defaultQtySelection = sizeHasBeenSelected ? 1 : '-';

  const mightNeedSizeReset = !stock[selectionId] && sizeHasBeenSelected;
  let needsSizeReset = false;

  if (mightNeedSizeReset) {
    needsSizeReset = !sizeIsInNewStock(sizesInStock, sizeSelection);
  }

  if (needsSizeReset) {
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
        setQtySelected={setQtySelected}
        qtyInStock={qtyInStock}
      />
      <AddToBagRow
        container={ItemContainer}
        sizesInStock={sizesInStock}
        sizeSelected={{ id: selectionId, size: sizeSelection }}
        qtySelected={qtySelected}
      />
    </UseProductContainer>
  );
}

const UseProductContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export default UseProduct;
