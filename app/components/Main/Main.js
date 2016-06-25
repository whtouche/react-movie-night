import React from 'react';
import { Link } from 'react-router';

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{'Movie Night!'}</h1>
        <Link to='/search'>
          {'Search'}
        </Link>
        {this.props.children}
      </div>
    );
  },
});

module.exports = Main;
