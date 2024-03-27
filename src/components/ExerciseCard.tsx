import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExerciseType } from "@/types/gym";
import ExerciseGIF from "@/components/ExerciseGIF";

function ExerciseCard({
  id,
  equipment,
  gifUrl,
  name,
  bodyPart,
  target,
  secondaryMuscles,
}: ExerciseType) {
  return (
    <Link
      className="transition-all hover:shadow-md hover:-translate-y-1"
      href={`/exercise/${id}`}
    >
      <Card className="w-[350px]">
        <CardHeader className="flex flex-col items-center justify-center">
          <CardTitle className="capitalize">{name}</CardTitle>
          <div className="flex flex-col flex-wrap items-center justify-between gap-3 py-2">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge className="capitalize">{bodyPart}</Badge>
              <Badge className="capitalize">{target}</Badge>
              {secondaryMuscles.map((muscle) => {
                return (
                  <Badge
                    className="capitalize"
                    key={`${name}-secondary-muscle-${muscle}`}
                  >
                    {muscle}
                  </Badge>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Badge className="capitalize">
                <Dumbbell className="inline mr-1 w-[1em] h-[1em]" /> {equipment}
              </Badge>
            </div>
          </div>

          <CardDescription className="capitalize"></CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-y-5">
          <ExerciseGIF exerciseName={name} src={gifUrl} />
        </CardContent>
      </Card>
    </Link>
  );
}

export default ExerciseCard;
