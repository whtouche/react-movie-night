import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import SearchContainer from 'containers/Search/SearchContainer';
import Main from 'components/Main/Main';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='/search' component={SearchContainer} />
    </Route>
  </Router>
);

export default routes;
