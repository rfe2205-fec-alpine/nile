import React from 'react';
import ProductContext from '../../../ProductContext.jsx';
// import styled from 'styled-components';

function AddReviewsButton() {
  const productID = React.useContext(ProductContext);
  console.log(productID);
  return (
    <h4>{productID}</h4>
    // <ProductContext.Consumer>
    //   {(value) => {
    //     fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${value}`).then((val) => console.log(val));
    //   }}
    //   {/* <button type="submit" value="submit">Add Reviews Button</button> */}
    // </ProductContext.Consumer>
  );
}

export default AddReviewsButton;
