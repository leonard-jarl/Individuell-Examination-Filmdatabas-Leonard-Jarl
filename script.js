import oData from './modules/Data.js';
import { fetchMovieDetails, fetchMovieSearch, fetchRecommendedMovies } from './modules/api.js';
import { renderTrailers } from './components/carousel.js';
import { shuffleMovies, getImdbID, getSearchQuery } from './modules/utils.js';
import { renderMovies } from './components/movieCard.js';
import { fetchFavoriteMovies } from './modules/localStorage.js';
import { displayMovieDetails } from './components/movieDetails.js';
import { searchInput } from './modules/domUtils.js';

oData.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

document.getElementById('searchForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchQuery = searchInput.value.trim();

    if (searchQuery) {
        window.location.href = `search.html?search=${encodeURIComponent(searchQuery)}`;
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    const pathname = window.location.pathname;

    if (pathname.includes('index.html') || pathname === '/') {
        await fetchRecommendedMovies();
        shuffleMovies(oData.recommendedMovies);
        oData.trailers.forEach((movie, index) => renderTrailers(movie, index + 1));
        oData.recommendedMovies.forEach(renderMovies);

    } else if (pathname.includes('favorites.html')) {
        await fetchFavoriteMovies();
        oData.favoriteMovies.forEach(renderMovies);

    } else if (pathname.includes('movie.html')) {
        const imdbID = getImdbID();
        if (imdbID) {
            await fetchMovieDetails(imdbID);
            displayMovieDetails(oData.movieDetails);
        }

    } else if (pathname.includes('search.html')) {
        const search = getSearchQuery();
        if (search) {
            await fetchMovieSearch(search);
            oData.movieSearch.forEach(renderMovies);
        }
    }
});