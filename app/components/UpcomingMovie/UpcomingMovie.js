import React, { PropTypes } from 'react';
import { container } from './styles.css';

const UpcomingMovie = ({movie}) => {
  return (
    <div className={container}>
      <h3>{movie.title}</h3>
      <h4>{movie.release_dates.theater}</h4>
      <h4>{movie.id}</h4>
      <div>
        <div>
          <span>{movie.ratings.critics_rating}</span>
        </div>
        <div>
          <span>{movie.ratings.critics_score}</span>
        </div>
        <div>
          <span>{movie.ratings.audience_score}</span>
        </div>
      </div>
      <div>
        <h3>{'Plot:'}</h3>
        <p>{movie.synopsis}</p>
      </div>
    </div>
  );
};

UpcomingMovie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default UpcomingMovie;
