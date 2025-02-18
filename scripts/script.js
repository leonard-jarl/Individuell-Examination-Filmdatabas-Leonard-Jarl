import oData from './utils/data.js';
import { fetchMovieDetails, fetchMovieSearch, fetchRecommendedMovies } from './modules/api.js';
import  { renderTrailers } from './modules/caroussel.js';
import { shuffleMovies } from './utils/utils.js';

async function init() {
    await fetchRecommendedMovies();
    shuffleMovies(oData.recommendedMovies);
    oData.shuffledMovies.forEach((movie, index) => {
        renderTrailers(movie, index + 1);
    });
}

init();