import type { TProducts } from "../types";

export const calculateTotal = (list: TProducts): number => {
  return list.reduce((prev, curr) => prev + curr.price, 0);
};
