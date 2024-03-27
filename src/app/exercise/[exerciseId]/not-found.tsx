import React from "react";
import Link from "next/link";
import Image from "next/image";

function ExerciseNotFound() {
  return (
    <section className="container flex items-center justify-between gap-5 height-screen-without-navbar max-md:flex-col">
      <div className="flex flex-col justify-center gap-5 height-screen-without-navbar">
        <h1 className="text-5xl font-bold text-red-700">Error 404</h1>
        <p className="text-xl">
          Exercise wasn&apos;t found. Do you want to{" "}
          <Link href="/">go to home page?</Link>
        </p>
      </div>
      <div className="max-md:hidden md:w-1/3 lg:w-[45%]">
        <Image
          width={1000}
          height={1000}
          className="w-full h-auto"
          src="/not-found-img.png"
          alt="Gym"
        />
      </div>
    </section>
  );
}

export default ExerciseNotFound;
