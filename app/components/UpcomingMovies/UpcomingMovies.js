import React, { Component } from 'react';
import { Movie } from 'components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as upcomingActionCreators from 'modules/upcoming';

class UpcomingMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.props.fetchUpcoming();
  }

  render() {
    return (
      <div className='upcomingMoviesList'>
        {this.props.upcoming.upcoming.movies.map(movie => <Movie movie={movie} key={movie.id} />) }
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
  return bindActionCreators(upcomingActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UpcomingMovies);
