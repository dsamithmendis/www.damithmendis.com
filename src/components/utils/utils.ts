import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function ge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
