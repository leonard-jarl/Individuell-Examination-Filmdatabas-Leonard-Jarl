import oData from "./data.js";

export function shuffleMovies(movies) {
    const shuffledMovies = movies.slice();
    for (let i = shuffledMovies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledMovies[i], shuffledMovies[j]] = [shuffledMovies[j], shuffledMovies[i]];
    }

    oData.shuffledMovies = shuffledMovies.slice(0, 5);
}