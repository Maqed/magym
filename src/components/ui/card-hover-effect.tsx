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
    <div className={cn("flex flex-wrap justify-center", className)}>
      {exercises.map((exercise, idx) => (
        <div
          key={exercise?.id}
          className="relative p-2 group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block w-full h-full bg-primary/20 rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.1 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.1, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <ExerciseCard
            className="relative z-20 h-full overflow-hidden"
            {...exercise}
          />
        </div>
      ))}
    </div>
  );
};
