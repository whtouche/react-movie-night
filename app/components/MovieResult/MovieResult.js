import React, {PropTypes} from 'react';
import { container } from './styles.css';

const MovieResult = props => {
  return (
    <div className={container}>
      <div>
        <img src={props.result.Poster} alt={props.result.Title} />
      </div>
      <div>
        <h3>{props.result.Title}</h3>
        <p><strong>{'imdbID:'} </strong>{props.result.imdbID}</p>
      </div>
    </div>
  );
};

MovieResult.propTypes = {
  result: PropTypes.object.isRequired,
};

export default MovieResult;
