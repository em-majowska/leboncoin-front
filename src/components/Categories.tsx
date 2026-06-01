import type { TCategories, TCategory } from "../types";
import CategoryTile from "./CategoryTile";
import Headline from "./Headline";

type TCategoriesProps = { categories: TCategories };

const Categories = ({ categories }: TCategoriesProps) => {
  return (
    <section className="mb-8">
      <Headline label="Top catégories" type="md" />
      <div className="flex max-w-full scrollbar-none gap-4 overflow-x-scroll">
        {categories.map((cat: TCategory) => {
          return <CategoryTile item={cat} />;
        })}
      </div>
    </section>
  );
};

export default Categories;
