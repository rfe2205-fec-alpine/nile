import React from "react";
import styled from "styled-components";
import Overview from "./components/overview/overview.jsx";
import Reviews from "./components/reviews/reviews.jsx";
import QAndA from "./components/q&a/q&a.jsx";

function App() {
  return (
    <PageContainer>
      <AppContainer>
        <Overview />
        <Reviews />
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
  grid-column-start: 2;
  grid-column-end: 3;
`;

export default App;
