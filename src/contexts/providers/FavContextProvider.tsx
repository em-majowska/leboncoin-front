import { useReducer, type ReactNode } from "react";
import { FavContext } from "../FavContext";
import type { TProduct, TProducts } from "../../types";

type TFavState = {
  fav: TProducts | [];
  totalPrice: number;
};

export type TFavAction = {
  type: "add_to_fav" | "remove_from_fav";
  payload: TProduct;
};
type TFavContextProvider = {
  children: ReactNode;
};

const favReducer = (state: TFavState, action: TFavAction): TFavState => {
  const { type, payload } = action;

  switch (type) {
    case "add_to_fav":
      return {
        ...state,
        fav: [...state.fav, payload],
        totalPrice: state.totalPrice + payload.price,
      };
    case "remove_from_fav":
      return {
        ...state,
        fav: state.fav.filter((product) => product.id !== payload.id),
        totalPrice: state.totalPrice - payload.price,
      };
  }
};

export const FavContextProvider = ({ children }: TFavContextProvider) => {
  const [favState, favDispatch] = useReducer(favReducer, {
    fav: [],
    totalPrice: 0,
  });

  return (
    <FavContext.Provider
      value={{
        fav: favState.fav,
        totalPrice: favState.totalPrice,
        favDispatch: favDispatch,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};
