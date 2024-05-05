import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const EmptyHeading: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ children, className }) => {
  return <h4 className={cn("text-3xl font-medium", className)}>{children}</h4>;
};
