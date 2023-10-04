import Hero from "@/sections/Hero/Hero";
import { ExerciseType } from "@/types/gym";
import ExerciseCard from "@/components/ExerciseCard";
import FilterComponents from "@/components/FilterComponents";
import { getAllExercises } from "@/lib/gym";

type Props = {
  searchParams: {
    name: string;
    bodyPart: string;
    equipment: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const exercises: ExerciseType[] = await getAllExercises();
  let { name, bodyPart, equipment } = searchParams;

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
          {filteredExercises.length > 0 ? (
            filteredExercises.slice(0, 6).map((exercise) => {
              return (
                <ExerciseCard
                  key={`exercisecard-${exercise.id}`}
                  {...exercise}
                />
              );
            })
          ) : (
            <h3 className="text-lg">There is no exercises for this query.</h3>
          )}
        </div>
      </section>
    </>
  );
}
