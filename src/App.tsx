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
  TTheme,
} from "./types";
import Footer from "./components/Footer";
import CategoryCarousel from "./components/CategoryCarousel";
import { useCallback, useEffect, useMemo, useState } from "react";
import { calculateTotal } from "./utils/calculateTotal";
import FavModal from "./components/FavModal";
import cn from "./utils/cn";

function App() {
  const categories: TCategories = data.categories;
  const products: TProductsPayload = data.products;

  const [fav, setFav] = useState<[] | TProducts>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [theme, setTheme] = useState<TTheme>("white");

  const totalPrice = useMemo(() => calculateTotal(fav), [fav]);

  const addToFav = useCallback((item: TProduct) => {
    setFav((prev) => [...prev, item]);
  }, []);

  const removeFromFav = useCallback((item: TProduct) => {
    setFav((prev) => prev.filter((product) => product.id !== item.id));
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "black") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Header fav={fav} setShowModal={setShowModal} setTheme={setTheme} />
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
            addFav={addToFav}
            removeFav={removeFromFav}
          />
          <CategoryCarousel
            category={products.consols}
            label="Consoles"
            addFav={addToFav}
            removeFav={removeFromFav}
          />
        </Container>
        {showModal && (
          <FavModal fav={fav} setShowModal={setShowModal} total={totalPrice} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
