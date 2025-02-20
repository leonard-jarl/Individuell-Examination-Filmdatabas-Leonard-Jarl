import oData from '../modules/Data.js';

export async function fetchFavoriteMovies() {
    const favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    oData.favoriteMovies = favorites;
}