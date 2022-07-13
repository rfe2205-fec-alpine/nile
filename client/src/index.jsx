import React from "react";
import { render } from "react-dom";
import App from "./app.jsx";
import ProductContext from './ProductContext.jsx';

render(
  <ProductContext.Provider value="37311">
    <App />
  </ProductContext.Provider>,
  document.getElementById('app'));

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';

// createRoot(document.getElementById('app')).render(
//   <div>
//     <App />
//   </div>,
// );
