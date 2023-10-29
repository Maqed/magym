"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BarLoader } from "react-spinners";

type Props = {
  src: string;
  exerciseName: string;
};

function ExerciseGIF({ src, exerciseName }: Props) {
  const [isGIFLoading, setIsGIFLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsGIFLoading(true);
  }, [searchParams]);

  return (
    <div className="relative flex items-center justify-center">
      <Image
        width={200}
        height={200}
        src={src}
        alt={exerciseName}
        className={cn(isGIFLoading && "invisible")}
        onLoad={() => {
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
