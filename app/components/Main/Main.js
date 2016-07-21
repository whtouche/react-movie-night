import React from 'react';
import { Link } from 'react-router';
import { nav } from './styles.css';

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{'Movie Night!'}</h1>
        <ul className={nav}>
          <li>
            <Link to='/'>
              {'Home'}
            </Link>
          </li>
          <li>
            <Link to='/upcoming'>
              {'Upcoming Movies'}
            </Link>
          </li>
          <li>
            <Link to='/nowplaying'>
              {'Now Playing'}
            </Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  },
});

module.exports = Main;
