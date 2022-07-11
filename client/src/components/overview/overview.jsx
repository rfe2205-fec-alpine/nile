import React from 'react';
import styled from 'styled-components';
import TitleSection from './title-section/titlesection.jsx';
import MainSection from './mainsection.jsx';

function Overview() {
  return (
    <OverviewComponent>
      <TitleSection />
      <MainSection />
    </OverviewComponent>
  );
}

const OverviewComponent = styled.div`
  align-self: stretch;
`;

export default Overview;
