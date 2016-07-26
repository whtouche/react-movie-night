const FETCHING_UPCOMING = 'FETCHING_UPCOMING';
const FETCHING_UPCOMING_ERROR = 'FETCHING_UPCOMING_ERROR';
const FETCHING_UPCOMING_SUCCESS = 'FETCHING_UPCOMING_SUCCESS';

export function fetchingUpcoming() {
  return {
    type: FETCHING_UPCOMING,
  };
}

export function fetchingUpcomingError(error) {
  return {
    type: FETCHING_UPCOMING_ERROR,
    error,
  };
}

export function fetchingUpcomingSuccess(movies) {
  return {
    type: FETCHING_UPCOMING_ERROR,
    movies,
  };
}

const initialState = {
  isFetching: false,
  error: '',
};

export default function upcoming(state = initialState, action) {
  switch (action.type) {
    case FETCHING_UPCOMING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_UPCOMING_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case FETCHING_UPCOMING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        upcoming: action.movies,
      };
    default:
      return state;
  }
}
