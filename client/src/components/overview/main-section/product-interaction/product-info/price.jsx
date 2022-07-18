import React from 'react';
import styled from 'styled-components';

function Price({ price, salePrice, colorScheme }) {
  console.log('color scheme in price is', colorScheme);
  if (salePrice) {
    return (
      <PriceInDollars colorScheme={colorScheme}>
        <SalePriceInDollars>${salePrice}</SalePriceInDollars> &nbsp; <OriginalPriceInDollars colorScheme={colorScheme}>${price}</OriginalPriceInDollars>
      </PriceInDollars>
    );
  }
  return (
    <PriceInDollars colorScheme={colorScheme}>
      ${price}
    </PriceInDollars>
  );
}

const PriceInDollars = styled.span`
  color: ${(props) => props.colorScheme.textColorBackground}
  font-size: 18px;
  margin-bottom: 20px;
`;

const SalePriceInDollars = styled.span`
  color: red;
`;

const OriginalPriceInDollars = styled.span`
  color: ${(props) => props.colorScheme.textColorBackground}
  text-decoration: line-through;
`;

export default Price;
