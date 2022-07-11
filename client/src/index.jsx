import React from "react";
import { render } from "react-dom";
import App from "./app.jsx";
import QAndA from "./components/q&a/q&a.jsx";

render(
  <div>
    <App />
    <QAndA />
  </div>,
  document.getElementById("app")
);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';

// createRoot(document.getElementById('app')).render(
//   <div>
//     <App />
//   </div>,
// );
