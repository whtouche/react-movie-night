import React, {PropTypes} from 'react';
import MovieResult from 'components/MovieResult/MovieResult';

const Main = props => {
  function puke(obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
  }

  return (
      <div>
        <h1>{'Movie Night!'}</h1>
        <div>
          <form onSubmit={props.onSubmit}>
            <div>
              <input
                onChange={props.onChange}
                placeholder='Movie Title'
                type='text'
                value={props.searchText} />
            </div>
            <div>
              <button
                type='submit'>
                {'Continue'}
              </button>
            </div>
          </form>
        </div>
        {props.searchResults
          ? <div>{props.searchResults.map((result) => <li key={result.imdbID}>
            <MovieResult result={result} />
          </li>)}</div>
          : <div></div>}
      </div>
  );
};

Main.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default Main;

// {props.searchResults
// // ? <div>{puke(props.searchResults)}</div>
// // ? <div>{console.log(props.searchResults)}</div>
// ? <div>{props.searchResults.map((result) => <li key={result.imdbID}>{result.Title}</li>)}</div>
// : <div></div>}
// Poster
// Title
// Type
// Year
// imdbID
