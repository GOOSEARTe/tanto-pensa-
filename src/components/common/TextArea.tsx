import * as React from "react";

interface TextAreaProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export function TextArea({
    value,
    onChange,
    placeholder,
    className = ""
}: TextAreaProps) {
    return (
        <textView
            className={`border-2 border-gray-200 rounded-lg p-2 h-64 ${className}`}
            hint={placeholder}
            text={value}
            onTextChange={(evt) => onChange(evt.value)}
        />
    );
}