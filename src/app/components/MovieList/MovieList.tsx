"use client";

import { MovieData } from "@/types/api";
import styles from "./movies.module.css";
import MovieItem from "../MovieItem/MovieItem";

export default function Movies({ movies }: { movies: MovieData[] }) {
  return (
    <section className={styles.movies}>
      {movies.map((movie) => (
        <MovieItem controlsConfig={{showControls: true}} key={movie.id} movie={movie} />
      ))}
    </section>
  );
}
