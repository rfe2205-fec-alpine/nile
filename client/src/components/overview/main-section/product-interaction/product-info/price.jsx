import React from 'react';
import styled from 'styled-components';

function Price({ price, salePrice }) {
  if (salePrice) {
    return (
      <PriceInDollars>
        <SalePriceInDollars>${salePrice}</SalePriceInDollars> &nbsp; <OriginalPriceInDollars>${price}</OriginalPriceInDollars>
      </PriceInDollars>
    );
  }
  return (
    <PriceInDollars>
      ${price}
    </PriceInDollars>
  );
}

const PriceInDollars = styled.span`
  font-size: 18px;
  margin-bottom: 20px;
`;

const SalePriceInDollars = styled.span`
  color: red;
`;

const OriginalPriceInDollars = styled.span`
  text-decoration: line-through;
`;

export default Price;
