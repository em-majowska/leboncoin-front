import { MdClose, MdOutlineAddBox } from "react-icons/md";
import MobileMenuItem from "./MobileMenuItem";
import { CiSearch } from "react-icons/ci";
import { FaRegBell, FaRegHeart } from "react-icons/fa";
import { LuMessageSquareText, LuTicketPercent } from "react-icons/lu";
import logo from "../assets/logo.svg";
import type { TSetState } from "../types";
import cn from "../utils/cn";
import { memo } from "react";

type TMobileMenuProps = {
  setIsMenuOpen: TSetState<boolean>;
  isMenuOpen: boolean;
};

const MobileMenu = ({ setIsMenuOpen, isMenuOpen }: TMobileMenuProps) => {
  return (
    <nav
      className={cn(
        "b-0 absolute top-0 left-0 flex h-screen w-full max-w-120 flex-col bg-white transition-transform duration-300 ease-in-out md:hidden",
        {
          "-translate-x-full": isMenuOpen === false,
          "translate-x-0": isMenuOpen === true,
        },
      )}
      aria-hidden={!isMenuOpen}
    >
      <div className="flex items-center justify-center p-4">
        <img src={logo} alt="Le Bon Coin logo" />
        <button
          className="hover:bg-light-gray absolute right-4 rounded-xl p-2 hover:cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <MdClose className="text-2xl" />
        </button>
      </div>
      <hr />
      <ul className="flex flex-col gap-2 p-2">
        <li>
          <MobileMenuItem type="bold">
            <MdOutlineAddBox /> Déposer une annonce
          </MobileMenuItem>
        </li>
        <li>
          <MobileMenuItem type="bold">
            <CiSearch /> Rechercher
          </MobileMenuItem>
        </li>
      </ul>
      <hr />
      <ul className="flex flex-col gap-2 p-2">
        <li>
          <MobileMenuItem type="bold">
            <LuMessageSquareText /> Messages
          </MobileMenuItem>
        </li>
        <li>
          <MobileMenuItem type="bold">
            <FaRegHeart /> Favoris
          </MobileMenuItem>
        </li>
        <li>
          <MobileMenuItem type="bold">
            <FaRegBell /> Recherches sauvegardées
          </MobileMenuItem>
        </li>
      </ul>
      <hr />
      <ul className="flex flex-col gap-2 p-2">
        <li>
          <MobileMenuItem type="bold">
            <LuTicketPercent />
            Bons plans !
          </MobileMenuItem>
        </li>
      </ul>
      <hr />
      <div className="flex flex-col gap-2 p-2">
        <p className="p-2 text-xs text-mist-600">Catégories</p>
        <ul className="flex flex-col gap-1">
          <li>
            <MobileMenuItem>Immobilier</MobileMenuItem>
          </li>
          <li>
            <MobileMenuItem>Véhicles</MobileMenuItem>
          </li>
          <li>
            <MobileMenuItem>Vacances</MobileMenuItem>
          </li>
          <li>
            <MobileMenuItem>Emploi</MobileMenuItem>
          </li>
          <li>
            <MobileMenuItem>Mode</MobileMenuItem>
          </li>
          <li>
            <MobileMenuItem>Maison & Jardin</MobileMenuItem>
          </li>
          <li>
            <MobileMenuItem>Famille</MobileMenuItem>
          </li>
          <li>
            <MobileMenuItem>Électronique</MobileMenuItem>
          </li>
          <li>
            <MobileMenuItem>Loisirs</MobileMenuItem>
          </li>
          <li>
            <MobileMenuItem>Autres</MobileMenuItem>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(MobileMenu);
