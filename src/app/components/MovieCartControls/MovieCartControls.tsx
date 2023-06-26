"use client"

import styles from "./movieCartControls.module.css"

import { MovieData } from "@/types/api";
import RemoveBtn from "../RemoveBtn/RemoveBtn";
import { useContext } from "react";
import { CartDataContext, CartDispatchContext } from "@/cart/context";
import { maxAmount } from "@/cart/cart";

export default function MovieCartControls({
  movie,
  isRemoveVisible,
}: {
  movie: MovieData;
  isRemoveVisible: boolean;
}) {
  const { getMovieAmount } = useContext(CartDataContext);
  const { decreaseInCart, addToCart } = useContext(CartDispatchContext);
  const amount = getMovieAmount(movie);

  return (
    <div className={styles.cartControls}>
      <div className={styles.amount}>
        <button
          disabled={amount === 0}
          type="button"
          onClick={() => decreaseInCart(movie)}
          className={styles.minus}
        />

        {amount}

        <button
          disabled={amount === maxAmount}
          type="button"
          onClick={() => addToCart(movie)}
          className={styles.plus}
        />
      </div>

      {isRemoveVisible && <RemoveBtn movie={movie} />}
    </div>
  );
}
