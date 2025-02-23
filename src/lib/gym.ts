import { ExerciseType } from "@/types/gym";

export async function getAllExercises() {
  // Add Limit to 2,000 to make sure that all of the exercises are fetched.
  const url = "https://exercisedb.p.rapidapi.com/exercises?limit=2000";
  const options: RequestInit = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_APP_EXERCISESDB_API_KEY as string,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
    cache: "no-store" as RequestCache,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export function filterExercises({
  exercises,
  name,
  bodyPart,
  equipment,
}: {
  exercises: ExerciseType[];
  name: string;
  bodyPart: string;
  equipment: string;
}): ExerciseType[] {
  return exercises.filter((exercise) => {
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
}
export async function getExercise(id: string) {
  const exercises: ExerciseType[] = await getAllExercises();
  return exercises.find((exercise) => exercise.id === id);
}
