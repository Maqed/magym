import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Dumbbell } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getAllExercises } from "@/lib/gym";
import { ExerciseType } from "@/types/gym";

type Props = {
  params: { exerciseId: string };
};

async function Exercise({ params }: Props) {
  const inputId = params.exerciseId;

  const exercises: ExerciseType[] = await getAllExercises();
  const exercise = exercises.find((exercise) => exercise.id == inputId);

  if (!exercise) {
    notFound();
  }
  const {
    name,
    bodyPart,
    equipment,
    gifUrl,
    instructions,
    secondaryMuscles,
    target,
  } = exercise;

  return (
    <section className="container ">
      <article className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center md:justify-start md:items-start">
          <Image
            src={gifUrl}
            alt={`${name} img`}
            width={500}
            height={500}
            className="img-fluid"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold capitalize md:text-6xl">{name}</h1>
          {/* Badges */}
          <div className="flex flex-col flex-wrap justify-between gap-3 py-2">
            <div className="flex flex-wrap gap-3">
              <Link href={`/?bodyPart=${bodyPart}`}>
                <Badge className="text-sm capitalize">{bodyPart}</Badge>
              </Link>
              <Link href={`/?bodyPart=${target}`}>
                <Badge className="text-sm capitalize">{target}</Badge>
              </Link>
              {secondaryMuscles.map((muscle) => {
                return (
                  <Link
                    key={`${name}-secondary-muscle-${muscle}`}
                    href={`/?bodyPart=${muscle}`}
                  >
                    <Badge className="text-sm capitalize">{muscle}</Badge>
                  </Link>
                );
              })}
            </div>
            <div className="flex">
              <Link href={`/?equipment=${equipment}`}>
                <Badge className="text-sm capitalize">
                  <Dumbbell className="inline mr-1 w-[1em] h-[1em]" />
                  {equipment}
                </Badge>
              </Link>
            </div>
          </div>
          {/* Instructions */}
          <h4 className="mb-2 text-2xl font-bold md:text-5xl">Instructions</h4>
          <ol>
            {instructions.map((instruction, index) => {
              return (
                <li
                  className="ml-4 list-decimal"
                  key={`${name}-instruction-${index + 1}`}
                >
                  {instruction}
                </li>
              );
            })}
          </ol>
        </div>
      </article>
    </section>
  );
}

export default Exercise;
