import * as React from "react";

interface ButtonProps {
    onTap: () => void;
    label: string;
    variant?: "primary" | "secondary";
    className?: string;
}

export function Button({
    onTap,
    label,
    variant = "primary",
    className = ""
}: ButtonProps) {
    const variantStyles = {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white"
    };

    return (
        <button
            className={`p-3 rounded-lg ${variantStyles[variant]} ${className}`}
            onTap={onTap}
        >
            {label}
        </button>
    );
}