import { getAllExercises, filterExercises } from "@/lib/gym";
import { ExerciseType } from "@/types/gym";
import { ReactNode } from "react";
import { CardHoverEffect } from "@/components/ui/card-hover-effect";
import FilterComponents from "@/components/FilterComponents";
import Pagination from "@/components/Pagination";
type Props = {
  name: string;
  bodyPart: string;
  equipment: string;
  page?: string;
  itemsPerPage?: number;
};
async function ExercisesSection({
  name,
  bodyPart,
  equipment,
  page = "1",
  itemsPerPage = 6,
}: Props) {
  const exercises: ExerciseType[] = await getAllExercises();

  const filteredExercises: ExerciseType[] = filterExercises({
    exercises,
    name,
    bodyPart,
    equipment,
  });
  const start = itemsPerPage * (Number(page) - 1);
  const end = itemsPerPage * Number(page);
  const pageCount = Math.ceil(filteredExercises.length / itemsPerPage);
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
      <FilterComponents />
      {content}
      <Pagination currentPage={Number(page)} pageCount={pageCount} />
    </>
  );
}

export default ExercisesSection;
