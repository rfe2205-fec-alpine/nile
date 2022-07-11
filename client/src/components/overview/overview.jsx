import React from 'react';
import styled from 'styled-components';
import TitleBar from './titlebar.jsx';
import AnnouncementBar from './announcementbar.jsx';

function Overview() {
  return (
    <OverviewComponent>
      <TitleBar />
      <AnnouncementBar />
    </OverviewComponent>
  );
}

const OverviewComponent = styled.div`
  background-color: #5d6699;
  align-self: stretch;
`;

export default Overview;
