import Hero from "@/sections/Hero/Hero";
import { ExerciseType } from "@/types/gym";
import FilterComponents from "@/components/FilterComponents";
import { getAllExercises } from "@/lib/gym";
import Pagination from "@/components/Pagination";
import { ReactNode } from "react";
import { CardHoverEffect } from "@/components/ui/card-hover-effect";

const ITEMS_PER_PAGE = 6;

type Props = {
  searchParams: {
    name: string;
    bodyPart: string;
    equipment: string;
    page: string;
  };
};

export default async function Home({
  searchParams: { name = "", bodyPart = "", equipment = "", page = "1" },
}: Props) {
  const exercises: ExerciseType[] = await getAllExercises();

  const filteredExercises = exercises.filter((exercise) => {
    const isNameValid = !name || exercise.name.includes(name.toLowerCase());
    const isBodyPartValid =
      !bodyPart ||
      bodyPart === "all" ||
      exercise.bodyPart.includes(bodyPart) ||
      exercise.target.includes(bodyPart);
    const isEquipmentValid =
      !equipment ||
      equipment === "all" ||
      exercise.equipment.includes(equipment);

    return isNameValid && isBodyPartValid && isEquipmentValid;
  });

  const start = ITEMS_PER_PAGE * (Number(page) - 1);
  const end = ITEMS_PER_PAGE * Number(page);
  const pageCount = Math.ceil(filteredExercises.length / ITEMS_PER_PAGE);

  let content: ReactNode = (
    <CardHoverEffect exercises={filteredExercises.slice(start, end)} />
  );

  if (Number(page) > pageCount || Number(page) < 1)
    content = (
      <div className="flex flex-wrap items-center justify-center gap-5">
        <h3>This page doesn&apos;t exist.</h3>
      </div>
    );
  if (filteredExercises.length === 0)
    content = (
      <div className="flex flex-wrap items-center justify-center gap-5">
        <h3>There&apos;s no exercises for this query.</h3>
      </div>
    );
  return (
    <>
      <Hero />
      <section id="exercises" className="container space-y-10">
        <div>
          <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
            Exercises
          </h1>
          <p className="text-lg md:text-xl">
            Choose the muscle group and the equipment and let the rest be on us.
          </p>
        </div>
        <FilterComponents />
        {content}
        <Pagination currentPage={Number(page)} pageCount={pageCount} />
      </section>
    </>
  );
}
