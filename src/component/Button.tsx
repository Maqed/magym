import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

function Button({ children, className, onClick }: Props) {
  className = twMerge("btn capitalize no-animation", className);
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
