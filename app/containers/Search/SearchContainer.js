import React, { Component, PropTypes } from 'react';
import { container, innerContainer } from './styles.css';
import Search from 'components/Search/Search';
import API_KEY from './api';
import axios from 'axios';
import jsonp from 'jsonp';
import fetchJsonp from 'fetch-jsonp';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: ['inital state'],
    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let baseUrl = 'http://www.omdbapi.com/?v=1&s=';
  //   axios.get(`${baseUrl}${this.state.searchText}`)
  //     .then((response) => {
  //       this.setState({ searchResults: response.data });
  //       console.log(response.data);
  //     });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let baseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/movies.jsonp?q=';
  //   axios.get(`${baseUrl}${this.state.searchText}&apikey=${API_KEY}&callback=foo`)
  //     .then((response) => {
  //       this.setState({searchResults: response.data});
  //       console.log(response.data);
  //     });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let baseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/movies.jsonp?q=';
  //   jsonp(`${baseUrl}${this.state.searchText}&apikey=${API_KEY}`, null, (err, data) => {
  //     if (err) {
  //       console.error(err.message);
  //     } else {
  //       console.log(JSON.stringify(data));
  //       // this.setState({searchResults: data.movies});
  //     }
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    let baseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/movies.jsonp?q=';
    fetchJsonp(`${baseUrl}${this.state.searchText}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        console.log(json.movies);
        this.setState({searchResults: json.movies});
      });
  }

// fetchJsonp('/users.jsonp')
//   .then(function(response) {
//     return response.json()
//   }).then(function(json) {
//     console.log('parsed json', json)
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   })

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }

  render() {
    console.log('this.state.searchResults: ', this.state.searchResults);
    return (
      <Search
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.handleChange.bind(this)}
        searchResults={this.state.searchResults} />
    );
  }
}

SearchContainer.propTypes = {

};

export default SearchContainer;
