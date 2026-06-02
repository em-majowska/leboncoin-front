import { RxHamburgerMenu } from "react-icons/rx";
import type { TSetState } from "../types";

type TBurgerMenuProps = { isOpen: boolean; setIsOpen: TSetState<boolean> };

const BurgerMenu = ({ isOpen, setIsOpen }: TBurgerMenuProps) => {
  return (
    <button
      className="me-auto py-2 hover:cursor-pointer md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <RxHamburgerMenu className="text-dark-blue text-4xl" />
    </button>
  );
};

export default BurgerMenu;
