import React from 'react';
import styled from 'styled-components';
import TitleBar from './titlebar.jsx';

function Overview() {
  return (
    <OverviewComponent>
      <TitleBar />
    </OverviewComponent>
  );
}

const OverviewComponent = styled.div`
  background-color: #5d6699;
  align-self: stretch;
`;

export default Overview;
