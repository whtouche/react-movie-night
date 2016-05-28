// import ReactDOM from 'react-dom';
// import routes from './config/routes';

// ReactDOM.render(
//   routes,
//   document.getElementById('app')
// );

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BeerListContainer} from './components';

ReactDOM.render(
  <BeerListContainer/>,
  document.querySelector('#root'));
