import * as React from "react";

interface LoadingSpinnerProps {
    size?: "small" | "medium" | "large";
    color?: string;
}

export function LoadingSpinner({ size = "medium", color = "#4A90E2" }: LoadingSpinnerProps) {
    const sizeMap = {
        small: 20,
        medium: 32,
        large: 48
    };

    return (
        <activityIndicator
            busy={true}
            color={color}
            width={sizeMap[size]}
            height={sizeMap[size]}
        />
    );
}