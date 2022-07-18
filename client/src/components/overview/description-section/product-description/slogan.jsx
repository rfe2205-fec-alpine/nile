import React from 'react';
import styled from 'styled-components';

function Slogan({ catchphrase, colorScheme }) {
  return (
    <Catchphrase colorScheme={colorScheme}>
      {catchphrase}
    </Catchphrase>
  );
}

const Catchphrase = styled.div`
  font-size: 24px;
  font-weight: bolder;
  color: ${(props) => props.colorScheme.textColorBackground}
`;

export default Slogan;
