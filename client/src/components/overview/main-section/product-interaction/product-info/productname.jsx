import React from 'react';
import styled from 'styled-components';

function ProductName({ name, colorScheme }) {
  return (
    <Name colorScheme={colorScheme}>
      {name}
    </Name>
  );
}

const Name = styled.div`
  font-size: 32px;
  font-weight: bolder;
  color: ${(props) => props.colorScheme.textColorBackground}
`;

export default ProductName;
