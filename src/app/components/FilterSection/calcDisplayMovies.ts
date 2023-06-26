import { CinemaData, GenreDict, MovieData, MovieGenre } from "@/types/api";

const finetize = (str: string) =>
  str
    .split(/\s|\t|\n/)
    .map((w) => w.trim())
    .filter((w) => w !== "")
    .join(" ");

const titleMatch = (pattern: string, name: string) =>
  finetize(name).toLowerCase().includes(finetize(pattern).toLowerCase());

export function calcFilterMovies(
  movies: MovieData[],
  name: string,
  genre: MovieGenre | null,
  cinema: CinemaData | null
) {
  let result = movies.filter(
    (movie) =>
      titleMatch(name, movie.title) ||
      titleMatch(name, movie.genre) ||
      titleMatch(name, GenreDict[movie.genre])
  );

  if (genre !== null) {
    result = result.filter((movie) => movie.genre === genre);
  }

  if (cinema !== null) {
    result = result.filter((movie) => cinema.movieIds.includes(movie.id));
  }

  return result;
}
