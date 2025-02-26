const searchInput = document.getElementById('searchInput');
const trailers = Array.from(document.querySelectorAll('.trailers__video'));
const trailersContainer = document.getElementById('trailersContainer');
const leftArrow = document.querySelector('.trailers__arrow--left');
const rightArrow = document.querySelector('.trailers__arrow--right');
const cardContainer = document.getElementById('cardContainer');
const movieCard = document.getElementById('movieCard');
const movieTitle = document.getElementById('movieTitle');
const moviePoster = document.getElementById('moviePoster');
const movieAge = document.getElementById('movieAge');
const movieGenre = document.getElementById('movieGenre');
const movieRuntime = document.getElementById('movieRuntime');
const movieReleaseDate = document.getElementById('movieReleaseDate');
const movieRating = document.getElementById('movieRating');
const moviePlot = document.getElementById('moviePlot');
const movieDirector = document.getElementById('movieDirector');
const movieWriter = document.getElementById('movieWriter');
const movieActors = document.getElementById('movieActors');
const movieStar = document.getElementById('movieStar');

export {
    searchInput, cardContainer, trailers, trailersContainer, leftArrow, rightArrow, movieCard, movieTitle, moviePoster,
    movieAge, movieGenre, movieRuntime, movieReleaseDate, movieRating, moviePlot, movieDirector, movieWriter, movieActors, movieStar,
};