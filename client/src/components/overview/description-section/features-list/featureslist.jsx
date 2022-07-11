import React from 'react';
import styled from 'styled-components';
import Feature from './feature.jsx';

function FeaturesList() {
  return (
    <FeatureListItems>
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
      <Feature />
    </FeatureListItems>
  );
}

const FeatureListItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 25px;
`;

export default FeaturesList;
