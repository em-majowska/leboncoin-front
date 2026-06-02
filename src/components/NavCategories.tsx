import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import type { TCategories, TCategory } from "../types";
import CategoryTile from "./CategoryTile";
import Headline from "./Headline";
import { useRef } from "react";

type TCategoriesProps = { categories: TCategories };

const Categories = ({ categories }: TCategoriesProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mb-8">
      <Headline label="Top catégories" level={2} />
      <div
        ref={carouselRef}
        className="flex max-w-full scrollbar-none gap-4 overflow-x-scroll"
      >
        {categories.map((cat: TCategory) => {
          return <CategoryTile item={cat} key={cat.id} />;
        })}
        <div className="flex w-32 shrink-0 items-center justify-center">
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

export default Categories;
