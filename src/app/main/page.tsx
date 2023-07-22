"use client";

import Sidebar from "../components/Sidebar/Sidebar";
import FilterSection from "../components/FilterSection/FilterSection";

import styles from "./main.module.css";

import { useContext, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { AppDataContext } from "@/appData/context";

export default function Page() {
  const { cinemas, movies } = useContext(AppDataContext);
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
