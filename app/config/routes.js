import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import SearchContainer from 'containers/Search/SearchContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={SearchContainer} />
  </Router>
);

export default routes;
