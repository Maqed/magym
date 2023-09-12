"use client";
import { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import FilterComponents from "./FilterComponents";
import { ExerciseType } from "@/types/gym";

type Props = {
  exercises: ExerciseType[];
};

function Exercises({ exercises }: Props) {
  const [shownExercises, setShownExercises] =
    useState<ExerciseType[]>(exercises);

  return (
    <section id="exercises" className="container space-y-10">
      <div>
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
          Exercises
        </h1>
        <p className="text-lg md:text-xl">
          Choose the muscle group and the equipment and let the rest be on us.
        </p>
      </div>
      <FilterComponents setShownExercises={setShownExercises} />
      <div className="flex flex-wrap items-center justify-center gap-5">
        <ExerciseCard
          name="astride jumps (male)"
          target="cardiovascular system"
          equipment="body weight"
          gifUrl="https://api.exercisedb.io/image/djVBXfquEWC7Zc"
        />
        <ExerciseCard
          name="back and forth step"
          target="cardiovascular system"
          equipment="body weight"
          gifUrl="https://api.exercisedb.io/image/KGwBZZuW-uOUYU"
        />
        <ExerciseCard
          name="bear crawl"
          target="cardiovascular system"
          equipment="body weight"
          gifUrl="https://api.exercisedb.io/image/Oh7PtGWwJIWDwf"
        />
      </div>
    </section>
  );
}
export default Exercises;
