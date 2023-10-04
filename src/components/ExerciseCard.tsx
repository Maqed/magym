import Image from "next/image";
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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function ExerciseCard({
  equipment,
  gifUrl,
  name,
  bodyPart,
  target,
  instructions,
  secondaryMuscles,
}: ExerciseType) {
  return (
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
      <CardContent className="flex flex-col items-center justify-center">
        <Image width={200} height={200} src={gifUrl} alt={name} />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Show Instructions</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Insctructions to do {name}</DialogTitle>
            </DialogHeader>
            <ol className="px-4">
              {instructions.map((instruction, index) => {
                return (
                  <li
                    className="list-decimal"
                    key={`${name}-instruction-${index + 1}`}
                  >
                    {instruction}
                  </li>
                );
              })}
            </ol>
            <div className="flex flex-col items-center justify-center">
              <Image width={200} height={200} src={gifUrl} alt={name} />
              <small>Illustration image</small>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

export default ExerciseCard;
