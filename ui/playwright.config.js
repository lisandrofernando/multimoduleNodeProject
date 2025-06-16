import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

const config = ({
  testDir: './tests',
  timeout: 30 * 1000, // 30 seconds to overwrite the default timeout
  expect: {
    timeout: 5000 // 5 seconds for expect assertions
  },

  reporter: 'html',

  use: {
    browserName: 'chromium', // Default browser to use
    screenshot: 'on', // Take screenshots only on test failure
    trace: 'retain-on-failure', // Retain trace files for debugging


  },

  
});

module.exports = config;
