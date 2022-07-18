import React, { useState } from 'react';
import styled from 'styled-components';
import Overview from './components/overview/overview.jsx';
import Reviews from './components/reviews/reviews.jsx';
import QAndA from "./components/q&a/q&a.jsx";
import RelatedItems from './components/related/relatedItems.jsx';
import ProductContext from './ProductContext.jsx';
import ThemeContext from './ThemeContext.jsx';
import Themes from './themes.js';

function App() {
  const selectedTheme = Themes.nile.light;
  const [productId, setProductId] = useState('37314');
  const [colorScheme, setColorScheme] = useState(selectedTheme);

  document.body.style.backgroundColor = selectedTheme.bodyColor;

  return (
    <ThemeContext.Provider value={[colorScheme, setColorScheme]}>
      <ProductContext.Provider value={[productId, setProductId]}>
        <PageContainer>
          <AppContainer>
            <Overview />
            <RelatedItems />
            <Reviews />
            <QAndA />
          </AppContainer>
        </PageContainer>
      </ProductContext.Provider>
    </ThemeContext.Provider>
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
