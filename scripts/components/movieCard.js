import oData from '../utils/data.js';
import { cardContainer } from '../utils/domUtils.js';

export function renderMovies(movie) {
    const movieCard = document.createElement('a');
    movieCard.classList.add('movieCard');
    movieCard.setAttribute('favorite', 'false')
    movieCard.setAttribute('id', movie.imdbID)
    movieCard.setAttribute('title', movie.Title);
    movieCard.href = `movie.html?imdbID=${movie.imdbID}`;

    const movieStar = document.createElement('img');
    const movieImage = document.createElement('img');
    const movieTitle = document.createElement('h3');

    movieStar.classList.add('movieStar');
    movieStar.src = '/assets/icons/star.png';

    movieImage.classList.add('movieImage');
    if (movie.Poster > '') {
        movieImage.src = movie.Poster;
    } else {
        movieImage.src = '/assets/icons/missing-poster.svg';
    }

    movieTitle.classList.add('movieTitle');
    movieTitle.textContent = movie.Title;

    oData.favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    const isFavorite = oData.favoriteMovies.some(fav => fav.imdbID === movie.imdbID);

    if (isFavorite) {
        movieCard.setAttribute('favorite', 'true');
        movieStar.src = '/assets/icons/star_filled.png';
        movieStar.style.backgroundColor = 'rgba(229, 255, 0, 0.521)';
    } else {
        movieCard.setAttribute('favorite', 'false');
        movieStar.src = '/assets/icons/star.png';
    }

    cardContainer.appendChild(movieCard);
    movieCard.appendChild(movieStar);
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);

    movieStar.addEventListener('click', (event) => {
        if (event.target.classList.contains('movieStar')) {
            event.preventDefault();
            toggleFavorite(event.target, movieCard);
        }
    });
}

function toggleFavorite(star, card) {
    const isFavorite = card.getAttribute('favorite') === 'true';
    const imdbID = card.getAttribute('id');
    const Title = card.getAttribute('title');
    const Poster = card.querySelector('.movieImage').src;

    let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

    if (!isFavorite) {
        star.src = '/assets/icons/star_filled.png';
        star.style.backgroundColor = 'rgba(229, 255, 0, 0.521)';
        card.setAttribute('favorite', 'true');

        if (!favoriteMovies.some(movie => movie.imdbID === imdbID)) {
            favoriteMovies.push({ imdbID, Title, Poster });
        }
    } else {
        star.src = '/assets/icons/star.png';
        star.style.backgroundColor = '';
        card.setAttribute('favorite', 'false');

        favoriteMovies = favoriteMovies.filter(movie => movie.imdbID !== imdbID);
    }

    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    oData.favoriteMovies = favoriteMovies;
}
