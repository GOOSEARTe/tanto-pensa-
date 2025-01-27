import * as React from "react";
import { ANALYTICS_PERIODS, AnalyticsPeriod } from "../../constants/analytics";

interface AnalyticsPeriodSelectorProps {
    selectedPeriod: AnalyticsPeriod;
    onPeriodChange: (period: AnalyticsPeriod) => void;
}

export function AnalyticsPeriodSelector({
    selectedPeriod,
    onPeriodChange
}: AnalyticsPeriodSelectorProps) {
    const periods = Object.values(ANALYTICS_PERIODS);

    return (
        <stackLayout orientation="horizontal" className="mb-4">
            {periods.map((period) => (
                <button
                    key={period}
                    className={`mr-2 px-4 py-2 rounded-lg ${
                        selectedPeriod === period
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 text-gray-700"
                    }`}
                    onTap={() => onPeriodChange(period)}
                >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
            ))}
        </stackLayout>
    );
}