import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { Navigator } from './navigation/Navigator';
import { ErrorBoundary } from './components/common/ErrorBoundary';

// Controls react-nativescript log verbosity.
Object.defineProperty(global, '__DEV__', { value: false });

// Initialize the app
ReactNativeScript.start(
  React.createElement(
    ErrorBoundary,
    {},
    React.createElement(Navigator, {}, null)
  )
);