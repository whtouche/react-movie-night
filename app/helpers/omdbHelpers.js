import axios from 'axios';

// export function getStarWarsInfo() {
//   return axios.get('http://www.omdbapi.com/?t=star+wars&y=&plot=full&r=json');
// }

export function getStarWarsInfo() {
  return {console.log('star wars info')};
  axios.get('http://www.omdbapi.com/?t=star+wars&y=&plot=full&r=json')
    .then((data) => {
      console.log('data');
    });
}
