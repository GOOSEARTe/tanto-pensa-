import * as React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "error";
    className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
    const variantStyles = {
        default: "bg-gray-100 text-gray-800",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        error: "bg-red-100 text-red-800"
    };

    return (
        <label className={`px-2 py-1 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}>
            {children}
        </label>
    );
}