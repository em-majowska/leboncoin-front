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
import { useState } from "react";
import { calculateTotal } from "./utils/calculateTotal";
import FavModal from "./components/FavModal";
import cn from "./utils/cn";
import { useTheme } from "./utils/useTheme";

function App() {
  const categories: TCategories = data.categories;
  const products: TProductsPayload = data.products;

  const [fav, setFav] = useState<[] | TProducts>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { theme, setTheme } = useTheme();
  const totalPrice = calculateTotal(fav);

  const addToFav = (item: TProduct) => {
    setFav((prev) => [...prev, item]);
  };

  const removeFromFav = (item: TProduct) => {
    const copyArr = [...fav];
    const newArr = copyArr.filter(
      (product: TProduct) => product.id !== item.id,
    );
    setFav(newArr);
  };

  return (
    <>
      <Header
        fav={fav}
        setShowModal={setShowModal}
        setTheme={setTheme}
        theme={theme}
      />
      <main
        className={cn("min-h-screen py-4", {
          "bg-dark-blue text-white": theme === "black",
        })}
      >
        <Container>
          <div
            className={cn(
              "bg-light-orange mbe-8 flex w-full flex-col items-center justify-center gap-4 rounded-2xl py-6 md:flex-row",
              { "bg-dark-blue text-white": theme === "black" },
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
