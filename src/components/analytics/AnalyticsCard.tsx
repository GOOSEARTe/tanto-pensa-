import * as React from "react";
import { Card } from "../common/Card";

interface AnalyticsCardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export function AnalyticsCard({ title, children, className = "" }: AnalyticsCardProps) {
    return (
        <Card className={`mb-4 ${className}`}>
            <label className="text-lg font-semibold mb-4">{title}</label>
            {children}
        </Card>
    );
}