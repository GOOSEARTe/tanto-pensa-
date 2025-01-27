import * as React from "react";

interface FormFieldProps {
    label: string;
    error?: string;
    children: React.ReactNode;
    required?: boolean;
    className?: string;
}

export function FormField({
    label,
    error,
    children,
    required = false,
    className = ""
}: FormFieldProps) {
    return (
        <stackLayout className={`mb-4 ${className}`}>
            <label className="text-sm font-medium text-gray-700 mb-1">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {children}
            {error && (
                <label className="text-sm text-red-500 mt-1">
                    {error}
                </label>
            )}
        </stackLayout>
    );
}