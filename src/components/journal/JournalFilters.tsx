import * as React from "react";
import { Button } from "../common/Button";

interface JournalFiltersProps {
    onFilterChange: (filter: string) => void;
    activeFilter: string;
}

export function JournalFilters({ onFilterChange, activeFilter }: JournalFiltersProps) {
    const filters = ["All", "Today", "Week", "Month"];

    return (
        <stackLayout orientation="horizontal" className="mb-4 space-x-2">
            {filters.map((filter) => (
                <Button
                    key={filter}
                    onTap={() => onFilterChange(filter)}
                    variant={activeFilter === filter ? "primary" : "secondary"}
                >
                    {filter}
                </Button>
            ))}
        </stackLayout>
    );
}