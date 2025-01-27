import * as React from "react";
import { Alert } from "@nativescript/core";
import { errorHandler, ErrorType } from "../../utils/errorHandler";
import { Button } from "./Button";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    errorHandler.handle(error, {
      type: ErrorType.UNKNOWN,
      context: "ErrorBoundary",
      showAlert: false
    });
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <stackLayout className="p-8 items-center justify-center">
          <label className="text-xl font-bold text-red-500 mb-4">
            Something went wrong
          </label>
          <label className="text-gray-600 mb-4 text-center">
            We apologize for the inconvenience. Please try again.
          </label>
          <Button onTap={this.handleReset} variant="primary">
            Try Again
          </Button>
        </stackLayout>
      );
    }

    return this.props.children;
  }
}