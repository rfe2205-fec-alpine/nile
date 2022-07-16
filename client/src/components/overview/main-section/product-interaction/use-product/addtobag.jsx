import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Promise from 'bluebird';

import { GITHUB_API_KEY, CAMPUS_CODE } from '../../../../../../../config.js';

const cartUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/cart`;

function AddToBag({ sizeSelected, qtySelected, selectedStyle, nameOfProduct }) {
  function addToCart() {
    if (sizeSelected.size === 'Select Size') {
      alert('Please select size');
    } else {
      // console.log('Adding to cart!');
      // console.log('id being submitted', sizeSelected.id);
      console.log('quantity being submitted', qtySelected);

      const quantityToAdd = parseInt(qtySelected);

      let id = sizeSelected.id;
      let styleName = selectedStyle.name;
      // console.log('style name is', styleName);

      let requests = Array(quantityToAdd).fill({
        method: 'post',
        url: cartUrl,
        data: {
          sku_id: id,
        },
        headers: {
          Authorization: GITHUB_API_KEY,
        },
      });

      console.log('length of requests', requests.length);

      Promise.all(requests.map((request) => axios(request)
        .then((response) => response)
        .catch((error) => error)))

        .then(responses => {
          // console.log(responses);
          let alertMessage = `Successfully added ${qtySelected} ${styleName} ${nameOfProduct} to your cart`;
          alert(alertMessage);
        })
        .catch(error => {
          console.log(error);
        });
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
