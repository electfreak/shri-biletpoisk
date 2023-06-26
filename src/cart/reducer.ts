import { MovieData } from "@/types/api";
import { maxAmount } from "./cart";

export type CartAction = {
  type: "increase" | "decrease" | "remove";
  movie: MovieData;
};

export function cartReducer(cart: Map<string, number>, action: CartAction) {
  let newCart = new Map(cart);
  let amount = cart.get(action.movie.id);

  switch (action.type) {
    case "increase": {
      if (amount === undefined || amount <= 0) {
        newCart.set(action.movie.id, 1);
      } else if (amount < maxAmount) {
        newCart.set(action.movie.id, amount + 1);
      }

      return newCart;
    }

    case "decrease": {
      if (amount === undefined || amount <= 0) {
        newCart.delete(action.movie.id);
      } else {
        newCart.set(action.movie.id, amount - 1);
      }

      return newCart;
    }

    case "remove": {
      newCart.delete(action.movie.id);

      return newCart;
    }

    default: {
      return newCart;
    }
  }
}
