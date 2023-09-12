import Image from "next/image";
import { Dumbbell } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExerciseType } from "@/types/gym";

function ExerciseCard({
  equipment,
  gifUrl,
  name,
  target,
}: Partial<ExerciseType>) {
  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle className="capitalize">{name}</CardTitle>
        <CardDescription className="capitalize">{target}</CardDescription>
        <CardDescription className="capitalize">
          <Dumbbell className="inline mr-1 w-[1em] h-[1em]" /> {equipment}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <Image
          width={200}
          height={200}
          src={gifUrl as string}
          alt={name as string}
        />
      </CardContent>
    </Card>
  );
}

export default ExerciseCard;
