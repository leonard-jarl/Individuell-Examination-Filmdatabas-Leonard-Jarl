import oData from '../modules/Data.js';

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Could not fetch data from ${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Fetch error: ${error.message}`);
        return null;
    }
}

export async function fetchRecommendedMovies() {
    const data = await fetchData('https://santosnr6.github.io/Data/favoritemovies.json');
    if (data !== null && data !== undefined) {
        oData.recommendedMovies = data;
    }
}

export async function fetchMovieSearch(searchInput) {
    const data = await fetchData(`https://www.omdbapi.com/?apikey=2cb49faf&s=${searchInput}`);
    if (data !== null && data !== undefined) {
        oData.movieSearch = data.Search;
    }
}

export async function fetchMovieDetails(imdbID) {
    const data = await fetchData(`https://www.omdbapi.com/?i=${imdbID}&apikey=2cb49faf`);
    if (data !== null && data !== undefined) {
        oData.movieDetails = data;
    }
}