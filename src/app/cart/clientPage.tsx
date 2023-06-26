"use client";
import styles from "./cart.module.css";

import { CartDataContext } from "@/cart/context";
import { useContext, useMemo } from "react";
import Movie from "../components/MovieItem/MovieItem";
import { MovieData } from "@/types/api";

export default function Page({ movies }: { movies: MovieData[] }) {
  const { cart, totalAmount } = useContext(CartDataContext);
  
  const movieById = useMemo(() => {
    const movieById = new Map<string, MovieData>();
    movies.forEach((m) => movieById.set(m.id, m));
    return movieById;
  }, [movies]);

  const moviesInCart = [...cart]
    .filter(([, amount]) => amount > 0)
    .map(([movie]) => movie);

  return (
    <div className={styles.cart}>
      {moviesInCart.length === 0 && (
        <div>
          <h1>Билетов нет :&#40;</h1>{" "}
          <p>Тыща дел, да и как же без нее девчонки с работы...</p>
        </div>
      )}

      <div>
        {moviesInCart.map((movieId) => {
          return (
            <Movie
              key={movieId}
              movie={movieById.get(movieId) as MovieData}
              controlsConfig={{ showControls: true, showRemove: true }}
            />
          );
        })}
      </div>

      {totalAmount > 0 && (
        <div className={styles.summary}>
          <span className={styles.amount}>Итого билетов:</span>
          <span className={styles.amount}>{totalAmount}</span>
        </div>
      )}
    </div>
  );
}
