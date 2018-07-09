import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import * as Router from 'react-router-dom';

ReactDOM.render(
  //<Router.BrowserRouter>
    <App />
  //</Router.BrowserRouter>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
