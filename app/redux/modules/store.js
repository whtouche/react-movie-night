import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './';

const initialState = {
  upcomingMovies: {},
  nowPlaying: {},
};
