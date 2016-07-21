import React, { Component } from 'react';
import { Movie } from 'components';

import getMovies from 'helpers/rottenTomatoesHelpers';

class UpcomingMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies('upcoming')
      .then(response => response.json())
      .then(json => {
        this.setState({ movies: json.movies });
      });
  }

  render() {
    return (
      <div className='upcomingMoviesList'>
        {this.state.movies.map(movie => <Movie movie={movie} key={movie.id} />)}
      </div>
    );
  }
}

UpcomingMovies.propTypes = {

};

export default UpcomingMovies;
