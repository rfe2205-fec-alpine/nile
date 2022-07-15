import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import getApiDataFromProductId from './apidata.js';
import ProductContext from '../../ProductContext.jsx';
import ThemeContext from '../../ThemeContext.jsx';

import TitleSection from './title-section/titlesection.jsx';
import MainSection from './main-section/mainsection.jsx';
import DescriptionSection from './description-section/descriptionsection.jsx';

function Overview() {
  const [productId] = React.useContext(ProductContext);
  const [colorScheme] = React.useContext(ThemeContext);

  const [[mainSectionData, descriptionSectionData], setData] = useState([{}, {}]);

  const styles = mainSectionData.styles || [];
  const numberOfStyles = styles.length;
  const heightOfStyleList = (((numberOfStyles / 4) + 2) * (66 + 29));

  const heightOfTitle = 125;
  const heightOfMain = 400 + 50 + heightOfStyleList;
  const heightOfDescription = 300;

  useEffect(() => {
    getApiDataFromProductId(productId, setData);
  }, [productId]);

  if (styles.length === 0) {
    return null;
  }

  return (
    <OverviewComponent title={heightOfTitle} main={heightOfMain} description={heightOfDescription}>
      <TitleSection colorScheme={colorScheme} />
      <MainSection data={mainSectionData} height={heightOfMain} />
      <DescriptionSection data={descriptionSectionData} />
    </OverviewComponent>
  );
}

const OverviewComponent = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.title}px ${(props) => props.main}px ${(props) => props.description}px;
`;

export default Overview;
