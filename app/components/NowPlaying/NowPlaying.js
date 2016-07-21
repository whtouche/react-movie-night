import React, { Component } from 'react';
import { Movie } from 'components';
import getMovies from 'helpers/rottenTomatoesHelpers';

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies('in_theaters')
      .then(response => response.json())
      .then(json => {
        this.setState({ movies: json.movies });
      });
  }
  render() {
    return (
      <div>
        {this.state.movies.map(movie => <Movie movie={movie} key={movie.id} />)}
      </div>
    );
  }
}

NowPlaying.propTypes = {

};

export default NowPlaying;
