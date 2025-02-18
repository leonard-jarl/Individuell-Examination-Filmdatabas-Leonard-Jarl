import { cardContainer } from '../utils/domUtils.js';

export function renderRecommendations(movie, num) {
    const movieCard = document.createElement('article');
    const movieStar = document.createElement('img');
    const movieImage = document.createElement('img');
    const movieTitle = document.createElement('h3');
    movieCard.classList.add('movieCard');
    movieCard.setAttribute('favorite', 'false')
    movieCard.setAttribute('id', `${movie.imdbID}`)
    movieCard.setAttribute('title', `${movie.Title}`)
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
    
    cardContainer.appendChild(movieCard);
    movieCard.appendChild(movieStar);
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);

    movieCard.addEventListener('click', (event) => {
        if (event.target.classList.contains('movieStar')) {
            toggleFavorite(event.target, movieCard);
        }
    });
}

function toggleFavorite(star, card) {
    const isFavorite = card.getAttribute('favorite') === 'true';
    if (!isFavorite) {
        star.src = '/assets/icons/star_filled.png';
        star.style.backgroundColor = 'rgba(229, 255, 0, 0.521)'; 
        card.setAttribute('favorite', 'true');
    } else {
        star.src = '/assets/icons/star.png';
        star.style.backgroundColor = '';
        card.setAttribute('favorite', 'false');
    }
}
