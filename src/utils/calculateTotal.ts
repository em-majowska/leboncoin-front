import type { TProducts } from "../types";

export const calculateTotal = (list: TProducts) => {
  return list.reduce((prev, curr) => prev + curr.price, 0);
};
