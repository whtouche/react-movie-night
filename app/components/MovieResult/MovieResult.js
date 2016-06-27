import React, {PropTypes} from 'react';
import { container } from './styles.css';

const MovieResult = props => {
  return (
    <div className={container}>
      <div>
        <img src={props.result.Poster} alt={props.result.Title} />
      </div>
      <div>
        <h3>{'Title:'} {props.result.title}</h3>
        <h3>{'Poster:'}{props.result}</h3>
        <h3>{'imdb id:'}{props.result.alternate_ids}</h3>
      </div>
    </div>
  );
};

MovieResult.propTypes = {
  result: PropTypes.object.isRequired,
};

export default MovieResult;
