import oData from "./Data.js";

export function shuffleMovies(movies) {
    const trailers = movies.slice();
    for (let i = trailers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [trailers[i], trailers[j]] = [trailers[j], trailers[i]];
    }

    oData.trailers = trailers.slice(0, 5);
}

export function toggleFavorite(imdbID, Title, Poster, starElement) {
    let favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    const isFavorite = favoriteMovies.some(movie => movie.imdbID === imdbID);

    if (isFavorite) {
        favoriteMovies = favoriteMovies.filter(movie => movie.imdbID !== imdbID);
        starElement.src = '/assets/icons/star.png';
        starElement.style.backgroundColor = '';
    } else {
        favoriteMovies.push({ imdbID, Title, Poster });
        starElement.src = '/assets/icons/star_filled.png';
        starElement.style.backgroundColor = 'rgba(229, 255, 0, 0.521)';
    }

    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    oData.favoriteMovies = favoriteMovies;
}

export function getMovieIDFromURL() {
    return new URLSearchParams(window.location.search).get('imdbID');
}