import { useReducer, type ReactNode } from "react";
import type { TFavAction, TFavState } from "../FavContext";
import { FavContext } from "../FavContext";

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
    <FavContext.Provider value={{ favState, favDispatch }}>
      {children}
    </FavContext.Provider>
  );
};
