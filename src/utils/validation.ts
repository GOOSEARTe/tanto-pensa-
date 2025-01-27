export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export const validateRequired = (value: string, fieldName: string): void => {
  if (!value || value.trim().length === 0) {
    throw new ValidationError(`${fieldName} is required`);
  }
};

export const validateLength = (
  value: string,
  fieldName: string,
  min: number,
  max: number
): void => {
  const length = value.trim().length;
  if (length < min || length > max) {
    throw new ValidationError(
      `${fieldName} must be between ${min} and ${max} characters`
    );
  }
};

export const validateMoodNote = (note: string): void => {
  if (note) {
    validateLength(note, "Note", 0, 500);
  }
};

export const validateJournalEntry = (title: string, content: string): void => {
  if (title) {
    validateLength(title, "Title", 0, 100);
  }
  validateRequired(content, "Journal content");
  validateLength(content, "Journal content", 1, 2000);
};