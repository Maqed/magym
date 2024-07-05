import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function capitalize(str: string) {
  // This function capitalizes every first letter of each word in a string
  return str.replace(/^(.)|\s+(.)/g, (letter) => letter.toUpperCase());
}
