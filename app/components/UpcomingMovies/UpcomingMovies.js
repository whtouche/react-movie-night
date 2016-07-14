import React, { Component, PropTypes } from 'react';
import fetchJsonp from 'fetch-jsonp';
import API_KEY from '../../../api';
import { UpcomingMoviesList } from 'components';

class UpcomingMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    console.log('this.state: ', this.state);
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    let baseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.jsonp?page_limit=16&page=1&country=us';
    fetchJsonp(`${baseUrl}&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        console.log('json.movies: ', json.movies);
        this.setState({ movies: json.movies });
      });
  }

  render() {
    return (
      <div className='upcomingMoviesList'>
        <UpcomingMoviesList movies={this.state.movies} />
      </div>
    );
  }
}

UpcomingMovies.propTypes = {

};

export default UpcomingMovies;
