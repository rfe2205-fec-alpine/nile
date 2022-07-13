import React from 'react';
import styled from 'styled-components';
import ProductDescription from './product-description/productdescription.jsx';
import FeaturesList from './features-list/featureslist.jsx';

function DescriptionSection({ data }) {
  // console.log('description section data');
  // console.log(data);

  const descriptionData = {
    catchphrase: data.slogan,
    description: data.description,
  };

  return (
    <DescriptionSectionContainer>
      <ProductDescription data={descriptionData} />
      <FeaturesList features={data.features} />
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
