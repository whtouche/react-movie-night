import React, { Component } from 'react';
import { Movie } from 'components';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as nowPlayingActionCreators from 'modules/nowPlaying';

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.props.fetchNowPlaying();
  }

  render() {
    return (
      <div className='foo'>
        {this.props.nowPlaying.nowPlaying.movies.map(movie => <Movie movie={movie} key={movie.id} />)}
      </div>
    );
  }
}

NowPlaying.propTypes = {

};

function mapStateToProps(state) {
  return {
    nowPlaying: state.nowPlaying,
  };
}

function mapDispatchToProps(dispatch, props) {
  return bindActionCreators(nowPlayingActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NowPlaying);
