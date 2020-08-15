import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';

ReactDom.render(
  <React.StrictMode>
    < App />
    <HashRouter>
      < App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
