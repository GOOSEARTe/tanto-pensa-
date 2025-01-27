import * as React from "react";

interface DividerProps {
    className?: string;
    orientation?: "horizontal" | "vertical";
}

export function Divider({ className = "", orientation = "horizontal" }: DividerProps) {
    const baseStyles = orientation === "horizontal" 
        ? "w-full h-px my-4" 
        : "h-full w-px mx-4";

    return (
        <stackLayout 
            className={`bg-gray-200 ${baseStyles} ${className}`}
        />
    );
}