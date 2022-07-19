import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { GITHUB_API_KEY, CAMPUS_CODE } from '../../config.js';
import Overview from './components/overview/overview.jsx';
import Reviews from './components/reviews/reviews.jsx';
import QAndA from "./components/q&a/q&a.jsx";
import RelatedItems from './components/related/relatedItems.jsx';
import ProductContext from './ProductContext.jsx';
import ThemeContext from './ThemeContext.jsx';
import Themes from './themes.js';

function ComponentWithClickTracker(Component, name) {
  return function () {
    function trackClick(event) {
      const tag = event.target.tagName;
      const date = (new Date()).toString();

      const interactionsUrl = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/interactions`;

      axios({
        method: 'post',
        url: interactionsUrl,
        data: {
          element: tag,
          widget: name,
          time: date,
        },
        headers: {
          Authorization: GITHUB_API_KEY,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return <Component onClick={trackClick} />;
  };
}

function App() {
  const selectedTheme = Themes.nile.light;
  const [productId, setProductId] = useState('37314');
  const [colorScheme, setColorScheme] = useState(selectedTheme);

  document.body.style.backgroundColor = selectedTheme.bodyColor;

  const ClickerOverview = ComponentWithClickTracker(Overview, 'Overview');
  const ClickerRelatedItems = ComponentWithClickTracker(RelatedItems, 'Related Items');
  const ClickerReviews = ComponentWithClickTracker(Reviews, 'Reviews');
  const ClickerQAndA = ComponentWithClickTracker(QAndA, 'Q&A');

  return (
    <ThemeContext.Provider value={[colorScheme, setColorScheme]}>
      <ProductContext.Provider value={[productId, setProductId]}>
        <PageContainer>
          <AppContainer>
            <ClickerOverview />
            <ClickerRelatedItems />
            <ClickerReviews />
            <ClickerQAndA />
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
