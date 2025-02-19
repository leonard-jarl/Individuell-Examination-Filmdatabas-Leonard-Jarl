import oData from './utils/data.js';

export async function fetchFavoriteMovies() {
    const favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    oData.favoriteMovies = favorites;
}