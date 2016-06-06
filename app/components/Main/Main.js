import React, {PropTypes} from 'react';

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
          ? <div>{puke(props.searchResults)}</div>
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
