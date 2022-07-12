import React from 'react';
import styled from 'styled-components';
import Summary from './summary.jsx';
import Breakdown from './breakdown.jsx';
import ProductBreakdown from './product-breakdown.jsx';

function RatingBreakdown() {
  return (
    <RatingBreakdownWrapper>
      <Summary />
      <Breakdown />
      <ProductBreakdown />
    </RatingBreakdownWrapper>
  );
}

const RatingBreakdownWrapper = styled.div`
  border: 1px solid red;
  padding 20px;
  margin 5px;
`;

export default RatingBreakdown;
