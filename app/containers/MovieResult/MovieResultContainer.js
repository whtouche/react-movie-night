import React, { Component, PropTypes } from 'react';
import { MovieResult } from 'components';

class MovieResultContainer extends Component {
  render() {
    return (
      <div>
        {this.props.searchResults.map((result) => <MovieResult key={result.id} result={result} />)}
      </div>
    );
  }
}

MovieResultContainer.propTypes = {

};

export default MovieResultContainer;
