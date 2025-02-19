import oData from '../utils/data.js';

export async function fetchRecommendedMovies() {
    const response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
    let recommendedMovies = await response.json();
    oData.recommendedMovies = recommendedMovies;
}

export async function fetchMovieSearch(searchInput) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=2cb49faf&s=${searchInput}`);
    let movieSearch = await response.json();
    oData.movieSearch = movieSearch.Search;
}

export async function fetchMovieDetails(imdbID) {
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=2cb49faf`);
    let movieDetails = await response.json();
    oData.movieDetails = movieDetails;
}