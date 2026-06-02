import type { TProduct, TProductsPayload } from "../types";
import Headline from "./Headline";
import ProductTile from "./ProductTile";

type TProductsSectionsProps = { products: TProductsPayload };

const ProductsSections = ({ products }: TProductsSectionsProps) => {
  return Object.entries(products).map(([category, products], index) => {
    return (
      <section className="mb-8" key={index}>
        <Headline
          level={3}
          label={category === "consols" ? "Consoles" : "Tablettes & liseuses"}
        />
        <div className="flex max-w-full scrollbar-none gap-4 overflow-x-scroll">
          {products.map((prod: TProduct) => {
            return <ProductTile product={prod} key={prod.id} />;
          })}
        </div>
      </section>
    );
  });
};

export default ProductsSections;
