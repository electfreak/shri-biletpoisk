"use client";

import { createContext, useCallback, useReducer } from "react";
import { cartReducer } from "./reducer";
import { MovieData } from "@/types/api";

export type dispatchContextValue = {
  addToCart: (m: MovieData) => void;
  decreaseInCart: (m: MovieData) => void;
  removeFromCart: (m: MovieData) => void;
};

export type CartContextValue = {
  cart: Map<string, number>;
  totalAmount: number;
  getMovieAmount: (movie: MovieData) => number;
};

export const CartDataContext = createContext<CartContextValue>({
  cart: new Map<string, number>(),
  totalAmount: 0,
  getMovieAmount: () => 0,
});

export const CartDispatchContext = createContext<dispatchContextValue>({
  addToCart: () => {},
  decreaseInCart: () => {},
  removeFromCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    new Map<string, number>()
  );

  const totalAmount = [...cart.values()].reduce((acc, value) => acc + value, 0);

  const addToCart = useCallback((movie: MovieData) => {
    dispatch({
      type: "increase",
      movie,
    });
  }, []);

  const decreaseInCart = useCallback((movie: MovieData) => {
    dispatch({
      type: "decrease",
      movie,
    });
  }, []);

  const removeFromCart = useCallback((movie: MovieData) => {
    dispatch({
      type: "remove",
      movie,
    });
  }, []);

  const getMovieAmount = useCallback(
    (movie: MovieData) => {
      return cart.get(movie.id) ?? 0;
    },
    [cart]
  );

  return (
    <CartDataContext.Provider value={{ cart, totalAmount, getMovieAmount }}>
      <CartDispatchContext.Provider
        value={{ addToCart, decreaseInCart, removeFromCart }}
      >
        {children}
      </CartDispatchContext.Provider>
    </CartDataContext.Provider>
  );
}
