import React from 'react';
import styled from 'styled-components';

function Price() {
  return (
    <PriceInDollars>$369</PriceInDollars>
  );
}

const PriceInDollars = styled.div`
  font-size: 18px;
`;

export default Price;
