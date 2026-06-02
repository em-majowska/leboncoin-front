import { type ReactNode } from "react";
import cn from "../utils/cn";

type TMobileMenuItemProps = {
  children: ReactNode;
  className?: string;
  type?: "bold";
};

const MobileMenuItem = ({
  children,
  className,
  type,
}: TMobileMenuItemProps) => {
  return (
    <a
      href=""
      className={cn(
        "hover:bg-light-orange text-dark-blue flex items-center gap-3 rounded-md px-2 py-2",
        {
          "font-bold": type === "bold",
          "text-sm": type === undefined,
        },
        className,
      )}
    >
      {children}
    </a>
  );
};

export default MobileMenuItem;
