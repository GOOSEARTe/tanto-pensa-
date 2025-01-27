export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public status?: number
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export const createError = (
  message: string,
  code = 'UNKNOWN_ERROR',
  status?: number
): AppError => {
  return new AppError(message, code, status)
}