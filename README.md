# NativeScript Core Application

A clean, modern NativeScript Core application with best practices implementation.

## Prerequisites

1. Node.js (v14 or later)
2. npm (v6 or later)

## Installation

The project will automatically install the NativeScript CLI globally when needed.

```bash
# Install project dependencies
npm install
```

## Running the Application

```bash
# Start the application (will install NativeScript CLI if needed)
npm start

# Run on specific platform
npm run android
npm run ios
```

## Project Structure

```
app/
├── app.js                 # Application entry point
├── app.css               # Global styles
├── app-root.xml         # Root layout
├── pages/              # Application pages
├── utils/              # Utility functions
│   ├── logger/         # Logging utilities
│   ├── error/          # Error handling
│   ├── network/        # Network utilities
│   └── storage/        # Storage utilities
└── initialization/     # App initialization logic
```

## Development

The project includes automatic CLI installation. When you run any NativeScript command:

1. The script checks if NativeScript CLI is installed
2. If not installed, it automatically installs it globally
3. Then runs the requested command

## Troubleshooting

If you encounter any issues:

1. Try cleaning the project:
   ```bash
   npm run clean
   ```

2. If CLI installation fails:
   ```bash
   npm install -g nativescript
   ```

3. Verify the installation:
   ```bash
   ns --version
   ```

For more help, visit the [NativeScript documentation](https://docs.nativescript.org/).