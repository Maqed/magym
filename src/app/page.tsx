import Hero from "@/sections/Hero/Hero";
import { ExerciseType } from "@/types/gym";
import ExerciseCard from "@/components/ExerciseCard";
import FilterComponents from "@/components/FilterComponents";
import { getAllExercises } from "@/lib/gym";
import Pagination from "@/components/Pagination";
import { ReactNode } from "react";

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

  let content: ReactNode = filteredExercises
    .slice(start, end)
    .map((exercise) => {
      return <ExerciseCard key={`exercisecard-${exercise.id}`} {...exercise} />;
    });

  if (Number(page) > pageCount || Number(page) < 1)
    content = <h3>This page doesn&apos;t exist.</h3>;
  if (filteredExercises.length === 0)
    content = <h3>There&apos;s no exercises for this query.</h3>;
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
        <div className="flex flex-wrap items-center justify-center gap-5">
          {content}
        </div>
        <Pagination currentPage={Number(page)} pageCount={pageCount} />
      </section>
    </>
  );
}
