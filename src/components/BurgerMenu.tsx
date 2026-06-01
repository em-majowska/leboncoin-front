import { RxHamburgerMenu } from "react-icons/rx";

// type Props = {};

const BurgerMenu = () => {
  return (
    <button className="me-auto p-2 md:hidden">
      <RxHamburgerMenu size="2em" />
    </button>
  );
};

export default BurgerMenu;
