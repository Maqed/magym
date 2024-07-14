import React from "react";
import Link from "next/link";

function ExerciseNotFound() {
  return (
    <section className="container flex flex-col items-center justify-center gap-5 height-screen-without-navbar max-md:flex-col">
      <div>
        <h1 className="text-5xl font-bold text-red-700">Error 404</h1>
        <p className="text-xl">
          This page wasn&apos;t found. Do you want to{" "}
          <Link className="text-primary" href="/">
            go to home page?
          </Link>
        </p>
      </div>
    </section>
  );
}

export default ExerciseNotFound;
