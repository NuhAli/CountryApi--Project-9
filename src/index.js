import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashBrowser as Browser} from 'react-router-dom'

ReactDOM.render(
  <Browser>
    <App />
  </Browser>,
  document.getElementById('root')
);


