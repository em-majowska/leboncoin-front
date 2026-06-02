import { CiSearch } from "react-icons/ci";

type TSearchInputProps = { type: "mobile" | "desktop" };

const SearchInput = ({ type }: TSearchInputProps) => {
  return type === "mobile" ? (
    <div className="bg-light-gray flex w-full items-center gap-2 rounded-2xl px-4 py-3 md:hidden">
      <CiSearch />
      <input
        type="search"
        name="search-bar"
        id="search-bar"
        placeholder="Rechercher sur leboncoin"
      />
    </div>
  ) : (
    <div className="bg-light-gray hidden shrink items-center gap-2 rounded-2xl px-4 py-1 md:flex md:px-2">
      <input
        type="search"
        name="search-bar"
        id="search-bar"
        placeholder="Rechercher sur leboncoin"
        className="w-full bg-transparent text-sm outline-none"
      />
      <div className="bg-orange rounded-2xl p-2">
        <CiSearch color="white" />
      </div>
    </div>
  );
};

export default SearchInput;
