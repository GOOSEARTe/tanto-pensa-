import { ValidationError } from "./ValidationError";

export const validateJournalContent = (content: string): void => {
    if (!content.trim()) {
        throw new ValidationError("Journal content cannot be empty");
    }
    
    if (content.length > 2000) {
        throw new ValidationError("Journal content cannot exceed 2000 characters");
    }
};