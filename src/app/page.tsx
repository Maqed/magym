import Hero from "@/sections/Hero/Hero";
import ExercisesSection from "@/components/ExercisesSection";
import { Suspense } from "react";
import ExerciseCardSkeleton from "@/components/ExerciseCardSkeleton";
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
        <Suspense
          fallback={
            <div className="flex flex-wrap justify-center gap-5">
              {[...Array(6)].map((element, idx) => {
                return <ExerciseCardSkeleton key={`card-skeleton-${idx}`} />;
              })}
            </div>
          }
        >
          <ExercisesSection
            bodyPart={bodyPart}
            name={name}
            equipment={equipment}
            page={page}
          />
        </Suspense>
      </section>
    </>
  );
}
