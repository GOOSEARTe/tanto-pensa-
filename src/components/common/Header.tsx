import * as React from "react";

interface HeaderProps {
    title: string;
    className?: string;
}

export function Header({ title, className = "" }: HeaderProps) {
    return (
        <label className={`text-2xl font-bold mb-4 ${className}`}>
            {title}
        </label>
    );
}