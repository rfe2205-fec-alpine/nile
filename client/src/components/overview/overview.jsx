import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import getApiDataFromProductId from './apidata.js';
import ProductContext from '../../ProductContext.jsx';

import TitleSection from './title-section/titlesection.jsx';
import MainSection from './main-section/mainsection.jsx';
import DescriptionSection from './description-section/descriptionsection.jsx';

function Overview() {
  const productId = React.useContext(ProductContext);
  const [[mainSectionData, descriptionSectionData], setData] = useState([{}, {}]);

  useEffect(() => {
    getApiDataFromProductId(productId, setData);
  }, []);

  return (
    <OverviewComponent>
      <TitleSection />
      <MainSection data={mainSectionData} />
      <DescriptionSection data={descriptionSectionData} />
    </OverviewComponent>
  );
}

const OverviewComponent = styled.div`
  align-self: stretch;
`;

export default Overview;
