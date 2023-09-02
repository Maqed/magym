import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

function Logo({ className }: Props) {
  return (
    <h1 className={cn("text-4xl font-bold text-primary", className)}>Magym</h1>
  );
}

export default Logo;
