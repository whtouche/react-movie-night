import React, { PropTypes } from 'react';
import { UpcomingMovie } from 'components';

const UpcomingMoviesList = props => {
  console.log('props: ', props);
  return (
    <div>
      {props.movies.map(movie => <UpcomingMovie movie={movie} key={movie.id} />)}
    </div>
  );
};

UpcomingMoviesList.propTypes = {

};

export default UpcomingMoviesList;
