import React from "react";
import { render } from "react-dom";
import App from "./app.jsx";

function AppWithClickTracker(Component) {
  return function() {
    function trackClick(event) {
      let element = event.target;
      let id = event.id;

      console.log('element is', element);
      console.log('id is', id);
    }
    return <Component onClick={trackClick} />;
  };
}

render(<App />, document.getElementById('app'));

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';

// createRoot(document.getElementById('app')).render(
//   <div>
//     <App />
//   </div>,
// );
