import React, { Component, PropTypes } from 'react';
import { container, innerContainer } from './styles.css';
import Search from 'components/Search/Search';

import axios from 'axios';

class SearchContainer extends Component {
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
        console.log(response.data);
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
        <Search
          onSubmit={this.handleSubmit.bind(this)}
          onChange={this.handleChange.bind(this)}
          searchResults={this.state.searchResults.Search} />
      </div>
    );
  }
}

SearchContainer.propTypes = {

};

export default SearchContainer;
