import BurgerMenu from "./BurgerMenu";
import logo from "../assets/logo.svg";
import Container from "./Container";
import Button from "./Button";
import { MdOutlineAddBox } from "react-icons/md";
import SearchInput from "./SearchInput";
import NavButton from "./NavButton";
import { FaRegBell, FaRegHeart, FaRegUser } from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import { TbSunMoon } from "react-icons/tb";
import { memo, useCallback, useContext, useState } from "react";
import MobileMenu from "./MobileMenu";
import type { TSetState } from "../types";
import cn from "../utils/cn";
import { ThemeContext } from "../context/themeContext";

const CATEGORIES_LIST = [
  "Immobilier",
  "Véhicules",
  "Locations de vacances",
  "Emploi",
  "Mode",
  "Maison & Jardin",
  "Famille",
  "Électronique",
  "Loisirs",
  "Autres",
];

type THeaderProps = {
  favNum: number;
  setShowModal: TSetState<boolean>;
};

const Header = ({ favNum, setShowModal }: THeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const { setTheme } = useContext(ThemeContext);

  const handleThemeToggle = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, [setTheme]);

  return (
    <header
      className={cn(
        "dark:bg-dark-blue sticky top-0 z-100 bg-white dark:text-white",
      )}
    >
      <Container className="flex flex-col gap-3 border-b border-mist-100 py-2 md:py-4">
        <div className="m-w-full flex">
          <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <div className="align-items-center md: flex w-full place-items-center justify-center gap-2 md:justify-between">
            <img src={logo} alt="Le Bon Coin logo" className="h-7.5" />
            <Button
              className="hidden md:flex"
              type="primary"
              onClick={() => {}}
            >
              <MdOutlineAddBox />
              Déposer une annonce
            </Button>
            <SearchInput type="desktop" />
            <div className="hidden gap-3 md:flex">
              <NavButton label="Thème" onClick={handleThemeToggle}>
                <TbSunMoon size="20px" />
              </NavButton>
              <NavButton label="Mes recherches">
                <FaRegBell size="20px" />
              </NavButton>
              <NavButton
                label="Favoris"
                className="relative"
                onClick={() => setShowModal(true)}
              >
                <FaRegHeart size="20px" />
                {favNum > 0 && (
                  <div className="absolute -top-2 -right-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-white">
                    {favNum}
                  </div>
                )}
              </NavButton>
              <NavButton label="Messages">
                <LuMessageSquareText size="20px" />
              </NavButton>
              <NavButton label="Se connecter">
                <FaRegUser size="20px" />
              </NavButton>
            </div>
          </div>
        </div>
        <SearchInput type="mobile" />
        <nav className="max-w-full scrollbar-none overflow-x-scroll">
          <ul className="flex gap-6">
            {CATEGORIES_LIST.map((cat) => (
              <li>
                <a href="" className="text-sm text-nowrap">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </Container>
    </header>
  );
};

export default memo(Header);
