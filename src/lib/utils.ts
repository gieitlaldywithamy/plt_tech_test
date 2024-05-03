import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function formatPrice(
  price: number,
  currency?: "USD" | "EUR" | "GBP" | "BDT"
) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency ||'GBP',
  }).format(price);
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }