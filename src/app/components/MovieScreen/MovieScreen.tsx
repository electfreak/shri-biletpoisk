import styles from "./movieScreen.module.css";

import { GenreDict, MovieData, ReviewData } from "@/types/api";
import Image from "next/image";
import MovieCartControls from "../MovieCartControls/MovieCartControls";

export default function MoviePage({
  movie,
  reviews,
}: {
  movie: MovieData;
  reviews: ReviewData[];
}) {
  return (
    <div className={styles.moviePage}>
      <div className={styles.movieCard}>
        <div className={styles.movieImg}>
          <Image
            src={movie.posterUrl}
            width={400}
            height={500}
            alt={movie.title}
          />
        </div>

        <div className={styles.movieData}>
          <div className={styles.movieDataHead}>
            <h1 className={styles.title}>{movie.title}</h1>
            <MovieCartControls movie={movie} isRemoveVisible={false} />
          </div>

          <div className={styles.dataKeywords}>
            <div className={styles.dataKeyword}>
              <span className={styles.keyword}>Жанр:</span>&nbsp;
              {GenreDict[movie.genre]}
            </div>

            <div className={styles.dataKeyword}>
              <span className={styles.keyword}>Год выпуска:</span>&nbsp;
              {movie.releaseYear}
            </div>

            <div className={styles.dataKeyword}>
              <span className={styles.keyword}>Рейтинг:</span>&nbsp;
              {movie.rating}
            </div>

            <div className={styles.dataKeyword}>
              <span className={styles.keyword}>Режисеер:</span>&nbsp;
              {movie.director}
            </div>
          </div>

          <div className={styles.description}>
            <h2 className={styles.keyword}>Описание</h2>
            <p>{movie.description}</p>
          </div>
        </div>
      </div>

      {reviews.map((review) => {
        return (
          <div key={review.id} className={styles.review}>
            <Image
              src="/avatar.svg"
              width={100}
              height={100}
              alt={review.name}
            />

            <div className={styles.reviewData}>
              <div className={styles.reviewHead}>
                <h3 className={styles.name}>{review.name}</h3>
                <span className={styles.mark}>
                  Оценка:&nbsp;
                  <span className={styles.keyword}>{review.rating}</span>
                </span>
              </div>

              {review.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
