import { type ReactNode } from "react";

type TNavButtonProps = { label: string; children: ReactNode };

const NavButton = ({ label, children }: TNavButtonProps) => {
  return (
    <button className="flex flex-col items-center gap-1 text-xs text-nowrap hover:cursor-pointer">
      {children} <p>{label}</p>
    </button>
  );
};

export default NavButton;
