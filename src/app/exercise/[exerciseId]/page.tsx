import {
  SITE_URL,
  SITE_NAME,
  CREATOR_TWITTER_ID,
  CREATOR_TWITTER_NAME,
} from "@/types/siteData";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Dumbbell } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getExercise } from "@/lib/gym";

type Props = {
  params: { exerciseId: string };
};

export async function generateMetadata({ params }: Props) {
  const { exerciseId } = params;

  const exercise = await getExercise(exerciseId);
  if (!exercise) {
    notFound();
  }

  const { name, bodyPart, equipment, gifUrl, target } = exercise;
  const title = `Magym | ${name}`;
  const description = `Learn how to do ${name} with a few steps. It will make your ${bodyPart} stronger, especially your ${target}. You can do it with ${equipment}`;
  return {
    title,
    description,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      siteId: CREATOR_TWITTER_ID,
      creator: CREATOR_TWITTER_NAME,
      creatorId: CREATOR_TWITTER_ID,
      images: [gifUrl],
    },
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: SITE_NAME,
      images: [gifUrl],
      locale: "en_US",
      type: "website",
    },
  };
}

async function Exercise({ params }: Props) {
  const { exerciseId } = params;

  const exercise = await getExercise(exerciseId);

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
