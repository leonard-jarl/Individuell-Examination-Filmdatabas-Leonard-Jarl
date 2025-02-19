import oData from './utils/data.js';
import { fetchMovieDetails, fetchMovieSearch, fetchRecommendedMovies } from './modules/api.js';
import { renderTrailers } from './modules/caroussel.js';
import { shuffleMovies } from './utils/utils.js';
import { renderMovies } from './components/movieCard.js';
import { fetchFavoriteMovies } from './favorites.js';

if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    console.log('index.html');

    await fetchRecommendedMovies();
    shuffleMovies(oData.recommendedMovies);
    
    oData.shuffledMovies.forEach((movie, index) => {
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
} else if (window.location.pathname.includes('search.html')) {
    console.log('search.html');
}