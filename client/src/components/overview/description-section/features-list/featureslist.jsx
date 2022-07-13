import React from 'react';
import styled from 'styled-components';
import Feature from './feature.jsx';

function FeaturesList({ features }) {
  console.log('data in features list');
  console.log(features);

  let featuresList = features || [];

  let redBaron = featuresList.map(function(entry) {
    return <Feature feature={entry.feature} value={entry.value} />
  });

  return (
    <FeatureListItems>
      {redBaron}
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
