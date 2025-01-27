import * as React from "react";

interface EmptyStateProps {
    title: string;
    message: string;
}

export function EmptyState({ title, message }: EmptyStateProps) {
    return (
        <stackLayout className="p-8 items-center">
            <label className="text-xl font-bold mb-2 text-center">
                {title}
            </label>
            <label className="text-gray-500 text-center">
                {message}
            </label>
        </stackLayout>
    );
}