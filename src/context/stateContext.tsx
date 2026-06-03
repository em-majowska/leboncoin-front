import {
  createContext,
  useReducer,
  type ActionDispatch,
  type ReactNode,
} from "react";
import type { TProduct, TProducts } from "../types";
import { calculateTotal } from "../utils/calculateTotal";

type TState = {
  fav: TProducts | [];
  totalPrice: number;
};

type TAction = {
  type: "add_to_fav" | "remove_from_fav" | "calculate_total";
  payload: TProduct;
};

type TStateReducer = {
  state: TState;
  dispatch: ActionDispatch<[action: TAction]>;
};

const StateContext = createContext<TStateReducer | undefined>(undefined);

const favReducer = (state: TState, action: TAction): TState => {
  const { type, payload } = action;

  switch (type) {
    case "add_to_fav":
      return { ...state, fav: [...state.fav, payload] };
    case "remove_from_fav":
      return {
        ...state,
        fav: state.fav.filter((product) => product.id !== payload.id),
      };
    case "calculate_total":
      return { ...state, totalPrice: calculateTotal(state.fav) };
  }
};

const StateContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(favReducer, { fav: [], totalPrice: 0 });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateContextProvider };
