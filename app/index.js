import ReactDOM from 'react-dom';
import routes from './config/routes';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import * as reducers from 'modules';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
