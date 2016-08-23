import React, { PropTypes } from 'react';
import { container } from './styles.css';

const Movie = ({movie}) => {
  console.log('movie: ', movie);
  const movieQuery = movie.title.split(' ').join('+');
  const splitDate = movie.release_dates.theater.split('-');
  const parsedDate = new Date(splitDate[0], (splitDate[1] - 1), splitDate[2]);

  return (
    <div className={container}>
      <h3>{'Title: '}<a href={`https://www.youtube.com/results?search_query=${movieQuery}+trailer`} target='_blank'>{movie.title}</a></h3>
      <h4>{'Release Date: '}{parsedDate.toDateString()}</h4>
      <h4>{'Movie ID: '}{movie.id}</h4>
      <div>
        <div>
          <span>{'Critics Rating: '}{movie.ratings.critics_rating}</span>
        </div>
        <div>
          <span>{'Critics Score: '}{movie.ratings.critics_score}</span>
        </div>
        <div>
          <span>{'Audience Score: '}{movie.ratings.audience_score}</span>
        </div>
      </div>
      <div>
        <h3>{'Plot:'}</h3>
        <p>{movie.synopsis}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
