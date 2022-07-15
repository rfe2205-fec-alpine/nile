import React from 'react';
import styled from 'styled-components';

function Qty({ container, qtySelected, setQtySelected, qtyInStock }) {
  // console.log('quantity selected is', qtySelected);
  const QtyContainer = styled(container)`
    justify-content: center;
    font-size: 32px;
    padding: 0px;
  `;

  function changeQuantitySelection(event) {
    let newQuantity = event.target.value;
    // console.log('new Quantity is', newQuantity);
    setQtySelected(newQuantity);
  }

  if (qtySelected === '-') {
    return (
      <QtyContainer>
        {qtySelected}
      </QtyContainer>
    );
  }

  let quantitiesAvailable = [];

  let qty = 1;
  while (qty <= qtyInStock && qty <= 15) {
    quantitiesAvailable.push(<option value={qty}>{qty}</option>);
    qty++;
  }

  let selectedQty = <option selected value={qtySelected}>{qtySelected}</option>;

  return (
    <SelectQtyMenu defaultValue={'Qty'} onChange={changeQuantitySelection}>
      {quantitiesAvailable}
    </SelectQtyMenu>
  );
}

const SelectQtyMenu = styled.select.attrs((props) => ({
  onChange: props.onChange,
}))`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #E4E4E4;
  margin: 25px;
  font-size: 18px;
`;

export default Qty;
