const searchInput = document.getElementById('searchInput');
const trailers = Array.from(document.querySelectorAll('.trailers__video'));
const trailersContainer = document.getElementById('trailersContainer');
const leftArrow = document.querySelector('.trailers__arrow--left');
const rightArrow = document.querySelector('.trailers__arrow--right');
const cardContainer = document.getElementById('cardContainer');

export { searchInput, cardContainer, trailers, trailersContainer, leftArrow, rightArrow };