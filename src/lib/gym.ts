export async function getAllExercises() {
  // Add Limit to 2,000 to make sure that all of the exercises are fetched.
  const url = "https://exercisedb.p.rapidapi.com/exercises?limit=2000";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_APP_EXERCISESDB_API_KEY as string,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
