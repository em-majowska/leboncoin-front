import type { TCategory } from "../types";

type TCategoryTileProps = {
  item: TCategory;
};

const CategoryTile = ({ item }: TCategoryTileProps) => {
  return (
    <a href="">
      <article
        key={item.id}
        className="relative size-32 shrink-0 overflow-hidden rounded-2xl"
      >
        <img src={item.image} className="h-full object-cover" />
        <p className="absolute inset-x-0 bottom-0 pbe-2 text-center text-sm text-white">
          {item.title}
        </p>
      </article>
    </a>
  );
};

export default CategoryTile;
