import API_SUFFIX from '../../api';
import fetchJsonp from 'fetch-jsonp';

const baseUrl = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/';

export default function getMovies(when) {
  return fetchJsonp(`${baseUrl}${when}${API_SUFFIX}`);
}


// /api/public/v1.0/lists/movies/upcoming.json
// /api/public/v1.0/lists/movies/in_theaters.json
