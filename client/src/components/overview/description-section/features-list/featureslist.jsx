import React from 'react';
import styled from 'styled-components';
import Feature from './feature.jsx';
import Value from './value.jsx';

function FeaturesList({ features, colorScheme }) {
  // console.log('data in features list');
  // console.log(features);

  let featuresList = features || [];

  let key = 0;
  let redBaron = featuresList.map(function(entry) {
    key++;
    return <Feature feature={entry.feature} key={key} value={entry.value} colorScheme={colorScheme} />
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
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 60px;
  color: ${(props) => props.colorScheme.background}
`;

export default FeaturesList;
