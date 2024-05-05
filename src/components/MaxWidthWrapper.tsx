import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const MaxWidthWrapper: React.FC<{
  className?: string;
  children: ReactNode;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};
