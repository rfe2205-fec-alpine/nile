import React from 'react';
import styled from 'styled-components';
import ProductDescription from './product-description/productdescription.jsx';
import FeaturesList from './features-list/featureslist.jsx';

function DescriptionSection({ data, colorScheme }) {
  // console.log('description section data');
  // console.log(data);

  console.log('color scheme in description section is', colorScheme);

  const descriptionData = {
    catchphrase: data.slogan,
    description: data.description,
  };

  return (
    <DescriptionSectionContainer primaryColor={colorScheme.foreground}>
      <ProductDescription data={descriptionData} colorScheme={colorScheme} />
      <FeaturesList features={data.features} />
    </DescriptionSectionContainer>
  );
}

const DescriptionSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: ${(props) => props.primaryColor};
  border-top: 0px solid ${(props) => props.primaryColor};
  height: 300px;
`;

export default DescriptionSection;
