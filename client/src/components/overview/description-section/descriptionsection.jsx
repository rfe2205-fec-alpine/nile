import React from 'react';
import styled from 'styled-components';
import ProductDescription from './product-description/productdescription.jsx';
import FeaturesList from './features-list/featureslist.jsx';

function DescriptionSection({ data, colorScheme }) {
  // console.log('description section data');
  // console.log(data);

  // console.log('color scheme in description section is', colorScheme);

  const descriptionData = {
    catchphrase: data.slogan,
    description: data.description,
  };

  return (
    <DescriptionSectionContainer colorScheme={colorScheme}>
      <ProductDescription data={descriptionData} colorScheme={colorScheme} />
      <FeaturesList features={data.features} colorScheme={colorScheme} />
    </DescriptionSectionContainer>
  );
}

const DescriptionSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: ${(props) => props.colorScheme.foreground};
  height: 300px;
`;

export default DescriptionSection;
