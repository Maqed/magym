"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ExerciseType } from "@/types/gym";
import ExerciseCard from "../ExerciseCard";

type Props = {
  exercises: ExerciseType[];
  className?: string;
};

export const CardHoverEffect = ({ exercises, className }: Props) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {exercises.map((exercise, idx) => (
        <div
          key={exercise?.id}
          className="relative group p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <ExerciseCard
            className="relative z-20 h-full w-full overflow-hidden"
            {...exercise}
          />
        </div>
      ))}
    </div>
  );
};
