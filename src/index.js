// Styles
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
// Framework
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LocalizeProvider } from "react-localize-redux";
//
import store from "./store"
import routes from './routes';

const history = createBrowserHistory();


ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider >
      <Router history={history} >{routes}</Router>
    </LocalizeProvider>
  </Provider>,
  document.getElementById("root")
);
