import { RxHamburgerMenu } from "react-icons/rx";
import type { TSetState } from "../types";

type TBurgerMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: TSetState<boolean>;
};

const BurgerMenu = ({ isMenuOpen, setIsMenuOpen }: TBurgerMenuProps) => {
  return (
    <button
      className="me-auto py-2 hover:cursor-pointer md:hidden"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <RxHamburgerMenu className="text-dark-blue text-4xl" />
    </button>
  );
};

export default BurgerMenu;
