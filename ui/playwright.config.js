import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';


import dotenv from 'dotenv';
 import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({
  path: `./env/.env.${process.env.test_env}`,
  override: true
});

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
    baseURL: process.env.URI,
  },

  
});

module.exports = config;
