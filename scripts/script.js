import oData from './utils/data.js';
import { fetchMovieDetails, fetchMovieSearch, fetchRecommendedMovies } from './modules/api.js';
import  { renderTrailers } from './modules/caroussel.js';
import { shuffleMovies } from './utils/utils.js';
import { renderRecommendations } from './components/movieCard.js';

async function init() {
    await fetchRecommendedMovies();
    shuffleMovies(oData.recommendedMovies);
    oData.shuffledMovies.forEach((movie, index) => {
        renderTrailers(movie, index + 1);
    });
    oData.recommendedMovies.forEach((movie, index) => {
        renderRecommendations(movie, index + 1);
    });
}

init();