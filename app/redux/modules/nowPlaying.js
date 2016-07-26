const FETCHING_NOW_PLAYING = 'FETCHING_NOW_PLAYING';
const FETCHING_NOW_PLAYING_ERROR = 'FETCHING_NOW_PLAYING_ERROR';
const FETCHING_NOW_PLAYING_SUCCESS = 'FETCHING_NOW_PLAYING_SUCCESS';

export function fetchingNowPlaying() {
  return {
    type: FETCHING_NOW_PLAYING,
  };
}

export function fetchingNowPlayingError(error) {
  return {
    type: FETCHING_NOW_PLAYING_ERROR,
    error,
  };
}

export function fetchingNowPlayingSuccess(movies) {
  return {
    type: FETCHING_NOW_PLAYING_ERROR,
    movies,
  };
}

const initialState = {
  isFetching: false,
  error: '',
};

export default function nowPlaying(state = initialState, action) {
  switch (action.type) {
    case FETCHING_NOW_PLAYING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_NOW_PLAYING_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case FETCHING_NOW_PLAYING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        nowPlaying: action.movies,
      };
    default:
      return state;
  }
}
