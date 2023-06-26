"use client";

import styles from "./movie.module.css";

import { GenreDict, MovieData } from "@/types/api";
import Image from "next/image";
import MovieCartControls from "../MovieCartControls/MovieCartControls";
import Link from "next/link";

export type ControlsConfig = {
  showControls: boolean;
  showRemove?: boolean;
};

export default function Movie({
  movie,
  controlsConfig,
}: {
  movie: MovieData;
  controlsConfig: ControlsConfig;
}) {
  return (
    <div className={styles.movie}>
      <Link href={`/film/${movie.id}`}>
        <div className={styles.movieCard}>
          <div className={styles.img}>
            <Image
              src={movie.posterUrl}
              alt={movie.title}
              width={100}
              height={120}
            />
          </div>

          <div>
            <h3 className={styles.header}>{movie.title}</h3>
            <span className={styles.genre}>{GenreDict[movie.genre]}</span>
          </div>
        </div>
      </Link>

      {controlsConfig.showControls && (
        <MovieCartControls
          movie={movie}
          isRemoveVisible={controlsConfig.showRemove ?? false}
        />
      )}
    </div>
  );
}
