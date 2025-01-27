import * as React from "react";
import { textAreaStyles } from "./styles";

interface TextAreaProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    size?: keyof typeof textAreaStyles.sizes;
    className?: string;
}

export function TextArea({
    value,
    onChange,
    placeholder,
    size = "medium",
    className = ""
}: TextAreaProps) {
    return (
        <textView
            className={`${textAreaStyles.base} ${textAreaStyles.sizes[size]} ${className}`}
            hint={placeholder}
            text={value}
            onTextChange={(evt) => onChange(evt.value)}
        />
    );
}