import React, { Component, PropTypes } from 'react';
import { container, innerContainer } from './styles.css';
import Main from 'components/Main/Main';

import axios from 'axios';

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: 'initial state',
    };
  }

  handleSubmit(e) {
    let baseUrl = 'http://www.omdbapi.com/?v=1&s=';
    axios.get(`${baseUrl}${this.state.searchText}`)
      .then((response) => {
        this.setState({searchResults: response.data});
        // console.log(response.data);
      });
  }

  handleChange(e) {
    this.setState({searchText: e.target.value});
    console.log(encodeURIComponent(this.state.searchText));
  }



  render() {
    return (
      <div>
      <h1>{'Heading'}</h1>
        <Main
          onSubmit={this.handleSubmit.bind(this)}
          onChange={this.handleChange.bind(this)}
          searchResults={this.state.searchResults} />
      </div>
    );
  }
}

MainContainer.propTypes = {

};

export default MainContainer;
