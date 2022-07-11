import React from 'react';
import styled from 'styled-components';
import ProductDescription from './product-description/productdescription.jsx';
import FeaturesList from './features-list/featureslist.jsx';

function DescriptionSection() {
  return (
    <DescriptionSectionContainer>
      <ProductDescription />
      <FeaturesList />
    </DescriptionSectionContainer>
  );
}

const DescriptionSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #5d6699;
  height: 300px;
`;

export default DescriptionSection;
