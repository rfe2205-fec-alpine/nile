import React from 'react';
import styled from 'styled-components';
import TitleBar from './titlebar.jsx';
import AnnouncementBar from './announcementbar.jsx';
import MainSection from './mainsection.jsx';

function Overview() {
  return (
    <OverviewComponent>
      <TitleBar />
      <AnnouncementBar />
      <MainSection />
    </OverviewComponent>
  );
}

const OverviewComponent = styled.div`
  align-self: stretch;
`;

export default Overview;
