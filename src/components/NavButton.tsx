import { type ReactNode } from "react";

type TNavButtonProps = {
  label: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const NavButton = ({
  label,
  children,
  className,
  onClick,
}: TNavButtonProps) => {
  return (
    <button
      className={`flex flex-col items-center gap-1 text-xs text-nowrap hover:cursor-pointer ${className}`}
      onClick={onClick ? onClick : undefined}
    >
      {children} <p>{label}</p>
    </button>
  );
};

export default NavButton;
