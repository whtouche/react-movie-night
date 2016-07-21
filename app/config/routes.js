import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Main, UpcomingMovies, NowPlaying } from 'components';
import { SearchContainer, ResultsContainer } from 'containers';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <Route path='/search' component={SearchContainer} />
      <Route path='/results' component={ResultsContainer} />
      <Route path='/upcoming' component={UpcomingMovies} />
      <Route path='/nowplaying' component={NowPlaying} />
    </Route>
  </Router>
);

export default routes;
