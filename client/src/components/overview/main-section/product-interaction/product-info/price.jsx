import React from 'react';
import styled from 'styled-components';

function Price({ price }) {
  return (
    <PriceInDollars>
      ${price}
    </PriceInDollars>
  );
}

const PriceInDollars = styled.div`
  font-size: 18px;
`;

export default Price;
