import { format } from "date-fns";

export const formatters = {
    number: (value: number, decimals: number = 0): string => {
        return value.toFixed(decimals);
    },

    percentage: (value: number, decimals: number = 0): string => {
        return `${(value * 100).toFixed(decimals)}%`;
    },

    currency: (value: number, currency: string = "USD"): string => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency
        }).format(value);
    },

    date: (date: Date, formatString: string = "PP"): string => {
        return format(date, formatString);
    },

    truncate: (text: string, maxLength: number): string => {
        if (text.length <= maxLength) return text;
        return `${text.slice(0, maxLength)}...`;
    }
};