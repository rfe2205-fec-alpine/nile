import React from 'react';
import styled from 'styled-components';
import Value from './value.jsx';

function Feature({ feature, value, colorScheme }) {
  return (
    <FeatureItem>
      {feature}: <Value value={value} colorScheme={colorScheme} />
    </FeatureItem>
  );
}

const FeatureItem = styled.span`
  display: grid;
  grid-template-columns: 1fr 2fr;
  font-weight: bolder;
  padding-bottom: 10px;
`;

export default Feature;
