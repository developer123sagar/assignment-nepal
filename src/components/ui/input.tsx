import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none transition duration-500 focus:border-blue-300 disabled:cursor-not-allowed disabled:opacity-50 text-14 placeholder:text-16 rounded-[6px] placeholder:text-gray-400/80 border-[1.8px] border-gray-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
