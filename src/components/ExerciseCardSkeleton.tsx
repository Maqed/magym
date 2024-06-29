import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getRandomInt } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

function ExerciseCardSkeleton({ className }: Props) {
  return (
    <Card className={cn("w-[350px]", className)}>
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle className="capitalize">
          <Skeleton className="h-8 w-[250px]" />
        </CardTitle>
        <div className="flex flex-col flex-wrap items-center justify-between gap-3 py-2">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* BodyPart Badges Skeleton */}
            {[...Array(getRandomInt(2, 5))].map((element, idx) => {
              return (
                <Badge
                  key={`skeleton-${idx}`}
                  variant="skeleton"
                  className="h-6 w-14"
                />
              );
            })}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Equipment Badges Skeleton */}
            <Badge variant="skeleton" className="h-6 w-14" />
          </div>
        </div>
      </CardHeader>
      {/* Image Skeleton */}
      <CardContent className="flex flex-col items-center justify-center gap-y-5">
        <Skeleton className="h-[200px] w-[300px] rounded-xl" />
      </CardContent>
    </Card>
  );
}
export default ExerciseCardSkeleton;
