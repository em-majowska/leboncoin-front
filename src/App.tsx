import { MdOutlineAddBox } from "react-icons/md";
import Button from "./components/Button";
import Header from "./components/Header";
import Container from "./components/Container";
import Headline from "./components/Headline";
import data from "./assets/data.json";
import Categories from "./components/NavCategories";
import type {
  TCategories,
  TProduct,
  TProducts,
  TProductsPayload,
} from "./types";
import Footer from "./components/Footer";
import CategoryCarousel from "./components/CategoryCarousel";
import { useContext, useEffect, useReducer, useState } from "react";
import FavModal from "./components/FavModal";
import cn from "./utils/cn";
import { ThemeContext } from "./context/themeContext";

type TFavState = {
  fav: TProducts | [];
  totalPrice: number;
};

export type TFavAction =
  | { type: "add_to_fav"; payload: TProduct }
  | { type: "remove_from_fav"; payload: TProduct };

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

function App() {
  const categories: TCategories = data.categories;
  const products: TProductsPayload = data.products;

  const [favState, favDispatch] = useReducer(favReducer, {
    fav: [],
    totalPrice: 0,
  });
  const { fav, totalPrice } = favState;

  const [showModal, setShowModal] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Header favNum={fav.length} setShowModal={setShowModal} />
      <main
        className={cn("dark:bg-dark-blue min-h-screen py-4 dark:text-white")}
      >
        <Container>
          <div
            className={cn(
              "bg-light-orange dark:bg-dark-blue mbe-8 flex w-full flex-col items-center justify-center gap-4 rounded-2xl py-6 md:flex-row dark:text-white",
            )}
          >
            <p className="text-xl font-bold">C'est le moment de vendre</p>
            <Button type="primary" onClick={() => {}}>
              <MdOutlineAddBox />
              Déposer une annonce
            </Button>
          </div>
          <Categories categories={categories} />
          <Headline label="En ce moment sur leboncoin" level={2} />

          <CategoryCarousel
            category={products.tablets}
            label="Tablettes & liseuses"
            favDispatch={favDispatch}
          />
          <CategoryCarousel
            category={products.consols}
            label="Consoles"
            favDispatch={favDispatch}
          />
        </Container>
      </main>
      {showModal && (
        <FavModal fav={fav} setShowModal={setShowModal} total={totalPrice} />
      )}
      <Footer />
    </>
  );
}

export default App;
