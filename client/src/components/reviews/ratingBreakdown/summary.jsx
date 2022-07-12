import React from 'react';
import styled from 'styled-components';

function Summary() {
  return (
    <SummaryWrapper>
      <h3>Summary</h3>
    </SummaryWrapper>
  );
}

const SummaryWrapper = styled.div`
  border: 1px solid red;
  padding 20px;
  margin 5px;
`;

export default Summary;
