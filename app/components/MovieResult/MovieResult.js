import React, {PropTypes} from 'react';

const MovieResult = props => {
  return (
    <div>
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
