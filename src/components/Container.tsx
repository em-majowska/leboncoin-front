import type { ReactNode } from "react";

type TContainerProps = { children: ReactNode; className?: string };

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={`mx-auto max-w-5xl px-4 ${className}`}>{children}</div>
  );
};

export default Container;
