import * as React from "react";
import { buttonStyles } from "./styles";

interface ButtonProps {
    onTap: () => void;
    label: string;
    variant?: keyof typeof buttonStyles.variants;
    className?: string;
    disabled?: boolean;
}

export function Button({
    onTap,
    label,
    variant = "primary",
    className = "",
    disabled = false
}: ButtonProps) {
    return (
        <button
            className={`${buttonStyles.base} ${buttonStyles.variants[variant]} ${className} ${
                disabled ? "opacity-50" : ""
            }`}
            onTap={onTap}
            isEnabled={!disabled}
        >
            {label}
        </button>
    );
}