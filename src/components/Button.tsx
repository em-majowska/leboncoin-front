import type { ReactNode } from "react";
import cn from "../utils/cn";

type TButtonProps = {
  className?: string;
  type: "primary" | "secondary";
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ className, type, onClick, children }: TButtonProps) => {
  return (
    <button
      className={`${cn("flex shrink-0 cursor-pointer place-items-center items-center gap-1 rounded-2xl px-4 py-2 font-bold whitespace-nowrap", { "bg-orange text-white": type === "primary" })} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
