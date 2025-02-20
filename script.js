import oData from './modules/Data.js';
import { fetchMovieDetails, fetchMovieSearch, fetchRecommendedMovies } from './modules/api.js';
import { renderTrailers } from './components/carousel.js';
import { shuffleMovies, getMovieIDFromURL } from './modules/utils.js';
import { renderMovies } from './components/movieCard.js';
import { fetchFavoriteMovies } from './modules/favorites.js';
import { displayMovieDetails } from './components/movieDetails.js';

oData.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    console.log('index.html');

    await fetchRecommendedMovies();
    shuffleMovies(oData.recommendedMovies);

    oData.trailers.forEach((movie, index) => {
        renderTrailers(movie, index + 1);
    });
    oData.recommendedMovies.forEach((movie) => {
        renderMovies(movie);
    });

} else if (window.location.pathname.includes('favorites.html')) {
    console.log('favorites.html');

    document.addEventListener('DOMContentLoaded', async () => {
        await fetchFavoriteMovies();

        oData.favoriteMovies.forEach((movie) => {
            renderMovies(movie);
        });
    });

} else if (window.location.pathname.includes('movie.html')) {
    console.log('movie.html');

    document.addEventListener('DOMContentLoaded', async () => {
        const imdbID = getMovieIDFromURL();
        if (imdbID) {
            await fetchMovieDetails(imdbID);
            displayMovieDetails(oData.movieDetails);
        }
    });

} else if (window.location.pathname.includes('search.html')) {
    console.log('search.html');
}