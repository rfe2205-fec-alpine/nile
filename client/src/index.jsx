import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

render(
  <div>
    <App />
  </div>,
  document.getElementById('app'),
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';

// createRoot(document.getElementById('app')).render(
//   <div>
//     <App />
//   </div>,
// );
