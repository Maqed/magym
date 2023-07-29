import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
};

function Logo({ className }: Props) {
  className = twMerge("", className);
  return <h1 className={className}>Magym</h1>;
}

export default Logo;
