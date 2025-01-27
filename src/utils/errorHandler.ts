import { Alert } from "@nativescript/core";
import { logger } from "./logger";

export enum ErrorType {
  VALIDATION = "VALIDATION",
  NETWORK = "NETWORK",
  STORAGE = "STORAGE",
  UNKNOWN = "UNKNOWN"
}

export interface ErrorOptions {
  type?: ErrorType;
  context?: string;
  showAlert?: boolean;
  silent?: boolean;
}

class ErrorHandler {
  private static instance: ErrorHandler;

  private constructor() {}

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  handle(error: Error, options: ErrorOptions = {}): void {
    const {
      type = ErrorType.UNKNOWN,
      context = "Application",
      showAlert = true,
      silent = false
    } = options;

    // Log the error
    if (!silent) {
      logger.error(`[${context}] [${type}] Error:`, {
        message: error.message,
        stack: error.stack,
        type,
        context
      });
    }

    // Show user-friendly alert if needed
    if (showAlert) {
      this.showErrorAlert(type, error.message);
    }
  }

  async handleAsync<T>(
    promise: Promise<T>,
    options: ErrorOptions = {}
  ): Promise<T | null> {
    try {
      return await promise;
    } catch (error) {
      this.handle(error as Error, options);
      return null;
    }
  }

  private showErrorAlert(type: ErrorType, message: string): void {
    let title: string;
    let userMessage: string;

    switch (type) {
      case ErrorType.VALIDATION:
        title = "Invalid Input";
        userMessage = message || "Please check your input and try again.";
        break;
      case ErrorType.NETWORK:
        title = "Connection Error";
        userMessage = "Please check your internet connection and try again.";
        break;
      case ErrorType.STORAGE:
        title = "Storage Error";
        userMessage = "Unable to save your data. Please try again.";
        break;
      default:
        title = "Error";
        userMessage = "An unexpected error occurred. Please try again.";
    }

    Alert.alert(title, userMessage);
  }
}

export const errorHandler = ErrorHandler.getInstance();