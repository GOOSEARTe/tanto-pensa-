export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

export const validateRequired = (value: string, fieldName: string): void => {
  if (!value?.trim()) {
    throw new ValidationError(`${fieldName} is required`)
  }
}

export const validateLength = (
  value: string, 
  min: number, 
  max: number, 
  fieldName: string
): void => {
  const length = value.trim().length
  if (length < min || length > max) {
    throw new ValidationError(
      `${fieldName} must be between ${min} and ${max} characters`
    )
  }
}