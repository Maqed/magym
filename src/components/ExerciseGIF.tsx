"use client";
import { useState } from "react";
import Image from "next/image";
import { BarLoader } from "react-spinners";

type Props = {
  src: string;
  exerciseName: string;
};

function ExerciseGIF({ src, exerciseName }: Props) {
  const [isGIFLoading, setIsGIFLoading] = useState(true);
  return (
    <div className="relative flex items-center justify-center">
      <Image
        width={200}
        height={200}
        src={src}
        alt={exerciseName}
        onLoadingComplete={() => {
          setIsGIFLoading(false);
        }}
      />
      {isGIFLoading && (
        <div className="absolute">
          <BarLoader color="#dc2626" />
        </div>
      )}
    </div>
  );
}

export default ExerciseGIF;
