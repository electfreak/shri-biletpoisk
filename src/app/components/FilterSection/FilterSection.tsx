"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./filter-section.module.css";
import Filter from "../Filter/Filter";

import {
  MovieData,
  MovieGenre,
  CinemaData,
  GenreDict,
  GenreDictReverse,
} from "@/types/api";

import { calcFilterMovies } from "./calcDisplayMovies";
import Select from "../Select/Select";

function FilmName({ setFilmName }: { setFilmName: (name: string) => void }) {
  return (
    <input
      placeholder="Введите название"
      type="text"
      onChange={(e) => setFilmName(e.target.value)}
    />
  );
}

function Genre({ setGenre }: { setGenre: (genre: MovieGenre | null) => void }) {
  return (
    <Select
      title="Выберите жанр"
      options={Object.values(GenreDict)}
      setOption={(ruGenre) =>
        ruGenre
          ? setGenre(GenreDictReverse[ruGenre] as MovieGenre)
          : setGenre(null)
      }
    />
  );
}

function Cinema({
  setCinema,
  cinemas,
}: {
  setCinema: (cinema: CinemaData | null) => void;
  cinemas: CinemaData[];
}) {
  return (
    <Select
      title="Выберите кинотеатр"
      options={cinemas.map((cinema) => cinema.name)}
      setOption={(cinemaName) =>
        cinemaName === null
          ? setCinema(null)
          : setCinema(cinemas.find((c) => c.name === cinemaName) as CinemaData)
      }
    />
  );
}

export default function FilterSection({
  movies,
  cinemas,
  setDisplayMovies,
}: {
  movies: MovieData[];
  cinemas: CinemaData[];
  setDisplayMovies: Dispatch<SetStateAction<MovieData[]>>;
}) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState<MovieGenre | null>(null);
  const [cinema, setCinema] = useState<CinemaData | null>(null);

  useEffect(() => {
    setDisplayMovies(calcFilterMovies(movies, name, genre, cinema));
  }, [name, genre, cinema, setDisplayMovies, movies]);

  return (
    <div>
      <h2 className={styles.header}>Фильтр поиска</h2>

      <Filter
        name="Название"
        filterForm={<FilmName setFilmName={(name) => setName(name)} />}
      />

      <Filter
        name="Жанр"
        filterForm={<Genre setGenre={(genre) => setGenre(genre)} />}
      />

      <Filter
        name="Кинотеатр"
        filterForm={
          <Cinema setCinema={(cinema) => setCinema(cinema)} cinemas={cinemas} />
        }
      />
    </div>
  );
}
