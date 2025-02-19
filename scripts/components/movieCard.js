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

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);

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

    movieCard.addEventListener('click', (event) => {
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

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (!isFavorite) {
        star.src = '/assets/icons/star_filled.png';
        star.style.backgroundColor = 'rgba(229, 255, 0, 0.521)'; 
        card.setAttribute('favorite', 'true');

        if (!favorites.some(movie => movie.imdbID === imdbID)) {
            favorites.push({ imdbID, Title, Poster });
            console.log('Saving movie to favorites:', { imdbID, Title, Poster });
        }
    } else {
        star.src = '/assets/icons/star.png';
        star.style.backgroundColor = '';
        card.setAttribute('favorite', 'false');

        favorites = favorites.filter(movie => movie.imdbID !== imdbID);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));    
}
