import React from 'react';
import styled from 'styled-components';
import Overview from './components/overview/overview.jsx';

function App() {
  return (
    <PageContainer>
      <AppContainer>
        <header>NILE</header>
        <Overview />
      </AppContainer>
    </PageContainer>
  );
}


const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 7.25fr 1fr;
`;

const AppContainer = styled.div`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #CCC;
  border: 2px solid black;
`;

export default App;
