import { format, formatDistanceToNow } from "date-fns";

export function formatDate(date: Date): string {
    return format(date, "PPP 'at' p");
}

export function getRelativeTime(date: Date): string {
    return formatDistanceToNow(date, { addSuffix: true });
}