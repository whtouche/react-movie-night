import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import SearchContainer from 'containers/Search/SearchContainer';
import Home from 'components/Home/Home';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={SearchContainer}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
