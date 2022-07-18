import React from 'react';
import styled from 'styled-components';
import Feature from './feature.jsx';

function FeaturesList({ features, colorScheme }) {
  // console.log('data in features list');
  // console.log(features);

  let featuresList = features || [];

  let key = 0;
  let redBaron = featuresList.map(function(entry) {
    key++;
    return <Feature feature={entry.feature} key={key} value={entry.value} />
  });

  return (
    <FeatureListItems colorScheme={colorScheme}>
      {redBaron}
    </FeatureListItems>
  );
}

const FeatureListItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 25px;
  color: ${(props) => props.colorScheme.textColorForeground}
`;

export default FeaturesList;
