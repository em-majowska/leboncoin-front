import { MdOutlineAddBox } from "react-icons/md";
import Button from "./components/Button";
import Header from "./components/Header";
import Container from "./components/Container";
import Headline from "./components/Headline";
import data from "./assets/data.json";
import Categories from "./components/Categories";
import type { TCategories, TProductsPayload } from "./types";
import ProductsSections from "./components/ProductsSections";
import { FaStar } from "react-icons/fa";

function App() {
  const categories: TCategories = data.categories;
  const products: TProductsPayload = data.products;

  return (
    <>
      <Header />
      <main>
        <Container className="min-h-screen py-4">
          <div className="mbe-8 flex w-full flex-col items-center justify-center gap-4 rounded-2xl bg-orange-100 py-6 md:flex-row">
            <p className="text-xl font-bold">C'est le moment de vendre</p>
            <Button type="primary" onClick={() => {}}>
              <MdOutlineAddBox />
              Déposer une annonce
            </Button>
          </div>
          <Categories categories={categories} />
          <Headline label="En ce moment sur leboncoin" type="md" />
          <ProductsSections products={products} />
        </Container>
      </main>
      <footer className="mt-8 h-20 bg-sky-950">
        <Container className="flex h-full items-center justify-between">
          <p className="text-white">leboncoin 2006 - 2026</p>
          <p className="hidden text-white md:block">
            Made by Ewa Majowska at{" "}
            <a href="https://www.lereacteur.io/">Le Reacteur</a>
          </p>
          <div className="flex">
            <span className="flex items-center gap-2 bg-green-500 p-1 px-2 text-sm font-bold text-white">
              <FaStar color="white" /> Trustpilot
            </span>
            <span className="bg-white p-1 px-2 text-sm text-mist-500">
              142.7k avis
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default App;
