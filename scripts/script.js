import oData from './utils/data.js';
import { fetchMovieDetails, fetchMovieSearch, fetchRecommendedMovies } from './modules/api.js';
import { shuffleMovies } from './utils/utils.js';
import { setTrailerSources } from './components/trailerCard.js';

async function init() {
    await fetchRecommendedMovies();
    await fetchMovieSearch();
    // await fetchMovieDetails();

    shuffleMovies(oData.recommendedMovies);
    setTrailerSources(oData.shuffledMovies);
}

await init();