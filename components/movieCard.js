import oData from '../modules/Data.js';
import { cardContainer } from '../modules/domUtils.js';
import { toggleFavorite } from '../modules/utils.js';

export function renderMovies(movie) {
    const movieCard = Object.assign(document.createElement('a'), {
        className: 'movieCard',
        href: `movie.html?imdbID=${movie.imdbID}`,
        title: movie.Title,
        id: movie.imdbID,
        favorite: 'false',
    });

    const movieStar = Object.assign(document.createElement('img'), {
        className: 'movieStar',
        src: '/assets/icons/star.png',
    });

    const movieImage = document.createElement('img');
    movieImage.className = 'movieImage';
    
    if (movie.Poster && movie.Poster !== '') {
    movieImage.src = movie.Poster;
    } else {
    movieImage.src = 'assets/icons/missing-poster.svg';
    }

    const movieTitle = Object.assign(document.createElement('h3'), {
        className: 'movieTitle',
        textContent: movie.Title,
    });

    oData.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    const isFavorite = oData.favoriteMovies.some(fav => fav.imdbID === movie.imdbID);

    if (isFavorite) {
        Object.assign(movieCard, { 
            favorite: 'true' 
        });
        Object.assign(movieStar, {
            src: '/assets/icons/star_filled.png',
            style: 'background-color: rgba(229, 255, 0, 0.521);',
        });
    }

    movieCard.append(movieStar, movieImage, movieTitle);
    cardContainer.appendChild(movieCard);

    movieStar.addEventListener('click', event => {
        event.preventDefault();
        toggleFavorite(movie.imdbID, movie.Title, movie.Poster, movieStar);
    });
}
