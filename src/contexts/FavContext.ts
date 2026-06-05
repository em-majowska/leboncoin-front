import { createContext, type Dispatch } from "react";
import type { TProducts } from "../types";
import type { TFavAction } from "./providers/FavContextProvider";

export type TFavReducer = {
  fav: TProducts;
  totalPrice: number;
  favDispatch: Dispatch<TFavAction>;
};

export const FavContext = createContext<TFavReducer>({
  fav: [],
  totalPrice: 0,
  favDispatch: () => {},
});
