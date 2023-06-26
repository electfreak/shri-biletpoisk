import { asReverseDictionary } from "./common";

export type CinemaData = {
  id: string;
  name: string;
  movieIds: string[];
};

export enum MovieGenre {
  Fantasy = "fantasy",
  Horror = "horror",
  Action = "action",
  Comedy = "comedy",
}

export type MovieData = {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: MovieGenre;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
};

export type ReviewData = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

export type Review = {
  id: string;
  name: string;
  text: string;
  raiting: number;
};

export const GenreDict = {
  fantasy: "Фэнтези",
  horror: "Ужасы",
  action: "Боевик",
  comedy: "Комедия",
} as const;

export const GenreDictReverse = asReverseDictionary(GenreDict);

export type NullableMovieGenre = MovieGenre | null;
export type NullableCinema = CinemaData | null;
