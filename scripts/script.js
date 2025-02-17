if(window.location.pathname === '/' || window.location.pathname === '/html/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/html/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/html/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/html/search.html') {
    console.log('search.html');
}

import { fetchMovieDetails, fetchMovieSearch, fetchRecommendedMovies } from './modules/api.js';
import oData from './utils/data.js';

await fetchRecommendedMovies();
await fetchMovieSearch();
await fetchMovieDetails();
console.log(oData.recommendedMovies);
console.log(oData.movieSearch);
console.log(oData.movieDetails);