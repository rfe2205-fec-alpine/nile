import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { GITHUB_API_KEY, CAMPUS_CODE } from '../../../../config.js';
import ProductContext from '../../ProductContext.jsx';

import TitleSection from './title-section/titlesection.jsx';
import MainSection from './main-section/mainsection.jsx';
import DescriptionSection from './description-section/descriptionsection.jsx';

function getApiDataFromProductId() {
  const productId = React.useContext(ProductContext);
  const productUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/products/`;
  axios({
    method: 'get',
    url: productUrl,
    headers: {
      Authorization: GITHUB_API_KEY,
    },
  })
    .then((data) => {
      console.log(data);
    });
}

function Overview() {
  getApiDataFromProductId();
  return (
    <OverviewComponent>
      <TitleSection />
      <MainSection />
      <DescriptionSection />
    </OverviewComponent>
  );
}

const OverviewComponent = styled.div`
  align-self: stretch;
`;

export default Overview;
