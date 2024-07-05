import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/types/siteData";

type Props = {
  className?: string;
};

function Logo({ className }: Props) {
  return (
    <h1 className={cn("text-4xl font-bold text-primary", className)}>
      {SITE_NAME}
    </h1>
  );
}

export default Logo;
