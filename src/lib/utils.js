import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// This is the original function from shadcn/ui
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Add this new exported function
export function createPageUrl(page) {
  return `/${page.toLowerCase()}`;
}