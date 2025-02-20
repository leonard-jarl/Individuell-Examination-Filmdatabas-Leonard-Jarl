import oData from '../modules/Data.js';
import { cardContainer } from '../modules/domUtils.js';
import { toggleFavorite } from '../modules/utils.js';

const missingPosterSrc = '../assets/icons/missing-poster.svg';
const starEmptySrc = '/assets/icons/star.png';
const starFilledSrc = '/assets/icons/star_filled.png';
const starBgColor = 'rgba(229, 255, 0, 0.521)';

export function renderMovies(movie) {
    const movieCard = document.createElement('a');
    movieCard.className = 'movieCard';
    movieCard.href = `movie.html?imdbID=${movie.imdbID}`;
    movieCard.title = movie.Title;
    movieCard.id = movie.imdbID;
    movieCard.favorite = 'false';

    const movieStar = document.createElement('img');
    movieStar.className = 'movieStar';
    movieStar.src = starEmptySrc;
    movieStar.alt = 'star icon'

    const movieImage = document.createElement('img');
    movieImage.className = 'movieImage';
    movieImage.src = movie.Poster || missingPosterSrc;
    movieImage.alt = 'movie poster'
    movieImage.onerror = () => (movieImage.src = missingPosterSrc);

    const movieTitle = document.createElement('h3');
    movieTitle.className = 'movieTitle';
    movieTitle.textContent = movie.Title;

    oData.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    const isFavorite = oData.favoriteMovies.some(fav => fav.imdbID === movie.imdbID);

    if (isFavorite) {
        movieCard.favorite = 'true';
        movieStar.src = starFilledSrc;
        movieStar.style.backgroundColor = starBgColor;
    }

    movieCard.append(movieStar, movieImage, movieTitle);
    cardContainer.appendChild(movieCard);

    movieStar.addEventListener('click', event => {
        event.preventDefault();
        toggleFavorite(movie.imdbID, movie.Title, movie.Poster, movieStar);
    });
}