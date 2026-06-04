import { createContext, type ActionDispatch } from "react";
import type { TProduct, TProducts } from "../types";

export type TFavState = {
  fav: TProducts | [];
  totalPrice: number;
};

export type TFavAction = {
  type: "add_to_fav" | "remove_from_fav";
  payload: TProduct;
};

export type TFavReducer = {
  favState: TFavState;
  favDispatch: ActionDispatch<[action: TFavAction]>;
};

export const FavContext = createContext<TFavReducer>({
  favState: { fav: [], totalPrice: 0 },
  favDispatch: () => {},
});
