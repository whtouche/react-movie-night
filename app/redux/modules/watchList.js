const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';

export function addToWatchList(movie) {
  return {
    type: ADD_TO_WATCHLIST,
    movie,
  };
}

const initialState = {
  watchList: [
  ],
};

export default function watchList(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return Object.assign({}, state, {
        todos: [
          ...state.watchList,
          {
            movie: action.movie,
            seen: false,
          },
        ],
      });
    default: {
      return state;
    }
  }
}
