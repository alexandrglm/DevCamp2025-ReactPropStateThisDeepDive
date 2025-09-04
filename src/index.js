import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';


// NOTICE -> Añadimos StrictMode (pero en su version react vieja)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.querySelector('.app-wrapper'));