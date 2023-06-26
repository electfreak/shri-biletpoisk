"use client";

import Sidebar from "../components/Sidebar/Sidebar";
import FilterSection from "../components/FilterSection/FilterSection";

import styles from "./main.module.css";

import { useState } from "react";
import { MovieData, CinemaData } from "@/types/api";
import MovieList from "../components/MovieList/MovieList";

export default function Page({
  movies,
  cinemas,
}: {
  movies: MovieData[];
  cinemas: CinemaData[];
}) {
  const [displayMovies, setDisplayMovies] = useState(movies);

  return (
    <main className={styles.main}>
      <Sidebar>
        <FilterSection
          cinemas={cinemas}
          movies={movies}
          setDisplayMovies={setDisplayMovies}
        />
      </Sidebar>

      <MovieList movies={displayMovies} />
    </main>
  );
}
