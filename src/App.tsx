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

function App() {
  const categories: TCategories = data.categories;
  const products: TProductsPayload = data.products;

  return (
    <>
      <Header />
      <main>
        <Container className="min-h-screen py-4">
          <div className="bg-light-orange mbe-8 flex w-full flex-col items-center justify-center gap-4 rounded-2xl py-6 md:flex-row">
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
      <Footer />
    </>
  );
}

export default App;
