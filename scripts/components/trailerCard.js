import { trailers } from "../utils/domUtils.js";

export function setTrailerSources(shuffledMovies) {
    const trailerSources = shuffledMovies.map(movie => movie.Trailer_link);

    trailers.forEach((iframe, index) => {
        iframe.src = trailerSources[index];
    });
}