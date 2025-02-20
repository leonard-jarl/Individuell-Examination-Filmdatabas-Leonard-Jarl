import oData from '../modules/Data.js';
import { toggleFavorite } from '../modules/utils.js';
import {
    movieTitle, moviePoster, movieAge, movieGenre, movieRuntime,
    movieReleaseDate, movieRating, moviePlot, movieDirector,
    movieWriter, movieActors, movieStar
} from '../utils/domUtils.js';

export function displayMovieDetails(movie) {
    moviePoster.src = movie.Poster !== 'N/A' ? movie.Poster : '/assets/icons/missing-poster.svg';

    const details = [
        [movieTitle, movie.Title],
        [movieAge, `Rated: ${movie.Rated}`],
        [movieGenre, `Genre: ${movie.Genre}`],
        [movieRuntime, `Runtime: ${movie.Runtime}`],
        [movieReleaseDate, `Release Date: ${movie.Released}`],
        [movieRating, `Rating: ${movie.imdbRating}`],
        [moviePlot, movie.Plot],
        [movieDirector, `Director: ${movie.Director}`],
        [movieWriter, `Writer: ${movie.Writer}`],
        [movieActors, `Actors: ${movie.Actors}`]
    ];

    details.forEach(([element, text]) => element.textContent = text);

    const isFavorite = oData.favoriteMovies.some(fav => fav.imdbID === movie.imdbID);
    if (isFavorite) {
        movieStar.src = '/assets/icons/star_filled.png';
        movieStar.style.backgroundColor = 'rgba(229, 255, 0, 0.521)';
    }

    movieStar.addEventListener('click', () => {
        toggleFavorite(movie.imdbID, movie.Title, movie.Poster, movieStar);
    });
}