import oData from './Data.js';

export async function fetchFavoriteMovies() {
    const favorites = JSON.parse(sessionStorage.getItem('favoriteMovies')) || [];
    oData.favoriteMovies = favorites;
}