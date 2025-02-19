import oData from './utils/data.js';

export async function fetchFavoriteMovies() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    oData.favoriteMovies = favorites;
    console.log(favorites);
    
}