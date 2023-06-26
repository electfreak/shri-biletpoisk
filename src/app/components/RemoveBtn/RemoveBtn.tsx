"use client";

import styles from "./removeBtn.module.css";

import { CartDispatchContext } from "@/cart/context";
import { MovieData } from "@/types/api";
import { useCallback, useContext } from "react";
import Modal from "../Modal/Modal";

export default function RemoveBtn({ movie }: { movie: MovieData }) {
  const { removeFromCart } = useContext(CartDispatchContext);

  const handleModalResult = useCallback(
    (result: boolean) => {
      if (result === true) {
        removeFromCart(movie);
      }
    },

    [movie, removeFromCart]
  );

  return (
    <Modal
      title="Удаление билета"
      text="Вы уверены, что хотите удалить билет?"
      resolveText="Да"
      rejectText="Нет"
      renderTriggerElement={(openModal) => (
        <button
          type="button"
          onClick={() => openModal(handleModalResult)}
          className={styles.removeBtn}
        />
      )}
    />
  );
}
