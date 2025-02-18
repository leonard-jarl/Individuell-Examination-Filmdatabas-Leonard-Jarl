export function renderRecommendations(movie, num) {
    const movieCard = document.createElement('article');
    movieCard.classList.add('movieCard');
    const star = document.createElement('img');
    star.classList.add('star');
    star.src = '/assets/icons/star.png'
    const movieImage = document.createElement('img');
    movieImage.classList.add('movieImage');

    if (movie.Poster > '') {
        movieImage.src = movie.Poster;
    } else { 
        movieImage.src = '/assets/icons/missing-poster.svg'
    }

    const movieTitle = document.createElement('h3')
    movieTitle.classList.add('movieTitle');
    movieTitle.textContent = movie.Title;
    document.querySelector(`.card-container`).appendChild(movieCard);
    movieCard.appendChild(star);
    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);
}