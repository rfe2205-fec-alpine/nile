import React from "react";
import styled from "styled-components";
import Overview from "./components/overview/overview.jsx";
import QAndA from "./components/q&a/q&a.jsx";

function App() {
  return (
    <PageContainer>
      <AppContainer>
        <Overview />
        <QAndA />
      </AppContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4.1fr 1fr;
`;

const AppContainer = styled.div`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default App;
