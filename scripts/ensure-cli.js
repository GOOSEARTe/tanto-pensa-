const { execSync } = require('child_process');
const { join } = require('path');

// Configuration
const CONFIG = {
  CLI_PACKAGE: 'nativescript',
  INSTALL_TIMEOUT: 120000, // 2 minutes
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 2000
};

// Platform-specific commands
const COMMANDS = {
  CHECK_CLI: process.platform === 'win32' ? 'where ns' : 'which ns',
  INSTALL_CLI: `npm install -g ${CONFIG.CLI_PACKAGE}`
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function checkNativeScriptCLI() {
  try {
    execSync(COMMANDS.CHECK_CLI, { stdio: 'ignore' });
    console.log('✓ NativeScript CLI is installed');
    return true;
  } catch (error) {
    return false;
  }
}

async function installNativeScriptCLI() {
  console.log('× NativeScript CLI is not installed');
  console.log('Installing NativeScript CLI globally...');
  
  for (let attempt = 1; attempt <= CONFIG.RETRY_ATTEMPTS; attempt++) {
    try {
      execSync(COMMANDS.INSTALL_CLI, { 
        stdio: 'inherit',
        timeout: CONFIG.INSTALL_TIMEOUT
      });
      
      // Verify installation
      if (checkNativeScriptCLI()) {
        console.log('✓ NativeScript CLI installed successfully');
        return true;
      }
      
      throw new Error('Installation verification failed');
    } catch (error) {
      console.error(`\n× Installation attempt ${attempt} failed`);
      
      if (attempt < CONFIG.RETRY_ATTEMPTS) {
        console.log(`Retrying in ${CONFIG.RETRY_DELAY/1000} seconds...`);
        await sleep(CONFIG.RETRY_DELAY);
      }
    }
  }
  
  console.error('\n× Failed to install NativeScript CLI after multiple attempts');
  console.error('\nPlease try the following:');
  console.error('1. Install manually:');
  console.error(`   npm install -g ${CONFIG.CLI_PACKAGE}`);
  console.error('2. Check your network connection');
  console.error('3. Verify npm permissions');
  process.exit(1);
}

// Main execution
(async () => {
  try {
    if (!checkNativeScriptCLI()) {
      await installNativeScriptCLI();
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    process.exit(1);
  }
})();