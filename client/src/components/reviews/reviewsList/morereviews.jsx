import React, { useContext } from 'react';
import ProductContext from '../../../ProductContext.jsx';
// import styled from 'styled-components';

function MoreReviewsButton() {
  const [, setProductId] = useContext(ProductContext);
  return (
    <button type="submit" onClick={() => setProductId('37315')}>More Reviews Button</button>
  );
}

export default MoreReviewsButton;
