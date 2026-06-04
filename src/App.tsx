import { MdOutlineAddBox } from "react-icons/md";
import Button from "./components/Button";
import Header from "./components/Header";
import Container from "./components/Container";
import Headline from "./components/Headline";
import data from "./assets/data.json";
import Categories from "./components/NavCategories";
import type { TCategories, TProductsPayload } from "./types";
import Footer from "./components/Footer";
import CategoryCarousel from "./components/CategoryCarousel";
import { useEffect, useState } from "react";
import FavModal from "./components/FavModal";
import cn from "./utils/cn";
import { useThemeContext } from "./contexts/hooks/useThemeContext";

function App() {
  const categories: TCategories = data.categories;
  const products: TProductsPayload = data.products;

  const [showModal, setShowModal] = useState<boolean>(false);
  const { theme } = useThemeContext();

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
      <Header setShowModal={setShowModal} />
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
          />
          <CategoryCarousel category={products.consols} label="Consoles" />
        </Container>
      </main>
      {showModal && <FavModal setShowModal={setShowModal} />}
      <Footer />
    </>
  );
}

export default App;
