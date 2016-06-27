import React, {PropTypes} from 'react';
import MovieResult from 'components/MovieResult/MovieResult';

const Search = props => {
  props.searchResults.map(result => console.log('result: ', result));
  console.log('props: ', props);

  function puke(obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
  }

  return (
      <div>
        <h1>{'Search'}</h1>
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
        {!!props.searchResults
          ? <div>
              {props.searchResults.map((result) => <MovieResult key={result.id} result={result} />)}
            </div>
          : <div>{'nothing to see'}</div>}
      </div>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchText: PropTypes.string,
  searchResults: PropTypes.array.isRequired,
};

export default Search;
