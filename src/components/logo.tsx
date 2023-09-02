import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

function Logo({ className }: Props) {
  return <h1 className={cn(className)}>Magym</h1>;
}

export default Logo;
