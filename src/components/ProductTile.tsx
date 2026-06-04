import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import type { TProduct } from "../types";
import { useState, type Dispatch } from "react";
import cn from "../utils/cn";
import type { TFavAction } from "../App";

type TProductTileProps = {
  product: TProduct;
  favDispatch: Dispatch<TFavAction>;
};

const ProductTile = ({ product, favDispatch }: TProductTileProps) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <a href="">
      <article className="flex h-full w-45 shrink-0 flex-col justify-between gap-2">
        <section>
          <div className="flex items-center gap-1 py-2">
            <img
              src={product.avatar}
              alt="Avatar d'utilisateur"
              className="h-7 w-7 rounded-full"
            />
            <p className="font-bold">
              {product.username.length > 8 && product.stars
                ? product.username.slice(0, 8) + "..."
                : product.username}
            </p>
            {product.stars && (
              <div className="flex items-center gap-1">
                <FaStar className="text-dark-orange" />
                <span className="font-bold"> {product.stars}</span>
                {product.comments && (
                  <span className="text-xs">({product.comments})</span>
                )}
              </div>
            )}
          </div>
          <img
            src={product.image}
            alt="Image du produit"
            className="h-52 w-full rounded-xl object-cover"
          />
          <div>
            <p className="font-bold">{product.title}</p>
            <p className="font-bold">{product.price} €</p>
          </div>
        </section>
        <section className="align-end">
          {product.delivery && (
            <span
              className={cn(
                "bg-light-blue rounded-xl p-1 px-2 text-xs font-bold dark:text-black",
              )}
            >
              Livraison possible
            </span>
          )}
          <div className="flex justify-between">
            <div className="mt-2 flex flex-col">
              <span className="text-xs text-mist-500">{product.place}</span>
              <span className="text-xs text-mist-500">{product.date}</span>
            </div>
            {isFavourite ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setIsFavourite(!isFavourite);
                  favDispatch({ type: "remove_from_fav", payload: product });
                }}
              >
                <FaHeart size="24px" className="text-dark-orange" />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setIsFavourite(!isFavourite);
                  favDispatch({ type: "add_to_fav", payload: product });
                }}
              >
                <FaRegHeart size="24px" />
              </button>
            )}
          </div>
        </section>
      </article>
    </a>
  );
};

export default ProductTile;
