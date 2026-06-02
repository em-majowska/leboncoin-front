import type { TProduct } from "../types";

type TFavTileProps = {
  product: TProduct;
};

const FavTile = ({ product }: TFavTileProps) => {
  return (
    <article className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <img src={product.image} className="size-10 rounded-xl" />
        <p>
          {product.title.length > 50
            ? product.title.slice(0, 50) + "..."
            : product.title}
        </p>
      </div>
      <span>{product.price} €</span>
    </article>
  );
};

export default FavTile;
