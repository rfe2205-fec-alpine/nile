import React from 'react';
import styled from 'styled-components';

function AddToBag({ sizeSelected, qtySelected }) {
  function addToCart() {
    if (sizeSelected.size === 'Select Size') {
      alert('Please select size');
    } else {
      console.log('Adding to cart!');
      console.log('id being submitted', sizeSelected.id);
      console.log('size being submitted', sizeSelected.size.size);
      console.log('quantity being submitted', qtySelected);
    }
  }
  return (
    <AddToBagContainer onClick={addToCart}>
      ADD TO CART
    </AddToBagContainer>
  );
}

const AddToBagContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border: 1px solid black;
  background-color: #E4E4E4;
  margin: 25px;
  font-size: 18px;
`;

export default AddToBag;
