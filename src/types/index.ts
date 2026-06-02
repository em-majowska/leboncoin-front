import type { Dispatch, SetStateAction } from "react";

export type TSetState<T> = Dispatch<SetStateAction<T>>;

export type TCategory = {
  id: number;
  image: string;
  title: string;
};
export type TCategories = TCategory[];

export type TProduct = {
  id: number;
  avatar: string;
  username: string;
  stars?: number;
  comments?: number;
  image: string;
  title: string;
  price: number;
  delivery?: boolean;
  place: string;
  date: string;
};

export type TProducts = TProduct[];

export type TProductsPayload = {
  [category: string]: TProducts;
};
