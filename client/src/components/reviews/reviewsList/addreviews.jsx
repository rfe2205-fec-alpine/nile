import React from 'react';
import ProductContext from '../../../ProductContext.jsx';
// import styled from 'styled-components';

function AddReviewsButton() {
  const [productID] = React.useContext(ProductContext);
  return (
    <h4>{productID}</h4>
  );
}

export default AddReviewsButton;
