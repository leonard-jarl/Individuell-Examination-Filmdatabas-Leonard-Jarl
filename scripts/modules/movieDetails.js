import oData from '../utils/data.js';

import {
    movieTitle,
    moviePoster,
    movieAge,
    movieGenre,
    movieRuntime,
    movieReleaseDate,
    movieRating,
    moviePlot,
    movieDirector,
    movieWriter,
    movieActors,
    movieStar
} from '../utils/domUtils.js';

export function getMovieIDFromURL() {
    return new URLSearchParams(window.location.search).get('imdbID');
}

export function displayMovieDetails(movie) {
    movieTitle.textContent = movie.Title;
    if (movie.Poster > '') {
        moviePoster.src = movie.Poster
    } else {
        moviePoster = '/assets/icons/missing-poster.svg';
    }
    moviePoster.src = movie.Poster !== 'N/A' ? movie.Poster : '/assets/icons/missing-poster.svg';
    movieAge.textContent = `Rated: ${movie.Rated}`;
    movieGenre.textContent = `Genre: ${movie.Genre}`;
    movieRuntime.textContent = `Runtime: ${movie.Runtime}`;
    movieReleaseDate.textContent = `Release Date: ${movie.Released}`;
    movieRating.textContent = `Rating: ${movie.imdbRating}`;
    moviePlot.textContent = movie.Plot;
    movieDirector.textContent = `Director: ${movie.Director}`;
    movieWriter.textContent = `Writer: ${movie.Writer}`;
    movieActors.textContent = `Actors: ${movie.Actors}`;
    if (oData.favoriteMovies.some(favMovie => favMovie.imdbID === movie.imdbID)) {
        movieStar.src = '/assets/icons/star_filled.png';
    }
}