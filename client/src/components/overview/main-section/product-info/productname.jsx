import React from 'react';
import styled from 'styled-components';

function ProductName() {
  return (
    <Name>Expanded Product Name</Name>
  )
}

const Name = styled.div`
  font-size: 32px;
  font-weight: bolder;
`;

export default ProductName;