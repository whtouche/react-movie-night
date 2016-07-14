import React from 'react';
import { Link } from 'react-router';

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{'Movie Night!'}</h1>
        <div>
          <Link to='/'>
            {'Home'}
          </Link>
        </div>
        <div>
          <Link to='/search'>
            {'Search'}
          </Link>
        </div>
        <div>
          <Link to='/results'>
            {'Results'}
          </Link>
        </div>
        <div>
          <Link to='/upcoming'>
            {'Upcoming Movies'}
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  },
});

module.exports = Main;
