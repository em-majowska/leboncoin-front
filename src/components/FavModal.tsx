import type { TProducts, TSetState } from "../types";
import cn from "../utils/cn";
import FavTile from "./FavTile";
import Headline from "./Headline";

type TFavModalProps = {
  fav: TProducts;
  setShowModal: TSetState<boolean>;
  total: number;
};

const FavModal = ({ fav, setShowModal, total }: TFavModalProps) => {
  return (
    <div
      className="sticky inset-0 z-101 flex h-screen items-center justify-center bg-black/70"
      onClick={() => setShowModal(false)}
    >
      <div
        className={cn(
          "dark:bg-dark-blue flex min-h-100 w-150 flex-col rounded-2xl bg-white px-6 py-4 dark:text-white",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Headline level={2} label="Mes Favoris" />
        <div className="flex flex-1 flex-col justify-between gap-5">
          <ul className="mt-6 flex flex-col gap-4">
            {fav.map((product) => {
              return (
                <li key={product.id}>
                  <FavTile product={product} />
                </li>
              );
            })}
          </ul>
          <p className="flex justify-between font-bold">
            <span>Prix total: </span>
            <span>{total} €</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavModal;
