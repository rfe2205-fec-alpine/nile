import React from 'react';
import styled from 'styled-components';

function Slogan({ catchphrase }) {
  return (
    <Catchphrase>
      {catchphrase}
    </Catchphrase>
  );
}

const Catchphrase = styled.div`
  font-size: 24px;
  font-weight: bolder;
`;

export default Slogan;
