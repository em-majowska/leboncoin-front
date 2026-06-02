import type { TCategories, TCategory } from "../types";
import CategoryTile from "./CategoryTile";
import Headline from "./Headline";

type TCategoriesProps = { categories: TCategories };

const Categories = ({ categories }: TCategoriesProps) => {
  return (
    <section className="mb-8">
      <Headline label="Top catégories" level={2} />
      <div className="flex max-w-full scrollbar-none gap-4 overflow-x-scroll">
        {categories.map((cat: TCategory) => {
          return <CategoryTile item={cat} key={cat.id} />;
        })}
      </div>
    </section>
  );
};

export default Categories;
