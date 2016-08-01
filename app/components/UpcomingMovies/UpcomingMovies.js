import React, { Component } from 'react';
import { Movie } from 'components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as upcomingActionCreators from 'modules/upcoming';

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

function mapStateToProps(state) {
  console.log('state: ', state);
  return {
    upcoming: state.upcoming,
  };
}

function mapDispatchToProps(dispatch, props) {
  console.log('dispatch: ', dispatch);
  console.log('props: ', props);

  return bindActionCreators({...upcomingActionCreators}, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpcomingMovies);
