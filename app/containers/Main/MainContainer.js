import React, { Component, PropTypes } from 'react';
import Header from 'components/Header/Header';

import { container, innerContainer } from './styles.css';

class MainContainer extends Component {
  render() {
    return (
      <div className={container}>
        <div className={innerContainer}>
          <Header />
        </div>
      </div>
    );
  }
}

MainContainer.propTypes = {

};

export default MainContainer;
