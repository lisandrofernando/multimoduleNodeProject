import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';


const config = ({
  testDir: './tests',
  retries:1,
  timeout: 30 * 1000, // 30 seconds to overwrite the default timeout
  expect: {
    timeout: 5000 // 5 seconds for expect assertions
  },

  reporter: [['html'],
  ['allure-playwright']],

  use: {
    browserName: 'chromium', // Default browser to use
    screenshot: 'on', // Take screenshots only on test failure
    trace: 'retain-on-failure', // Retain trace files for debugging
    video: 'on-first-retry', // Record video only on the first retry
  },

  
});

module.exports = config;
