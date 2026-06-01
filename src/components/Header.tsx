import BurgerMenu from "./BurgerMenu";
import logo from "../assets/logo.svg";
import Container from "./Container";
import Button from "./Button";
import { MdOutlineAddBox } from "react-icons/md";
import SearchInput from "./SearchInput";
import NavButton from "./NavButton";
import {
  FaRegBell,
  FaRegHeart,
  FaRegLightbulb,
  FaRegUser,
} from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";

const Header = () => {
  return (
    <header>
      <Container className="flex flex-col gap-3 border-b border-mist-100 py-2">
        <div className="m-w-full flex">
          <BurgerMenu />
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
              <NavButton label="Thème">
                <FaRegLightbulb size="20px" />
              </NavButton>
              <NavButton label="Mes recherches">
                <FaRegBell size="20px" />
              </NavButton>
              <NavButton label="Favoris">
                <FaRegHeart size="20px" />
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
            <li>
              <a href="" className="text-sm text-nowrap">
                Immobilier
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-nowrap">
                Véhicules
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-nowrap">
                Locations de vacances
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-nowrap">
                Emploi
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-nowrap">
                Mode
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-nowrap">
                Maison & Jardin
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-nowrap">
                Famille
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-nowrap">
                Électronique
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-nowrap">
                Loisirs
              </a>
            </li>
            <li>
              <a href="" className="text-sm text-nowrap">
                Autres
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
