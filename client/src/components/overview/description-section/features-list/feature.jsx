import React from 'react';
import styled from 'styled-components';

function Feature({ feature, value }) {
  return (
    <FeatureItem>
      {feature}: {value}
    </FeatureItem>
  );
}

const FeatureItem = styled.div`
  font-weight: bolder;
  padding-bottom: 10px;
`;

export default Feature;
