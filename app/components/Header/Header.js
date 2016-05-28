import React, { PropTypes } from 'react';
const { bool, string, func, array, object } = PropTypes;

const Header = props => {
  return (
      <div>
        <h1>{'Movie Night'}</h1>
        <p>{'Let\'s go to the movies!'}</p>
      </div>
  );
};

Header.propTypes = {

};

export default Header;
