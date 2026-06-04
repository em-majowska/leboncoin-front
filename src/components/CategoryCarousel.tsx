import { useRef, type Dispatch } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import type { TProduct, TProducts } from "../types";
import ProductTile from "./ProductTile";
import Headline from "./Headline";
import type { TFavAction } from "../App";

type TCategoryCarouselProps = {
  category: TProducts;
  label: string;
  favDispatch: Dispatch<TFavAction>;
};

const CategoryCarousel = ({
  category,
  label,
  favDispatch,
}: TCategoryCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mb-8">
      <Headline level={3} label={label} />
      <div
        ref={carouselRef}
        className="flex max-w-full scrollbar-none content-center gap-4 overflow-x-scroll"
      >
        {category.map((prod: TProduct) => {
          return (
            <ProductTile
              product={prod}
              key={`${label.slice(0, 3)}-${prod.id}`}
              favDispatch={favDispatch}
            />
          );
        })}
        <div className="flex w-45 shrink-0 items-center justify-center">
          <button
            onClick={() => {
              carouselRef.current?.scrollTo({
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            <FaRegArrowAltCircleLeft className="text-dark-blue text-5xl hover:cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
